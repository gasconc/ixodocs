---
title: Setting up your account
summary: ' Getting startedhttps://documentation.ixopay.com/docs/guides/getting-started  Setting
  up your account'
tags:
- creating-account-https-documentation-ixopay-com-docs-guides-getting-started-setup-creating-account-direct-link-creating-account
- starter-growth-https-documentation-ixopay-com-docs-guides-getting-started-setup-starter-growth-direct-link-starter-growth
- enterprise-https-documentation-ixopay-com-docs-guides-getting-started-setup-enterprise-direct-link-enterprise
- configuring-settings-https-documentation-ixopay-com-docs-guides-getting-started-setup-configuring-settings-direct-link-configuring-settings
- step-create-merchant-profile-https-documentation-ixopay-com-docs-guides-getting-started-setup-step-create-merchant-profile-direct-link-step-create-merchant-profile
- step-create-api-user-https-documentation-ixopay-com-docs-guides-getting-started-setup-step-create-api-user-direct-link-step-create-api-user
- step-create-connector-https-documentation-ixopay-com-docs-guides-getting-started-setup-step-create-connector-direct-link-step-create-connector
- api
- ixopay
- acquirer
source_url: https://documentation.ixopay.com/docs/guides/getting-started/setup
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* [Getting started](https://documentation.ixopay.com/docs/guides/getting-started)
  * Setting up your account

# Setting up your account
To start processing online payments with [IXOPAY platform](https://www.ixopay.com), you will need to set up an account. This page will guide you through the steps of creating and configuring your account.
Create an account
Create a merchant profile
Create an API user
Create a connector
## Creating an Account[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#creating-an-account "Direct link to Creating an Account")
### Starter & Growth[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#starter--growth "Direct link to Starter & Growth")
To create an account with IXOPAY platform, [click here](https://www.ixopay.com/en/product/ixopay-starter-growth-signup). You will need to provide some basic information such as your name, email address and company details.
Once you have filled in the required information, you will be asked to verify your email address and company details. Follow the instructions to complete the process.
After your account has been created, you will need to [configure some settings](https://documentation.ixopay.com/docs/guides/getting-started/setup#configuring-your-settings) before you can start accepting payments.
### Enterprise[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#enterprise "Direct link to Enterprise")
Please contact [IXOPAY](https://www.ixopay.com) sales using the [contact form](https://www.ixopay.com/en/contact) or via sales@ixopay.com.
Enterprise accounts have access to more features than starter & growth, such as the [Reconciliation API](https://documentation.ixopay.com/api/reconciliation/reconciliation-api), the [Settlement API](https://documentation.ixopay.com/api/settlement/settlement-api) and the [Provisioning API](https://documentation.ixopay.com/api/provisioning/provisioning-api).
## Configuring your settings[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#configuring-your-settings "Direct link to Configuring your settings")
### Step 1: Create a merchant profile[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#step-1-create-a-merchant-profile "Direct link to Step 1: Create a merchant profile")
Merchants in IXOPAY platform are a central entity. They are the actual operators of a sales channel, selling goods or services to customers and processing transactions via the platform.
  1. Navigate to _Merchant Configuration_ > _Merchants_ in the left menu.
  2. Click _➕ New Merchant_.
  3. Fill in the mandatory fields _Merchants name_ , _Timezone_ and _Website_.
  4. Fill in additional optional fields in the _Basic data_ , _Rolling Reserve_ and _Additional data_ sections.
  5. Click _➕ Create Merchant_. The newly created merchant is enabled immediately and can be found in the _Merchant Overview_ , where you can edit it and its associated configuration elements.
  6. Click on **Overview** to open your newly created merchant in the _Merchant Overview_.

![Merchant list](https://documentation.ixopay.com/assets/ideal-img/setup-merchants.6c71a84.1280.png)Merchant list![Create merchant](https://documentation.ixopay.com/assets/ideal-img/setup-create-merchant.8eebe49.1280.png)Create merchant![Merchant overview](https://documentation.ixopay.com/assets/ideal-img/setup-merchant-overview.394a300.1280.png)Merchant overview
### Step 2: Create an API user[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#step-2-create-an-api-user "Direct link to Step 2: Create an API user")
  1. In the _Merchant Overview_ , select _Users_ from the drop-down menu at the top of the page (_Overview_ is selected by default).
  2. Click on _➕ New User_.
  3. Enter the required _Base Data_ for the User:
     * _Username_ ,
     * _Email_ address
  4. Select **api** as the _User Type_.
  5. Either type in a Password or click on _Generate_ to let IXOPAY platform generate a random password.
  6. Click on _➕ Create User_ to confirm your entries and add the user.

![User list](https://documentation.ixopay.com/assets/ideal-img/setup-users.429adc7.1280.png)User list![User create](https://documentation.ixopay.com/assets/ideal-img/setup-create-user.e71554f.1280.png)User create
info
Make a copy of the username and password as you'll need it to access the API. We will refer to these as `$USERNAME` and `$PASSWORD` in this guide from now on.
### Step 3: Create a connector[​](https://documentation.ixopay.com/docs/guides/getting-started/setup#step-3-create-a-connector "Direct link to Step 3: Create a connector")
In order to process transactions through a PSP/acquirer, connectors need to be configured for each merchant. A connector connects to the PSP/acquirer and handles all communication between IXOPAY platform and the PSP/acquirer. The IXOPAY platform offers a wide range of adapters for different PSPs/acquirers that you can use to access and manage various payment methods from within the platform. This allows your merchants to integrate multiple providers and payment methods.
A new connector needs to be created per merchant for each unique combination of end-point, account/credentials (from your PSP/acquirer) and payment method.
![Connector list](https://documentation.ixopay.com/assets/ideal-img/setup-connectors.82e39c1.1280.png)Connector list![Create connector - base data](https://documentation.ixopay.com/assets/ideal-img/setup-create-connector-step1.a261353.1280.png)Create connector - base data![Create connector - configuration](https://documentation.ixopay.com/assets/ideal-img/setup-create-connector-step2.6c00a62.1280.png)Create connector - configuration![Connector overview](https://documentation.ixopay.com/assets/ideal-img/setup-connector-overview.20a7772.1280.png)Connector overview
  1. Select _Connectors_ from the drop-down menu at the top of the page.
  2. Click on _New Connector ⬇️_ and select _➕ New Connector_ from the drop-down menu.
  3. Enter the _Base data_ :
The base data includes data required to access your connector via the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) and metadata used to identify the connector.
    1. _Name_ - Enter a descriptive name
Tip: Use a naming convention
We recommend using a consistent naming convention to make connectors easy to recognize, e.g. `  `.
    2. _API Key_ - Enter a unique key without blank spaces
Info: Save this
You need this key to select the connector via the API. We will refer to this as `$API_KEY` in this guide from now on.
    3. _Shared secret_ and _Public Integration Key_ - Either enter a secret key manually or click on _Generate_ to generate a unique key.
info
You need the _shared secret_ to validate incoming [callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) and the _public integration key_ to integrate [payment.js](https://documentation.ixopay.com/docs/guides/getting-started/accept-payments/payment.js). We will refer to these as `$SHARED_SECRET` and `$INTEGRATION_KEY` in this guide from now on.
    4. Leave the default values for the other fields.
    5. Click on _Next Step_ to save your entries.
  4. Enter the _Configuration_ :
Info: Quickstart
To try out the API integration without connecting to a real-world PSP, choose:
    1. _Adapter_ - **Simulator** (use the search function to quickly locate this entry).
    2. _Method_ - **Creditcard**.
    3. _Interface Type_ - **Simulator** (this field is only displayed after selecting **Creditcard** as the method).
    4. Leave the default value for the other fields.
    5. Click on _💾 Create_ to save your settings.
Enter your credentials to use your connector with your PSP/acquirer's API.
    1. _Adapter_ : Choose the adapter you want to configure from the list.
    2. _Method_ : Select the payment method you want to configure.
    3. _Interface Type_ : This field is only displayed if the chosen adapter and payment method offer multiple API connections. Select your chosen API.
    4. Enter the credentials needed to connect with the PSP/acquirer to process transactions. Each adapter needs its own individual settings. To find out which settings to enter for your connector, refer to the information about your adapter on the [Adapters](https://documentation.ixopay.com/adapters/simulator) page.
    5. Click _💾 Create_ to save your settings.

You have now set everything up to start accepting payments in your application.