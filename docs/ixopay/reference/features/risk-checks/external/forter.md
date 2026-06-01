---
title: Forter
summary: ' Risk checkshttps://documentation.ixopay.com/docs/reference/features/risk-checks  External
  risk checkshttps://documentation.ixopay.com/docs/reference/features/risk-checks/external'
tags:
- transaction-extra-data-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-forter-transaction-extra-data-direct-link-transaction-extra-data
- initializing-risk-script-https-documentation-ixopay-com-docs-reference-features-risk-checks-external-forter-initializing-risk-script-direct-link-initializing-risk-script
- api
- ixopay
- transaction
- gateway
source_url: https://documentation.ixopay.com/docs/reference/features/risk-checks/external/forter
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks)
  * [External risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks/external)
  * Forter

# Forter
When processing transactions through the [IXOPAY platform](https://www.ixopay.com), Forter external risk checks can be utilized to enhance your transaction security. This guide covers the necessary steps to initiate these checks.
## Transaction extra data[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/forter#transaction-extra-data "Direct link to Transaction extra data")
The proper implementation of Forter risk checks requires specific `extraData` to be incorporated into calls to the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api). For the specific details on what needs to be included, please refer to [Adapters: External Risk - Forter External Risk Adapter](https://documentation.ixopay.com/adapters/external-risk#forter-external-risk-adapter).
## Initializing the risk script[​](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/forter#initializing-the-risk-script "Direct link to Initializing the risk script")
Depending on the configuration of your risk profile or connector, you might need to manually initialize the Forter risk scripts. There are two scenarios:
  * Using payment.js
  * Without payment.js

In cases where the connector or risk profile associated with your _Public Integration Key_ isn't set to automatically initialize Forter, you need to manually initiate it with payment.js. If _Init Scripts Automatically_ is enabled, no further javascript steps are required for embedding Forter.
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "forter" });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```If you are not utilizing PaymentJS, you can still manually initialize the Forter risk script with the following steps.
```

<script src="https://gateway.ixopay.com/js/risk-scripts/forter-dc.min.js"></script>  

<script>  

  // retrieve from your Forter dashbaord differs from PROD / DEV environment  

  const forterSiteId = "forter-site-id";  

  const forterHandler = new ForterDcHandler(forterSiteId);  

  

  forterHandler.initForterDc((forterToken) => {  

    // provide as transaction extra data FORTER_TOKEN or forter_token  

    document.getElementById("hidden-forter-token-id").value = forterToken;  

  });  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Forter. If you encounter issues, review your connector configuration or the extra data you're providing.
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "forter" });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/forter-dc.min.js"></script>  

<script>  

  // retrieve from your Forter dashbaord differs from PROD / DEV environment  

  const forterSiteId = "forter-site-id";  

  const forterHandler = new ForterDcHandler(forterSiteId);  

  

  forterHandler.initForterDc((forterToken) => {  

    // provide as transaction extra data FORTER_TOKEN or forter_token  

    document.getElementById("hidden-forter-token-id").value = forterToken;  

  });  

</script>  

```
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "forter" });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/forter-dc.min.js"></script>  

<script>  

  // retrieve from your Forter dashbaord differs from PROD / DEV environment  

  const forterSiteId = "forter-site-id";  

  const forterHandler = new ForterDcHandler(forterSiteId);  

  

  forterHandler.initForterDc((forterToken) => {  

    // provide as transaction extra data FORTER_TOKEN or forter_token  

    document.getElementById("hidden-forter-token-id").value = forterToken;  

  });  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Forter. If you encounter issues, review your connector configuration or the extra data you're providing.
  * [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks)
  * [External risk checks](https://documentation.ixopay.com/docs/reference/features/risk-checks/external)
  * Forter
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "forter" });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/forter-dc.min.js"></script>  

<script>  

  // retrieve from your Forter dashbaord differs from PROD / DEV environment  

  const forterSiteId = "forter-site-id";  

  const forterHandler = new ForterDcHandler(forterSiteId);  

  

  forterHandler.initForterDc((forterToken) => {  

    // provide as transaction extra data FORTER_TOKEN or forter_token  

    document.getElementById("hidden-forter-token-id").value = forterToken;  

  });  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Forter. If you encounter issues, review your connector configuration or the extra data you're providing.
  * [Transaction extra data](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/forter#transaction-extra-data)
  * [Initializing the risk script](https://documentation.ixopay.com/docs/reference/features/risk-checks/external/forter#initializing-the-risk-script)
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "forter" });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/forter-dc.min.js"></script>  

<script>  

  // retrieve from your Forter dashbaord differs from PROD / DEV environment  

  const forterSiteId = "forter-site-id";  

  const forterHandler = new ForterDcHandler(forterSiteId);  

  

  forterHandler.initForterDc((forterToken) => {  

    // provide as transaction extra data FORTER_TOKEN or forter_token  

    document.getElementById("hidden-forter-token-id").value = forterToken;  

  });  

</script>  

```
```

<script>  

  const payment = new PaymentJs("1.2");  

  

  payment.init("public-integration-key", "number_div", "cvv_div", (payment) => {  

    // ...  

    try {  

      payment.initRiskScript({ type: "forter" });  

    } catch (exception) {  

      //this might happen on an invalid configuration at risk profile or connector level  

    }  

  });  

</script>  

```
```

<script src="https://gateway.ixopay.com/js/risk-scripts/forter-dc.min.js"></script>  

<script>  

  // retrieve from your Forter dashbaord differs from PROD / DEV environment  

  const forterSiteId = "forter-site-id";  

  const forterHandler = new ForterDcHandler(forterSiteId);  

  

  forterHandler.initForterDc((forterToken) => {  

    // provide as transaction extra data FORTER_TOKEN or forter_token  

    document.getElementById("hidden-forter-token-id").value = forterToken;  

  });  

</script>  

```Remember to accurately include all necessary information for successful risk checks with Forter. If you encounter issues, review your connector configuration or the extra data you're providing.