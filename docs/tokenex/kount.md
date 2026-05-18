---
title: Kount - KHASH
summary: ' TokenEx iFrame  Third Party Integrationshttps://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations  Kount
  - KHASH'
tags:
- api
- json
- pci
- tokenex
- ixopay
- iframe
- credit-card
source_url: https://documentation.ixopay.com/modules/docs/tokenex/kount
portal: tokenex
updated: '2026-05-18'
related: []
---

* TokenEx iFrame
  * [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations)
  * Kount - KHASH

# Kount - KHASH
Support of Kount fraud services via the TokenEx iFrame.
Prerequisite
In order to use this functionality you must have established an account directly with Kount. Find more information here…
Clients with a Kount integration are able to leverage the TokenEx iframe to generate a proprietary one-way irreversible hash of the credit card PAN called a KHASH.
This functionality is only available in the PCI or PCI with CVV mode. Your TokenEx API key must also have the _FraudServiceGeneralAccess_ permission. Please contact support to add this permission.
The following are the minimal required parameters:  
| Parameter  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | True  |   |  
| tokenScheme  | enum  | True  | Use the JSON value from the Token Schemes section  |  
| authenticationKey  | string  | True  |   |  
| timestamp  | string  | True  | Must be UTC  |  
| origin  | string  | True  |   |  
| pci  | bool  | True  |   |  
| returnKhash  | bool  | True  | True: returns the kHash value for a given credit card   
False: returns kHash property with empty value  |