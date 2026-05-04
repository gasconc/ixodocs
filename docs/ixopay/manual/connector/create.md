---
title: Create and Assign Connectors & Adapters
summary: ' Create and Assign Connectors & Adapters'
tags:
- video-create-configure-connector-https-documentation-ixopay-com-manual-docs-connector-create-video-create-configure-connector-direct-link-video-create-configure-connector
- create-configure-connector-https-documentation-ixopay-com-manual-docs-connector-create-create-configure-connector-direct-link-create-configure-connector
- configure-pci-compliant-connector-https-documentation-ixopay-com-manual-docs-connector-create-configure-pci-compliant-connector-direct-link-configure-pci-compliant-connector
- secure-configuration-https-documentation-ixopay-com-manual-docs-connector-create-secure-configuration-direct-link-secure-configuration
- additional-configurations-https-documentation-ixopay-com-manual-docs-connector-create-additional-configurations-direct-link-additional-configurations
- api
- 3d-secure
- pci
- tokenization
- ixopay
source_url: https://documentation.ixopay.com/manual/docs/connector/create
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * Create and Assign Connectors & Adapters

# Create and Assign Connectors & Adapters
In order to be able to process transaction through a PSP/Acquirer, each Merchant needs a technical integration configured specifically for it, a Connector. The [IXOPAY platform](https://www.ixopay.com) offers a wide range of technical integrations, Adapters, with different PSPs/Acquirers enabling you to access and manage various payment methods from one single platform. This gives your Merchants the opportunity to expand their offer of available payment solutions.
For each combination of end-point, account/set of credentials from a PSP/Acquirer and used different payment methods, the Merchant needs to create a new Connector.
## Video: Create and Configure a Connector[​](https://documentation.ixopay.com/manual/docs/connector/create#video-create-and-configure-a-connector "Direct link to Video: Create and Configure a Connector")
Learn how to create and configure a new Connector within the IXOPAY platform
info
If you cannot choose the Adapter you want during creation, please check if the correct permission is enabled for your role. More about role permissions in [Roles](https://documentation.ixopay.com/manual/docs/system-setup/roles).
info
As a best practice we recommend to use a naming convention to make connectors better recognizable. For example: "ACME ARG CC Provider xyz", "ACME ARG DirectDebit Provider abc".
## Create and configure a Connector[​](https://documentation.ixopay.com/manual/docs/connector/create#create-and-configure-a-connector "Direct link to Create and configure a Connector")
To create a new Connector please follow the instructions below:
  1. Navigate to the **Global Merchants Overview** (see Global Merchants Overview)
  2. Click on the button **Connectors** on the Merchant for which you want to create a new Connector
  3. Click on **New Connector** and select in the drop down menu **+ New Connector** (see Connectors Overview)
  4. **Create Connector: Step 1: Base data** (see Image Connector Base Data)
    1. **Name:** Mandatory input, make sure to chose a descriptive name (see Hint)
    2. **Description:** Optional field to further describe the Connector (e.g. payment method, platform aso.)
    3. **Provider:** Optional dropdown selection, see [Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider)
    4. **Country of business:** Optional dropdown selection
    5. **API Key:** Mandatory input, enter a unique Key name without blank spaces
    6. **Shared secret and Public Integration Key (prefilled):** Mandatory input, you can either enter a secret Key manually or simply click on **Generate** to receive a unique Key generate by the IXOPAY platform. The credentials need to be provided to the Merchant to enable him to communicate with the platform and send Transactions via the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api).
    7. **Postback Format Version:** Mandatory dropdown selection, default value is _Inherit from Request_
    8. **Risk Profile:** Optional dropdown selection, assign your predefined [Risk Profile](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles) to the Connector.
    9. **Risk Profile for use with Virtual terminal:** Optional dropdown selection, assign your predefined [Risk Profile](https://documentation.ixopay.com/manual/docs/risk-management/risk-profiles) for Virtual terminal use
    10. **Customer Profile Container** : Optional dropdown selection, assign an existing [Customer Profile](https://documentation.ixopay.com/manual/docs/tokenization/customer-profiles)
    11. **Available on Terminal:** Optional checkbox to make this Connector available for Virtual Terminal use
    12. **Available for Schedule** : Optional checkbox to make this Connector available for [Schedules](https://documentation.ixopay.com/manual/docs/transactions/schedules).
    13. Save inputs by clicking **Next Step.** You can edit the Base Data afterwards by clicking **Edit** in the Connectors Overview or Connector Detail Overview.
  5. **Create Connector: Step 2: Config** (see Connector Config)
    1. **Adapter:** Choose an Adapter you want to configure among the offered list (see Info for missing Adapters)
    2. **Method:** Select the Payment Method you want to configure
    3. **Interface Type:** This field will only appear if the chosen Adapter and its payment method offer several API connections. Please select your chosen API. (for Adapter requiring PCI compliance see next section)
    4. Enter the credentials needed to connect with the PSP/ Acquirer and thus allow Transactions. Each Adapter needs individual settings. For more information please consult your PSP/ Acquirer.
      1. **Username/Customer Number/Account ID**
      2. **Password**
      3. **API secret**
      4. **Certificate Path**
      5. **Certificate password**
      6. **Language:** Select a default language that should be displayed in case the selected User language is not available
      7. **Test Mode:** Enable this feature if you want to send Test Transactions (see [Testing - Transaction API](https://documentation.ixopay.com/manual/docs/api-testing/transaction-api))
      8. **Extra Data:** Additional mandatory and optional input fields required depending on the individual Adapter (see [Adapter-specific Guides](https://documentation.ixopay.com/manual/adapters/simulator))
    5. Save by clicking **Create.**

You'll be redirected to the Connector Detail Overview of the created Connector (see Connector Detail Overview). You can [edit the Connector Config](https://documentation.ixopay.com/manual/docs/connector/edit) afterwards by clicking **Edit** in the Connectors Overview or in the corresponding section in the Connector Detail Overview.
![Global Merchants Overview](https://documentation.ixopay.com/manual/assets/ideal-img/global-merchants-overview.270a91d.1280.png)Global Merchants Overview![Connectors Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connectors-overview.82e39c1.1280.png)Connectors Overview![New Connector](https://documentation.ixopay.com/manual/assets/ideal-img/new-connector.e2feaf4.1280.png)New Connector![Connector Base Data](https://documentation.ixopay.com/manual/assets/ideal-img/connector-base-data.558cb7f.1280.png)Connector Base Data![Connector Config](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config.6c00a62.1280.png)Connector Config![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview.20a7772.1280.png)Connector Detail Overview
PCI compliant Connectors
If you've chosen an Adapter requiring **PCI compliance** , you will be asked to start the PCI Vault configuration. You are highly encouraged to do so by clicking **Continue**. You will be re-directed to the Connector Detail Overview.
![Adapter requiring PCI compliance](https://documentation.ixopay.com/manual/assets/ideal-img/adapter-requiring-pci-compliance.b7c4246.1280.png)Adapter requiring PCI compliance
## Configure a PCI compliant Connector[​](https://documentation.ixopay.com/manual/docs/connector/create#configure-a-pci-compliant-connector "Direct link to Configure a PCI compliant Connector")
If the current Connector is the first PCI-compliant one within this Merchant, you first have to link the Merchant with the PCI environment:
  1. Click **Link Merchant** (see Link Merchant)

Configuring PCI Connectors requires you to connect to the PCI Vault (due to PCI regulations).
  1. Click on **Connect** (see Connecting to PCI Vault)

After that the IXOPAY platform will present you with a different configuration screen (see PCI Vault Configuration).
  1. Each Adapter needs individual settings. For more information please consult your PSP/ Acquirer (see [Adapter-specific Guides](https://documentation.ixopay.com/manual/adapters/simulator))
  2. Click **Save** to save the configuration

![Link Merchant](https://documentation.ixopay.com/manual/assets/ideal-img/link-merchant.95ad5a1.1280.png)Link Merchant![Connecting to PCI Vault](https://documentation.ixopay.com/manual/assets/ideal-img/connecting-to-pci-vault.4393b46.1036.png)Connecting to PCI Vault![PCI Vault Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/pci-vault-configuration.541016b.1280.png)PCI Vault Configuration
note
During the Vault Configuration you may also switch tabs to **Config** to add or change parameters there. However **do not change Parameters ConnectorGUID and tokenizePublicKey** , as these parameter are necessary to connect to the Vault environment and changing will destroy the mapping.
tip
Once saved, Connectors are enabled by default. Archiving an enabled Connector will disable it automatically.
## 3D-Secure Configuration[​](https://documentation.ixopay.com/manual/docs/connector/create#3d-secure-configuration "Direct link to 3D-Secure Configuration")
The IXOPAY platform enables you to add an additional layer of security for your Credit Card payments by configuring 3D-Secure authentication for Adapters if supported. You can either use our [IXOPAY](https://www.ixopay.com)-hosted 3D-Secure authentication service or use an external one. For further information see [3D-Secure Configuration](https://documentation.ixopay.com/manual/docs/connector/create/3d-secure-configuration).
## Additional Configurations[​](https://documentation.ixopay.com/manual/docs/connector/create#additional-configurations "Direct link to Additional Configurations")
Once created you can add and change additional Configurations per Connector:
  * [Connector Settings](https://documentation.ixopay.com/manual/docs/connector/edit/connector-settings)
  * [Global Settings](https://documentation.ixopay.com/manual/docs/connector/edit/global-connector-settings)
  * [Payment Templates.](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates)
  * [Post-Processing](https://documentation.ixopay.com/manual/docs/connector/post-processing)
  * [Terminals](https://documentation.ixopay.com/manual/docs/connector/terminals)

  * [Video: Create and Configure a Connector](https://documentation.ixopay.com/manual/docs/connector/create#video-create-and-configure-a-connector)
  * [Create and configure a Connector](https://documentation.ixopay.com/manual/docs/connector/create#create-and-configure-a-connector)
  * [Configure a PCI compliant Connector](https://documentation.ixopay.com/manual/docs/connector/create#configure-a-pci-compliant-connector)
  * [3D-Secure Configuration](https://documentation.ixopay.com/manual/docs/connector/create#3d-secure-configuration)
  * [Additional Configurations](https://documentation.ixopay.com/manual/docs/connector/create#additional-configurations)