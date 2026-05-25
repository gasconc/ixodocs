---
title: Network Tokenization Setting
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Network
  Tokenization Setting'
tags:
- setup-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-network-tokenization-setting-setup-direct-link-setup
- configuration-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-network-tokenization-setting-configuration-direct-link-configuration
- creation-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-network-tokenization-setting-creation-direct-link-creation
- processing-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-network-tokenization-setting-processing-direct-link-processing
- recurring-tokenization-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-network-tokenization-setting-recurring-tokenization-direct-link-recurring-tokenization
- 3ds
- tokenization
- ixopay
- psp
- recurring
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting
portal: ixopay-manual
updated: '2026-05-25'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Network Tokenization Setting

# Network Tokenization Setting
Network Tokenization Settings allow you to configure the network tokenization behavior when processing transactions.
info
This setting can only be used if network tokenization is setup and ready for use. For more information, reach out to your Customer Success Team or contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
## Setup[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#setup "Direct link to Setup")
To configure the Network Tokenization Setting:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click **Edit** on the **Settings** section
  3. Select the Connector Setting **Network Tokenization Setting** and click **Add**
  4. Configure the settings as desired and click **Save**

![Network Tokenization Setting](https://documentation.ixopay.com/manual/assets/ideal-img/network-tokenization-setting.e8b9938.544.png)Network Tokenization Setting
## Configuration[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#configuration "Direct link to Configuration")
### Creation[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#creation "Direct link to Creation")
This setting specifies how the network token should be created.
  * **Disabled** — Disables the creation of network tokens.
  * **Tokenize after transaction** — The network token will be created after the transaction has finished processing (asynchronous). Recommended to keep processing time down. The initial transaction will use the FPAN; subsequent transactions will use the DPAN (if network tokenization was successful).
  * **Tokenize before transaction** _(default)_ — Will attempt to create the network token before processing with 3DS / PSP. May add additional processing time. Failing to create the network token will automatically queue it for asynchronous network tokenization while the current transaction will be processed using the FPAN.

### Processing[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#processing "Direct link to Processing")
This setting specifies whether the transaction will be processed using network tokens.
  * **Enabled** _(default)_ — If the adapter is network token compatible, it will process the transaction using the network token (if available).
  * **Disabled** — Disables processing transactions using network tokens.

### Recurring Tokenization[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#recurring-tokenization "Direct link to Recurring Tokenization")
This setting specifies whether network tokens should be created during subsequent transactions if no network token exists yet.
  * **Disabled** _(default)_ — Disables creating network tokens for subsequent transactions if no network token exists yet.
  * **Tokenize after transaction** — The network token will be created after the transaction has finished processing (asynchronous). Recommended to keep processing time down.
  * **Tokenize before transaction** — Will attempt to create the network token before processing with 3DS / PSP. Failing to create the network token will process the transaction using the FPAN. May add additional processing time.

  * [Setup](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#setup)
  * [Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#configuration)
    * [Creation](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#creation)
    * [Processing](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#processing)
    * [Recurring Tokenization](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/network-tokenization-setting#recurring-tokenization)