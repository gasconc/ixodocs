---
title: SCB
summary: This page provides an overview of the payments methods provided by the SCB
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating SCB within your payments landscape, as
  well as an overview of the parameters required when submitting
tags:
- payment-methods-https-documentation-ixopay-com-adapters-scb-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-scb-additional-parameters-direct-link-additional-parameters
- api
- ixopay
- bank-transfer
- transaction
- merchant
source_url: https://documentation.ixopay.com/adapters/scb
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* SCB

# SCB
This page provides an overview of the payments methods provided by the SCB adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating SCB within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/scb#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Bank Transfer  | Full-Page Redirect & Server-to-Server  | Register & Debit  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/scb#additional-parameters "Direct link to Additional Parameters")  
| Parameter  | Required  | Transaction Types  | Description  |  
| --- | --- | --- | --- |  
| language  | false  | register & debit  | Language of shopper. Possible values: TH and EN (default)  |  
| additionalId1  | **true**  | register  | Merchant reference  |  
| additionalId2  | false  | register  | Merchant reference  |  
| Description  | false  | register  | Option description, passed on during register  |  
| national ID (customer)  | false  | register  | Citizen ID  |  
| success URL  | **true**  | register  | URL to where the shopper will be back-directed to the merchant  |  
| error URL  | false  | register  | URL to where the shopper will be back-directed to the merchant (defaults to success URL if not present)  |  
| iban (customer)  | **conditional**  | debit  | Bank account to charge; alternatively it's possible to provide a reference to a register TX  |  
| identification (customer)  | false  | debit  | Merchant's customer identifier  |