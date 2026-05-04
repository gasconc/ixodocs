---
title: Emerchantpay Genesis PCI
summary: ' Emerchantpay Genesis PCI'
tags:
- payment-methods-https-documentation-ixopay-com-adapters-emerchantpaygenesis-pci-payment-methods-direct-link-payment-methods
- mandatory-parameters-debit-debit-register-register-https-documentation-ixopay-com-adapters-emerchantpaygenesis-pci-mandatory-parameters-debit-debit-register-register-direct-link-mandatory-parameters-debit-debit-register-register
- api
- pci
- ixopay
- refund
- iframe
- credit-card
- transaction
source_url: https://documentation.ixopay.com/adapters/emerchantpaygenesis-pci
portal: ixopay-dev
updated: '2026-05-04'
related: []
---

* Emerchantpay Genesis PCI

# Emerchantpay Genesis PCI
This page provides an overview of the payments methods provided by the Emerchantpay Genesis PCI adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating Emerchantpay Genesis PCI within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Payment Methods[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis-pci#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Credit Card  | Server-to-Server, iFrame Form & payment.js Integration  | Debit, Deregister, Refund, Register  |  
## Mandatory parameters for Debit, Debit with Register, Register[​](https://documentation.ixopay.com/adapters/emerchantpaygenesis-pci#mandatory-parameters-for-debit-debit-with-register-register "Direct link to Mandatory parameters for Debit, Debit with Register, Register")  
| Data  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| customer.firstName  | String  | **true**  | Customers firstname  |  
| customer.lastName  | String  | **true**  | Customers lastname  |  
| customer.billingAddress1  | String  | **true**  | Customers billing address  |  
| customer.billingPostcode  | String  | **true**  | Customers billing post code  |  
| customer.billingCity  | String  | **true**  | Customers billing city  |  
| customer.billingCountry  | ISO 3166-1 alpha-2 country code  | **true**  | Customers billing country  |  
| customer.email  | String  | **true**  | Customers email  |  
| customer.ipAddress  | IPv4 or IPv6 address  | **true**  | IPv4 or IPv6 address of customer  |