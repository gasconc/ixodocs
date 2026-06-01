---
title: ESR / SwissQR Bill
summary: ' ESR / SwissQR Bill'
tags:
- payment-methods-https-documentation-ixopay-com-adapters-esr-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-esr-additional-parameters-direct-link-additional-parameters
- return-values-https-documentation-ixopay-com-adapters-esr-return-values-direct-link-return-values
- ixopay
- transaction
- gateway
source_url: https://documentation.ixopay.com/adapters/esr
portal: ixopay-dev
updated: '2026-06-01'
related: []
---

* ESR / SwissQR Bill

# ESR / SwissQR Bill
## Payment Methods[​](https://documentation.ixopay.com/adapters/esr#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| ESR  | Server-To-Server  | Debit  |  
note
Note that this method is an asynchronous payment method. The transaction on the Gateway just generates the QR code which must be presented to your customer. Once paid, the payment confirmation (bank account statement) must be reconciled based on the configured bank.
## Additional parameters[​](https://documentation.ixopay.com/adapters/esr#additional-parameters "Direct link to Additional parameters")
  * `additionalId1`: mandatory - must contain the reference number for the bill.
  * `description`: optional - description for the bill
  * `customer.firstName`: optional
  * `customer.lastName`: optional
  * `customer.billingAddress1`: optional
  * `customer.billingPostcode`: optional
  * `customer.billingCity`: optional
  * `customer.billingCountry`: optional

## Return Values[​](https://documentation.ixopay.com/adapters/esr#return-values "Direct link to Return Values")
In the response you will find the key `qrCode` within the `extraData` element. This contains the base64-encoded Image for the QR Code.