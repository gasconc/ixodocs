---
title: FacilitaPay
summary: This page provides an overview of the payments methods provided by the FacilitaPay
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating FacilitaPay within your payments landscape,
  as well as an overview of the parameters required
tags:
- payment-methods-https-documentation-ixopay-com-adapters-facilitapay-payment-methods-direct-link-payment-methods
- parameters-register-https-documentation-ixopay-com-adapters-facilitapay-parameters-register-direct-link-parameters-register
- parameters-debit-https-documentation-ixopay-com-adapters-facilitapay-parameters-debit-direct-link-parameters-debit
- parameters-payout-https-documentation-ixopay-com-adapters-facilitapay-parameters-payout-direct-link-parameters-payout
- api
- json
- ixopay
- bank-transfer
- transaction
source_url: https://documentation.ixopay.com/adapters/facilitapay
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* FacilitaPay

# FacilitaPay
This page provides an overview of the payments methods provided by the FacilitaPay adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating FacilitaPay within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/facilitapay#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Bank Transfer  | Server-to-Server  | debit, register and payout  |  
## Parameters Register[​](https://documentation.ixopay.com/adapters/facilitapay#parameters-register "Direct link to Parameters Register")  
| Parameter  | Required  | Company or Person  | Description  |  
| --- | --- | --- | --- |  
| customer.extraData.document_type  | **true**  | both  | Company/Person document type. Possible options: 'cnpj', 'tax_id' for companies and 'cpf', 'passport' for person  |  
| customer.extraData.document_number  | **true**  | both  | Company/Person document number  |  
| customer.extraData.fiscal_country  | **true**  | both  | Company/Person fiscal country e.g "BRA"  |  
| customer.extraData.social_name  | **true**  | company  | Company social name  |  
| customer.company  | **true**  | company  | Company name  |  
| customer.extraData.documents  | false  | both  | Documents as defined by Facilitapay documentation as JSON string  |  
| customer.email  | false  | both  | Company/Person email address  |  
| customer.birthDate  | false  | person  | Person birth date  |  
| customer.billingPhone  | false  | both  | Company/Person phone number  |  
| customer.extraData.creation_date  | false  | company  | Company creation date e.g. 2015-04-01  |  
| customer.billingAddress1  | false  | both  | Company/Person address street name  |  
| customer.billingAddress2  | false  | both  | Company/Person address number  |  
| customer.extraData.address_complement  | false  | both  | Company/Person address complement  |  
| customer.billingPostcode  | false  | both  | Company/Person address postal code  |  
| customer.billingCity  | false  | both  | Company/Person address city  |  
| customer.billingState  | false  | both  | Company/Person address state  |  
| customer.billingCountry  | false  | both  | Company/Person address state  |  
| customer.extraData.main_activity  | false  | company  | Company/Person main activity  |  
| customer.extraData.activity_type  | false  | company  | Company activity type. Possible options: other, open-capital, non-profit  |  
| customer.extraData.net_value  | false  | company  | Company net value  |  
| customer.extraData.net_monthly_average_income  | false  | person  | Person net monthly average income  |  
| customer.extraData.partners  | false  | company  | Partners as defined by Facilitapay documentation as JSON string  |  
| customer.extraData.account_number  | false  | both  | Company/Person account number  |  
| customer.extraData.branch_number  | false  | both  | Company/Person branch number  |  
| customer.extraData.owner_document_number  | false  | both  | Account owner CPF/CNPJ  |  
| customer.extraData.owner_name  | false  | both  | Account owner name  |  
| customer.extraData.branch_country  | false  | both  | Account branch country  |  
| customer.extraData.bank  | false  | both  | Bank object as defined by Facilitapay documentation as JSON string  |  
| customer.extraData.currency  | false  | both  | Account currency  |  
| customer.iban  | false  | both  | IBAN Number  |  
| customer.extraData.routing_number  | false  | both  | Routing number  |  
## Parameters Debit[​](https://documentation.ixopay.com/adapters/facilitapay#parameters-debit "Direct link to Parameters Debit")  
| Parameter  | Required  | Description  |  
| --- | --- | --- |  
| extraData.exchange_currency  | **true**  | Currency for exchanging  |  
| same parameters as for register  | only if no referenced register or debit with register is submitted  |   |  
## Parameters Payout[​](https://documentation.ixopay.com/adapters/facilitapay#parameters-payout "Direct link to Parameters Payout")  
| Parameter  | Required  | Description  |  
| --- | --- | --- |  
| extraData.exchange_currency  | **true**  | Currency for exchanging  |  
| same parameters as for register  | only if no referenced register or debit with register is submitted  |   |