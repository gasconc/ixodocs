---
title: Handle unknown transactions postbacks
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Handle
  unknown transactions postbacks'
tags:
- ixopay
- psp
- transaction
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/handle-unknown-tx-pb
portal: ixopay-manual
updated: '2026-04-28'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Handle unknown transactions postbacks

# Handle unknown transactions postbacks
With the Connector Setting **Handle unknown transactions postbacks** you can automatically define a strategy how the [IXOPAY platform](https://www.ixopay.com) should react to unknown transaction postbacks. The setting is configured per Connector, but can also be configured as a Global Settings.
To configure the connector setting follow this steps:
  1. Go to the **Connector Detail Overview** of the desired Connector
  2. Click Edit on the **Settings** section (see Connector Detail Overview)
  3. Select the Connector Setting **Handle unknown transactions postbacks** and click Add (see Connector Settings)
  4. Select **Strategy to choose** from the dropdown:
     * _Disabled_
     * _Redirect with status code 307_ (response with same HTTP method as incoming request stating that the URL does not exist and PSP should send the request to the provided URL, Target URL is mandatory),
     * _Redirect with status code 308_ (response with same HTTP method as incoming request stating that the URL does not exist and PSP should send the request to the provided URL, Target URL is mandatory)
     * _Acknowledgement_ (status code 200 and adapter-specific response body)
     * _Forward the request_ (forwards the incoming request to the provided URL, Target URL is mandatory)
  5. Insert the **Target URL** (see Connector Parameter Settings)

![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-unknown-tx.7a85116.1280.png)Connector Detail Overview![Connector Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-settings-unknown-tx.bb0324d.1118.png)Connector Settings![Add strategy](https://documentation.ixopay.com/manual/assets/ideal-img/add-strategy.0d7eab3.1072.png)Add strategy![Connector Parameter Settings](https://documentation.ixopay.com/manual/assets/ideal-img/connector-parameter-settings.c652799.1158.png)Connector Parameter Settings
tip
For the strategy **Acknowledgement** no further processing/steps in regards to the postback is/are done in the IXOPAY platform. Strategy **Redirect** and **Forward the request** must be supported by the PSP.