---
title: Emerchantpay Genesis
summary: ' Emerchantpay Genesis'
tags:
- payment-methods-https-documentation-ixopay-com-adapters-emerchantpaygenesis-payment-methods-direct-link-payment-methods
- mandatory-parameters-debit-debit-register-register-https-documentation-ixopay-com-adapters-emerchantpaygenesis-mandatory-parameters-debit-debit-register-register-direct-link-mandatory-parameters-debit-debit-register-register
- mandatory-parameters-recurring-debit-https-documentation-ixopay-com-adapters-emerchantpaygenesis-mandatory-parameters-recurring-debit-direct-link-mandatory-parameters-recurring-debit
- mandatory-parameters-refund-https-documentation-ixopay-com-adapters-emerchantpaygenesis-mandatory-parameters-refund-direct-link-mandatory-parameters-refund
- mandatory-parameters-payout-https-documentation-ixopay-com-adapters-emerchantpaygenesis-mandatory-parameters-payout-direct-link-mandatory-parameters-payout
- supported-countries-https-documentation-ixopay-com-adapters-emerchantpaygenesis-supported-countries-direct-link-supported-countries
- api
- ixopay
- recurring
- chargeback
source_url: https://documentation.ixopay.com/adapters/emerchantpaygenesis
portal: ixopay-dev
updated: '2026-06-08'
related: []
---

* Emerchantpay Genesis

# Emerchantpay Genesis
This page provides an overview of the payments methods provided by the Emerchantpay Genesis adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Emerchantpay Genesis within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| SEPA Direct Debit  | Server-to-Server  | Debit,Debit with Register,Recurring Debit,Deregister,Refund,Register,Payout,Chargeback,Chargeback-reversal  |  
## Mandatory parameters for Debit, Debit with Register, Register[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis#mandatory-parameters-for-debit-debit-with-register-register "Direct link to Mandatory parameters for Debit, Debit with Register, Register")  
| Data  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| description  | String  | **true**  | Description of the transaction for later use  |  
| currency  | String  | **true**  | Base currency for the order with three-character currency code  |  
| amount  | Number  | **true**  | Amount of transaction in minor currency unit  |  
| remote_ip  | String  | **true**  | IPv4 or IPv6 address of customer  |  
| iban  | String  | **true**  | Customer’s IBAN number  |  
| first_name  | String  | **true**  | Customer first name  |  
| last_name  | String  | **true**  | Customer last name  |  
| address1  | String  | **true**  | Primary address  |  
| zip_code  | String  | **true**  | Postal code  |  
| city  | String  | **true**  | City  |  
| country  | String  | **true**  | Country code  |  
## Mandatory parameters for Recurring Debit[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis#mandatory-parameters-for-recurring-debit "Direct link to Mandatory parameters for Recurring Debit")  
| Data  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| description  | String  | **true**  | Description of the transaction for later use  |  
| currency  | String  | **true**  | Base currency for the order with three-character currency code  |  
| amount  | Number  | **true**  | Amount of transaction in minor currency unit  |  
| remote_ip  | String  | **true**  | IPv4 or IPv6 address of customer  |  
## Mandatory parameters for Refund[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis#mandatory-parameters-for-refund "Direct link to Mandatory parameters for Refund")  
| Data  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| description  | String  | **true**  | Description of the transaction for later use  |  
| currency  | String  | **true**  | Base currency for the order with three-character currency code  |  
| amount  | Number  | **true**  | Amount of transaction in minor currency unit  |  
## Mandatory parameters for Payout[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis#mandatory-parameters-for-payout "Direct link to Mandatory parameters for Payout")  
| Data  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| description  | String  | **true**  | Description of the transaction for later use  |  
| currency  | String  | **true**  | Base currency for the order with three-character currency code  |  
| amount  | Number  | **true**  | Amount of transaction in minor currency unit  |  
| remote_ip  | String  | **true**  | IPv4 or IPv6 address of customer  |  
| iban  | String  | **true**  | Customer’s IBAN number  |  
| bic  | String  | **true**  | SWIFT/BIC code of the customer’s bank  |  
| first_name  | String  | **true**  | Customer first name  |  
| last_name  | String  | **true**  | Customer last name  |  
| address1  | String  | **true**  | Primary address  |  
| zip_code  | String  | **true**  | Postal code  |  
| city  | String  | **true**  | City  |  
| country  | String  | **true**  | Country code  |  
## Supported countries[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis#supported-countries "Direct link to Supported countries")
AT, BE, CY, EE, FI, FR, DE, GR, IE, IT, LV, LT, LU, MT, MC, NL, PT, SK, SM, SI, ES