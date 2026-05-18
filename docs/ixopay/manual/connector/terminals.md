---
title: Terminals
summary: Some Adapters integrated in the IXOPAY platformhttps://www.ixopay.com are
  using protocols based on the ISO 8583 standard like GICC, e.Link. The ISO 8583 is
  a low-level protocol, communicating directly with the Acquirer's authorization host
  and is also used by card schemes Visa, MasterCard etc. inter
tags:
- terminal-configuration-https-documentation-ixopay-com-manual-docs-connector-terminals-terminal-configuration-direct-link-terminal-configuration
- error-handling-https-documentation-ixopay-com-manual-docs-connector-terminals-error-handling-direct-link-error-handling
- ixopay
- acquirer
- authorization
- capture
- transaction
- merchant
source_url: https://documentation.ixopay.com/manual/docs/connector/terminals
portal: ixopay-manual
updated: '2026-05-18'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * Terminals

# Terminals
Some Adapters integrated in the [IXOPAY platform](https://www.ixopay.com) are using protocols based on the **ISO 8583 standard** (like GICC, e.Link). The ISO 8583 is a low-level protocol, communicating directly with the Acquirer's authorization host and is also used by card schemes (Visa, MasterCard etc.) internally.
Adapters using a ISO 8583 interface require some additional configuration due to the nature of the protocol (see [Terminal configuration](https://documentation.ixopay.com/manual/docs/connector/terminals#terminal-configuration)). In theory, each Connector represents a _digital_ **POS terminal.** Since in the ISO 8583 protocol each Terminal can only process one Transaction at a time, The IXOPAY platform supports the creation of multiple Terminal IDs per Connector to allow simultaneous processing of multiple transactions.
note
In case you do not see the Terminal Tab for an Adapter integrated using a protocol based on the **ISO 8583 standard** , make sure to check your User Permissions for the merchant.connector.terminal.* Permissions
![Terminal Permissions](https://documentation.ixopay.com/manual/assets/ideal-img/terminal-permissions.2499c6f.1280.png)Terminal Permissions
## Terminal Configuration[​](https://documentation.ixopay.com/manual/docs/connector/terminals#terminal-configuration "Direct link to Terminal Configuration")
To configure Terminal IDs for your Connector please follow these steps:
  1. Navigate to the **Connector Detail Overview**
  2. Select the Tab **Terminals**
  3. Click **+ Terminal** to configure a new Terminal ID (see Terminals)
  4. Fill in the unique **Terminal ID,**
  5. Change the **System Trace Audit Number (STAN)** - prefilled starting from zero
  6. Change the **Capture Reference** - prefilled starting from zero
  7. **Enable** the Terminal and click **+ Create.**

After creating the Terminal it can be edited using the **Edit** Action button.
![Connector Detail Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-terminal.353c22e.1280.png)Connector Detail Overview![Terminals](https://documentation.ixopay.com/manual/assets/ideal-img/terminals.3cfc315.1280.png)Terminals![Create New Terminal](https://documentation.ixopay.com/manual/assets/ideal-img/create-new-terminal.c203c44.928.png)Create New Terminal
info
In case you do not know which IDs to configure, please get in touch with our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
## Error Handling[​](https://documentation.ixopay.com/manual/docs/connector/terminals#error-handling "Direct link to Error Handling")
As described above one Terminal ID can only process one Transaction simultaneously. The Terminal ID is blocked during the transaction processing by the IXOPAY platform and, depending on the integration, any further incoming transaction for this Connector will wait for a few seconds to be processed. If no Terminal ID becomes available, the transaction will end up in the **error state** with error reason **"too many concurrent requests"** ([Transaction List](https://documentation.ixopay.com/manual/docs/transactions/overview) filtered for this Connector). In this case simply add additional Terminal IDs for all Transactions to be processed.