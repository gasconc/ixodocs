---
title: Overview
summary: Welcome to the IXOPAY platformhttps://www.ixopay.com API reference. The IXOPAY
  platform offers several APIs to process online payments.
tags:
- api
- xml
- pci
- ixopay
- recurring
- settlement
- transaction
- merchant
- gateway
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* Overview

# Overview
Welcome to the [IXOPAY platform](https://www.ixopay.com) API reference. The IXOPAY platform offers several APIs to process online payments. These APIs provide a range of functionalities, from core transaction processing to advanced features like batch uploading transactions and push transactions.
Here is an overview of the APIs available:
  * [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api): all core transaction processing capabilities, such as creating transaction and managing schedules.
  * [Batch-upload API](https://documentation.ixopay.com/api/batch-upload): upload recurring transactions for processing.
  * [Push API](https://documentation.ixopay.com/api/push/push-api): push transactions that occurred outside the IXOPAY platform for analytics.
  * [Pay-by-Link API](https://documentation.ixopay.com/api/pay-by-link/pay-by-link-api): manage Pay-by-Links.
  * Enterprise APIs
    * [PCI API](https://documentation.ixopay.com/api/pci/pci-transaction-api): an extension of the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api) that allows PCI audited merchants to directly send card data.
    * [Customer profiles API](https://documentation.ixopay.com/api/customer-profiles/customer-profiles-api): store customer data and multiple payment instruments for your customers.
    * [Reconciliation API](https://documentation.ixopay.com/api/reconciliation/reconciliation-api): retrieve reconciliations of transactions.
    * [Settlement API](https://documentation.ixopay.com/api/settlement/settlement-api): retrieve settlement files.
    * [Provisioning API](https://documentation.ixopay.com/api/provisioning/provisioning-api): manage tenants, merchants, merchant users, and connectors.
  * Legacy APIs (deprecated)
    * [XML Transaction API](https://gateway.ixopay.com/documentation/api): the legacy XML version of the [Transaction API](https://documentation.ixopay.com/api/transaction/transaction-api).
    * [XML PCI API](https://gateway.ixopay.com/documentation/direct-pci-enabled-api): the legacy XML version of the [PCI Transaction API](https://documentation.ixopay.com/api/pci/pci-transaction-api).

Please note that while we strive to maintain backward compatibility, we recommend that you familiarize yourself with our [Forward Compatibility](https://documentation.ixopay.com/api/forward-compatibility) principles to ensure your integration remains functional with future updates.