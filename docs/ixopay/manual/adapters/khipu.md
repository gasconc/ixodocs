---
title: Khipu
summary: 'Configure the following parameters for the Connector see Connector Config
  - Khipu: 1. Fill in the mandatory Username 2.'
tags:
- data-fetcher-configuration-https-documentation-ixopay-com-manual-adapters-khipu-data-fetcher-configuration-direct-link-data-fetcher-configuration
- provider-settlement-https-documentation-ixopay-com-manual-adapters-khipu-provider-settlement-direct-link-provider-settlement
- api
- json
- ixopay
- settlement
- merchant
- gateway
- dashboard
source_url: https://documentation.ixopay.com/manual/adapters/khipu
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* Khipu

# Khipu
Configure the following parameters for the Connector (see Connector Config - Khipu):
  1. Fill in the mandatory **Username**
  2. Fill in the mandatory **Password**
  3. Fill in the mandatory **API Secret**
  4. Fill in the mandatory **Extra Data: merchantID**

![Connector Config - Khipu](https://documentation.ixopay.com/manual/assets/ideal-img/connector-config-khipu.0427f24.1280.png)Connector Config - Khipu
Credentials to configure the Connector can be found in the Khipu Dashboard ([khipu.com/dashboard](https://khipu.com/login/auth))
  1. On the top left menu click on "Yo pago" (**1)** and select your merchant "Cobrar como " **(2)**
  2. On the following page select "Opciones de la cuenta" **(3)**
  3. On the next page you can find your credentials under "Para integrar Khipu a tu sitio web"
    1. "Id de cobrador" is the merchantId **(4)**
    2. "Llave" is your API Key **(5)**

![Khipu Dashboard I](https://documentation.ixopay.com/manual/assets/ideal-img/khipu-dashboard-i.fc3f27a.708.png)Khipu Dashboard I![Khipu Dashboard II](https://documentation.ixopay.com/manual/assets/ideal-img/khipu-dashboard-ii.058b77a.484.png)Khipu Dashboard II![Khipu Dashboard III](https://documentation.ixopay.com/manual/assets/ideal-img/khipu-dashboard-iii.9e9d21c.1104.png)Khipu Dashboard III
## Data Fetcher Configuration[​](https://documentation.ixopay.com/manual/adapters/khipu#data-fetcher-configuration "Direct link to Data Fetcher Configuration")
You have the option to configure Data Fetchers (see section [Provider](https://documentation.ixopay.com/manual/docs/post-processing/provider)) either on Provider or on Connector Level, depending on which setup works better for your provider.
### Provider Settlement[​](https://documentation.ixopay.com/manual/adapters/khipu#provider-settlement "Direct link to Provider Settlement")
Configure the following Parameters for the Settlements Provider Data Fetcher to fetch surrender reports (json format) via WebService Notifications(see Edit Provider Settlement Data Fetcher Provider Level):
  1. Fill in any **Interval** — days, hours. This setting is irrelevant for the Data Fetcher, since the Data Fetcher will listen for notifications (see Khipu Account Configurations)
  2. Select the Adapter **Khipu**
  3. Fill in the mandatory **Merchant Identifier**
  4. Enable **Testmode** when using an account in developer mode

![Edit Provider Settlement Data Fetcher Provider Level](https://documentation.ixopay.com/manual/assets/ideal-img/edit-provider-settlement-data-fetcher-provider-level.d8ce0e3.990.png)Edit Provider Settlement Data Fetcher Provider Level
#### Khipu Account Configurations[​](https://documentation.ixopay.com/manual/adapters/khipu#khipu-account-configurations "Direct link to Khipu Account Configurations")
Depending on the environment for which you are configuring the notifications use the following URL structure with the **Data Fetcher ID** created in the [IXOPAY platform](https://www.ixopay.com):
  * **Sandbox:** `https://sandbox.ixopay.com/api/dataFetcher/DATA_FETCHER_ID/notification`
  * **Production:** `https://gateway.ixopay.com/api/dataFetcher/DATA_FETCHER_ID/notification`

  * [Data Fetcher Configuration](https://documentation.ixopay.com/manual/adapters/khipu#data-fetcher-configuration)
    * [Provider Settlement](https://documentation.ixopay.com/manual/adapters/khipu#provider-settlement)