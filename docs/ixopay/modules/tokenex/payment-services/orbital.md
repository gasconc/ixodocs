---
title: Orbital
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-orbital-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-orbital-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-orbital-requests-direct-link-requests
- gateway-response-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-orbital-gateway-response-parameters-direct-link-gateway-response-parameters
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-orbital-responses-direct-link-responses
- api
- pci
- tokenex
- ixopay
- recurring
source_url: ''
portal: ixopay-modules
updated: '2026-04-10'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Orbital

# Orbital
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#overview "Direct link to Overview")
**Gateway Website:**   
**Developer Documentation:**   
**Default Currency:** Currency determined by Orbital Merchant ID
**Request Objects** : `BillingAddress`, `ShippingAddress`, `CreditCard`, `Check`, `OrderInfo`,`SoftDescriptors`, `StoredCredentials`, `ThreeDSecure`
**Gateway Endpoints**  
This implementation of Chase's Orbital gateway forwards requests to the below endpoints.  
**Production** :   
**Sandbox** : 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#supported-request-parameters "Direct link to Supported Request Parameters")
* denotes a required field ** denotes a required field for certain card brands  
| Field Name  | Type  | Orbital Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `gateway`  | string  | N/A  | Orbital  |  
|  `username`*  | string  |  `orbitalConnectionUsername` (header)  | Orbital Connection Username set up on Orbital Gateway. Not case-sensitive  |  
|  `password`*  | string  |  `orbitalConnectionPassword` (header)  | Orbital Connection Password used in conjunction with Orbital Username. Case-sensitive  |  
|  `merchantId`*  | string  |  `merchantID` (header)  | Gateway merchant account number assigned by Merchant Services. 6 digits in length  |  
| `version`  | string  | `version`  | Feature Release version in "x.x" format  |  
|  `merchantBin`*  | string  | `merchant.bin`  | Transaction routing definition assigned by merchant services. Currently only "_000001_ " for Stratus is supported  |  
|  `terminalId`*  | string  | `merchant.terminalId`  | Merchant Terminal ID assigned by Orbital Merchant Services  |  
|  `amount`*  | integer  | `order.amount`  | Transaction amount in whole units. Implied decimal, including those currencies that are a zero exponent. For example, both $100.00 (an exponent of 2) and ¥100 (an exponent of 0) should be sent as `amount=10000`.  |  
| `orderInfo.orderId`  | string  | `order.Id`  | Merchant-Defined Order Number. Field defined and supplied by the auth originator and echoed back in response. The first 8 characters should be unique for each transaction.  |  
| `orderInfo.industryType`  | string  | `industryType`  | Industry Type of the Transaction.   
  
Valid values:   
_EC_ - e-commerce transaction   
_IN_ - Installment   
_IV_ - IVR (PINless Debit Bill Pay Only)   
_MO_ - Mail Order transaction   
_RC_ - Recurring Payment  |  
| `creditCard.expYear`  | integer  | `paymentInstrument.card.ccExp`  | The four-digit expiration year of the card. Example: 2022  |  
| `creditCard.expMonth`  | integer  | `paymentInstrument.card.ccExp`  | The expiration month of the card. Max 2 digits. Example: 3  |  
| `creditCard.number`  | string  | `paymentInstrument.ccAccountNum`  | Card number or TokenEx token - TokenEx will replace the token with the detokenized number  |  
| `creditCard.cvv`  | string  | `cardholderVerification.ccCardVerifyNum`  | The three- or four-digit number on the back of a credit card (on the front for American Express).   
  
This field is required if the merchant would like to use the Card Code Verification (CCV) security feature.   
  
Cardholder information must be stored securely and in accordance with the Payment Card Industry (PCI) Data Security Standard.  |  
|  `creditCard.Brand`**  | string  | `paymentInstrument.card.cardBrand`  | Only Applicable to International Maestro. This field is sent to Orbital to ensure the card is processed as Maestro  |  
| `check.accountNumber`  | string  | `paymentInstrument.ecp.ecpCheckDDA`  | The customer's account number or TokenEx token - TokenEx will replace the token with the detokenized value  |  
| `check.routingNumber`  | string  | `paymentInstrument.ecp.ecpCheckRT`  | The bank's routing number.  |  
| `check.redepositFrequency`  | integer  | `paymentInstrument.ecp.ecpReDepositFreq`  | Applicable only to merchants processing standard, extended, or advanced verification Electronic check transactions. See the [Orbital documentation](https://developer.jpmorgan.com/products/orbital-api/guides/data-elements) for valid values.  |  
| `check.redepositIndicator`  | string  | `paymentInstrument.ecp.ecpReDepositInd`  | Applicable only to merchants processing standard, extended, or advanced verification Electronic check transactions. See the [Orbital documentation](https://developer.jpmorgan.com/products/orbital-api/guides/data-elements) for valid values.  |  
| `check.sameDayIndicator`  | string  | `paymentInstrument.ecp.ecpSameDayInd`  | Applicable only to merchants processing standard, extended, or advanced verification Electronic check transactions.   
  
Valid Values:   
Y- Same Day ACH requested   
N- Next Day ACH requested   
Leave blank for no change to the ACH processing  |  
| `check.imageReferenceNumber`  | string  | `paymentInstrument.ecp.ecpImageReferenceNumber`  | Image reference number associated with a check.  |  
| `check.terminalCity`  | string  | `paymentInstrument.ecp.ecpTerminalCity`  | This value corresponds to the city of the point of sale the check is processed at.  |  
| `check.terminalState`  | string  | `paymentInstrument.ecp.ecpTerminalState`  | This value corresponds to the city of the point of sale the check is processed at.  |  
| `check.actionCode`  | enum  | `paymentInstrument.ecp.ecpActionCode`  | This element is required to extend the transType for additional ECP processing methods.   
  
Valid values:   
0- Blank   
1- Validate Only   
2- Validate and Prenote (Debit, supported for GBP European Direct Debit (EUDD) processing)   
3- Validate and Verify (Credit)   
4- Advanced Verification: Validate/ASV   
5- Advanced Verification: Validate/ASV and AOA   
6- Advanced Verification: Validate/ASV/Deposit   
7- Advanced Verification: Validate/ASV and AOA / Deposit   
8- Advanced Verification: Validate/ASV / Refund   
9- Advanced Verification: Validate/ASV and AOA / Refund   
10- Advanced Verification: Validate/ASV / Pre-Note   
11- Advanced Verification: Validate/ASV and AOA / Pre-Note  |  
| `check.authorizationMethod`  | enum  | `paymentInstrument.ecp.ecpAuthMethod`  | Code used to identify the method used by customers to authorize debits to their accounts.   
  
Valid values:   
0- (blank value, default)   
1- written   
2- internet   
3- telephone   
4- accounts receivable   
5- point of purchase  |  
| `check.accountType`  | enum  | `paymentInstrument.ecp.ecpBankAcctType`  | The type of bank account. Certain bank account types require you to use certain ACH transaction types.   
Valid values:   
1- Checking   
2- Savings   
4- CorporateChecking  |  
| `check.deliveryMethod`  | enum  | `paymentInstrument.ecp.ecpDelvMethod`  | Required for Electronic Check processing.   
  
This field indicates the preferred manner to deposit the transaction.   
  
Valid values:   
1- Best possible method   
2- ACH  |  
| `billingAddress.address1`  | string  | `avsBilling.avsAddress1`  | Cardholder billing address line 1. Mandatory for PINless Debit e-commerce transactions  |  
| `billingAddress.address2`  | string  | `avsBilling.avsAddress2`  | Cardholder billing address line 2.  |  
| `billingAddress.state`  | string  | `avsBilling.avsState`  | Cardholder billing state.  |  
| `billingAddress.city`  | string  | `avsBilling.avsCity`  | Cardholder billing city.  |  
| `billingAddress.zip`  | string  | `avsBilling.avsZip`  | Cardholder billing postal code.  |  
| `billingAddress.country`  | string  | `avsBilling.avsCountryCode`  | Cardholder billing country code in Alpha-3 ISO format  |  
| `billingAddress.phone`  | string  | `avsBilling.avsPhone`  | Cardholder billing phone number.m  |  
| `billingAddress.phoneType`  | string  | `avsBilling.avsPhoneType`  | Customer's telephone type.   
  
Valid values:   
D - Day   
H - Home   
N - Night   
W - Work  |  
| `tax.Exempt`  | bool  | `level2.taxInd`  | True = tax exempt transaction   
False = tax applies to this transaction  |  
| `tax.Amount`  | integer  | `level2.taxAmount`  | Amount of sales tax assessed to the transaction. Required for Level 2 Data.   
  
Implied two decimal, including those currencies that are a zero exponent.  |  
| `tax.totalTaxAmount`  | string  | `level2.pCardTotalTaxAmount`  | Local Tax (PST or QST) on the invoice.  |  
| `tax.nationalTaxRate`  | string  | `level2.pCardNationalTaxRate`  | National Tax Rate (HST or GST). Required for MasterCard L2 transactions. Three decimals implied.   
  
For example: An interest rate of 6.25% should be sent as "06250".  |  
| `tax.nationalTax`  | string  | `level2.pCardNationalTax`  | National tax rate. Required for Visa Canada L2 transactions. Implied two decimals.  |  
| `tax.localTaxRate`  | string  | `level2.pCardLocalTaxRate`  | Local tax rate. Required for Visa interchange. Three decimals implied.  |  
| `tax.localTaxAmount`  | string  | `level2.pCardLocalTaxAmount`  | Local Tax (PST or QST) on the invoice.  |  
| `tax.pstTaxRegistrationNumber`  | string  | `level2.pCardPstTaxRegNumber`  | Canadian provincial sales tax registration number.  |  
| `tax.customerVatRegistrationNumber`  | string  | `level2.pCardCustomerVatRegNumber`  | Customer Tax Registration Number. Visa only.  |  
| `tax.merchantVatRegistrationNumber`  | string  | `level2.pCardMerchantVatRegNumber`  | Merchant VAT registration ID. Required for Visa and Mastercard Level 2 transactions.  |  
| `orderInfo.PurchaseOrderNumber`  | string  | `level2.pCardOrderID`  | Purchase order or other number used by the merchant’s customer to track the order.   
  
Required for Level 2 Data.   
  
| `orderInfo.requestorName`  | string  | `level2.pCardRequestorName`  | Name of the consumer that ordered or purchased the product or service if not the card member.  |  
| `orderInfo.commodityCode`  | string  | `level2.pCardCommodityCode`  | Commodity Code used to categorize purchases for VAT reporting.   
  
Valid values:   
LID = Line Item Detail   
SUMM = Summary Tax  |  
| `orderInfo.shippingAddress.address1`  | string  | `level2.pCardDestAddress`  | Cardholder shipping address line 1.  |  
| `orderInfo.shippingAddress.address2`  | string  | `level2.pCardDestAddress2`  | Cardholder shipping address line 2.  |  
| `orderInfo.shippingAddress.city`  | string  | `level2.pCardDestCity`  | Cardholder shipping city.  |  
| `orderInfo.shippingAddress.state`  | string  | `level2.pCardDestStateCd`  | Cardholder shipping state.  |  
| `orderInfo.shippingAddress.zip`  | string  | `level2.pCardDestZip`  | Cardholder shipping postal code.  |  
| `orderInfo.shippingAddress.firstName`  | string  | `level2.cardDestName`  | Cardholder shipping name.  |  
| `orderInfo.shippingAddress.lastName`  | string  | `level2.cardDestName`  | Cardholder shipping name.  |  
| `creditCard.amexTranAdvAddn1`  | string  | `level2.amexTranAdvAddn1`  | The TAA Record is used to further identify the purchase associated with the charge to the cardholder.   
  
It is also used in Purchasing/Procurement card transactions to provide specific details about the transaction to the cardholder for tracking purposes.   
  
TAAs should be as concise as possible, while still providing adequate information. For example, a TAA of Merchandise would not be acceptable.  |  
| `creditCard.amexTranAdvAddn2`  | string  | `level2.amexTranAdvAddn2`  | See _creditCard.amexTranAdvAddn1_ above.  |  
| `creditCard.amexTranAdvAddn3`  | string  | `level2.amexTranAdvAddn3`  | See _creditCard.amexTranAdvAddn1_ above.  |  
| `creditCard.amexTranAdvAddn4`  | string  | `level2.amexTranAdvAddn4`  | See _creditCard.amexTranAdvAddn1_ above.  |  
| `tokenExTransactionCode`  | string  |  **For Force Capture** `order.PriorAuthCd`   
  
**For Card Purchase/Capture/Refund/Void Requests** `order.TxRefNum`  |  **For Force Capture:**   
This field is being used to capture the prior approval code obtained manually in case of Force Capture request.   
  
**For Card Purchase/Capture/Refund Requests:**   
This field is being used to map the Transaction Reference Number received during authorization or purchase, and is provided in the response as tokenExTransactionCode.   
  
**_Note:_** Refunds processed after four months will require credit card details to be submitted in the refund request.  |  
| `threeDSecure.CAVV`  | string  |  **Visa** :   
`cryptogram.verifyByVisaCAVV`   
  
**MasterCard** :   
`cryptogram.mcSecureCodeAAV`   
  
**Discover** :   
`cryptogram.digitalTokenCryptogram`   
  
**AmericanExpress** :   
`cryptogram.digitalTokenCryptogram`  | Cardholder authentication verification value (CAVV).   
  
Note:- CAVV is mapped to cryptogram.digitalTokenCryptogram, If the credit card brand is other than Visa, MasterCard, Discover or AmericanExpress.  |  
| `threeDSecure.ECI`  | string  | `additionalAuthInfo.authenticationECIInd`  | Raw electronic commerce indicator (ECI)   
  
Valid values are   
2, 5, 6, 7 and 20.   
  
For more information please visit Orbital API docs [here](https://developer.jpmorgan.com/products/orbital-api/guides/data-elements)  |  
| `threeDSecure.Xid`  | string  | `cryptogram.verifyByVisaXID`  | Transaction identifier.   
Note: Only available for Card brand VISA.  |  
| `threeDSecure.DigitalTokenCryptogram`  | string  | `cryptogram.digitalTokenCryptogram`  | For Customer Digital Payment Tokens, this is the unique transaction cryptogram generated by the digital wallet provider. It should be submitted as it was received.   
  
This field is being ignored and set to CAVV value in case of card brands Discover, MasterCard, and American Express.  |  
| `threeDSecure.PaymentBrandProgramCode`  | string  | `additionalAuthInfo.pymtBrandProgramCode`  | Payment Brand Program Code   
  
Valid values:   
  
MUP=Mastercard Utility Payment Program (MUPP)   
DPB=Discover ProtectBuy   
ASK=American Express Safekey   
  
Note: Value for this parameter is set by TokenEx in case, if the card brand Discover and Amex as "DPB" and "ASK" respectively.  |  
| `threeDSecure.UseStoredAAVInd`  | string  | `cryptogram.useStoredAAVInd`  | Use Stored AAV Indicator   
  
This element is required on recurring payments for International Maestro.   
  
Valid values:   
  
Y=Submit the Static AAV stored by Gateway with this transaction.   
  
This should not be submitted if the AAV element is populated.  |  
|  `paymentActionInd`**  | string  | `additionalAuthInfo.paymentActionInd`  | **Note: If paymentActionInd is not sent, the value will be set to "F" by default.   
  
Used by Mastercard and International Maestro to clearly distinguish a pre-authorization from a final authorization. Refer to Mastercard Pre- and Final Authorizations.   
  
Valid Values:   
  
P=Pre-Authorization   
F=Final Authorization  |  
| `storedCredentials.Initiator`  | string  | `impacts merchantInitiatedTransaction.mitMsgType`  | Valid values:   
"cardholder", "merchant".   
This field is used in the inference of an Orbital mitMsgType. See table below.  |  
| `storedCredentials.CredentialStored`  | bool  | `merchantInitiatedTransaction.mitStoredCredentialInd`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials).   
True = "Y"   
False = "N"   
  
This field is used in the inference of an Orbital mitMsgType. See [table below.](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#stored-credential-transactiontype-to-orbital-mitmsgtype-inference-table)  |  
| `storedCredentials.PreviousNetworkTransactionId`  | string  | `merchantInitiatedTransaction.mitSubmittedTransactionID`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials). Obtained from Orbital response field order.mitReceivedTransactionID.  |  
| `storedCredentials.TransactionType`  | string  | `merchantInitiatedTransaction.mitMsgType`  | Valid values:   
"recurring", "installment", "unscheduled", or any specific mitMsgType. This field is used for the inference of an Orbital mitMsgType. See table below.  |  
| `softDescriptors.MerchantName`  | string(25)  | `softDesc.softDescMercName`  | The Merchant Name field should be what is most recognizable to the cardholder (Company name or trade name). The actual length of this field is tied to Host and the Size of the `Description` field used. Required for Soft Descriptors.   
  
For card actions, there are three options which affect the `MerchantName`:   
- Max 3 bytes   
- Max 7 bytes   
- Max 12 bytes   
  
Check actions:   
- Required for Check Processing transactions   
- Max 15 bytes  |  
| `softDescriptors.Description`  | string(18)  | `softDesc.softDescProdDesc`  | Provides an accurate description of the product(s).   
  
For card actions:   
- If `MerchantName`=3 bytes, then Max=18 bytes   
- If `MerchantName`=7 bytes, then Max=14 bytes   
- If `MerchantName`=12 bytes, then Max=9 bytes   
  
Check actions:   
- 10 bytes Max   
  
Required for Soft Descriptors.  |  
| `softDescriptors.MerchantUrl`  | string(13)  | `softDesc.softDescMercURL`  | Base URL of the Merchant's website.   
  
Only one of the Phone, URL, or E-mail fields should be sent; all others should be null-filled.  |  
| `softDescriptors.ContactInfo`  | string  | `softMerchantDescriptors.smdContactInfo`  | Merchant Contact Information   
  
If this element begins with a number, it is considered a phone number; otherwise, it is a URL or an email address.   
  
Valid phone formats:   
- NNN-NNN-NNNN   
- NNN-AAAAAAA   
- NNN-NNNNNNN   
  
Valid URL formats:   
- Must contain “.”   
  
Valid Email formats:   
- Must contain “@”   
  
(Non-e-Commerce) transactions with URL do not qualify for best interchange.  |  
| `softDescriptors.MerchantId`  | string  | `softMerchantDescriptors.smdMerchantID`  | Merchant Location ID   
  
Mastercard strongly recommends this field be populated and limit Max Char to 15.  |  
| `softDescriptors.MerchantDBA`  | string  | `softMerchantDescriptors.smdDBA`  | Merchant “Doing Business As” name   
  
Format:   
- Aggregator Name*Account Name  |  
| `softDescriptors.MerchantCategoryCode`  | string(4)  | `softMerchantDescriptors.smdMCC`  | Merchant MCC   
  
Merchant category code used for the authorization.  |  
| `softDescriptors.EstablishmentNumber`  | string  | `softMerchantDescriptors.smdServiceEstablishmentNum`  | Service Establishment Number (SE#)   
  
Soft merchant information SE# assigned by the Payment Facilitator and passed to Merchant Services in the transaction. If the value is not populated, it will be defaulted at transaction division level.  |  
| `softDescriptors.TaxExemptCharityIndicator`  | string  | `softMerchantDescriptors.smdTaxExemptCharityInd`  | 501(c)(3) Tax Exempt Charity Indicator   
  
Soft merchant information field that identifies if a merchant is 501(c)(3) Tax Exempt Charity eligible.   
  
Valid values:   
- Y = Merchant is 501(c)(3) eligible   
- N = Merchant is not 501(c)(3) eligible   
- `null` or “ “ = Blank   
  
This field is sent to Stratus during settlement when the following MCC codes (smdMCC) are used in authorization:   
- MCC = 8661 (Religious Organization)- MCC = 8398 (Charity)   
  
For any other MCC codes, this flag is ignored.  |  
| `softDescriptors.MerchantAddress.Address1`  | string  | `softMerchantDescriptors.smdStreet`  | Merchant Street   
  
Merchant street address 1 where transaction took place.   
  
Concatenated with `Address2` as below:   
`Address1 - Address2`  |  
| `softDescriptors.MerchantAddress.Address2`  | string  | `softMerchantDescriptors.smdStreet`  | Merchant Street   
  
Merchant street address 2 where transaction took place.   
  
Concatenated with `Address1` as below:   
`Address1 - Address2`  |  
| `softDescriptors.MerchantAddress.City`  | string  | `softDesc.softDescMercCity`  | Merchant City   
  
Merchant city where transaction took place.  |  
| `softDescriptors.MerchantAddress.State`  | string  | `softMerchantDescriptors.smdRegion`  | Merchant Region   
  
Merchant state/province where transaction took place.   
  
For US states, must be a valid value else transaction will decline.  |  
| `softDescriptors.MerchantAddress.Zip`  | string  | `softMerchantDescriptors.smdPostalCode`  | Merchant Postal Code   
  
Merchant zip/postal code where transaction took place.  |  
| `softDescriptors.MerchantAddress.Country`  | string(3)  | `softMerchantDescriptors.smdCountryCode`  | Merchant Country Code   
  
Merchant numeric ISO country code where transaction took place.  |  
| `softDescriptors.MerchantAddress.Phone`  | string(13)  | `softDesc.softDescMercPhone`  | Merchant Phone Number   
  
Valid Formats:   
- ###-###-####   
- ###-#######   
  
Only one of the Phone, URL, or E-mail fields should be sent; all others should be null-filled.  |  
| `softDescriptors.MerchantAddress.Email`  | string(19)  | `softDesc.softDescMercEmail`  | Merchant Email Address   
  
Only one of the Phone, URL, or E-mail fields should be sent; all others should be null-filled.  |  
Force Capture
_Card Force Capture_ : This transaction type captures an Authorized transaction using a prior approval code that was obtained manually or over the phone with the customer’s bank.
_Check Force Capture_ : A Force Capture request includes an e-Check transaction in the next settlement cycle without validating it at the time of the request.
**Note** : User must include tx-passthrough = true for Force Capture requests.
#### Stored Credential TransactionType to Orbital mitMsgType Inference Table[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#stored-credential-transactiontype-to-orbital-mitmsgtype-inference-table "Direct link to Stored Credential TransactionType to Orbital mitMsgType Inference Table")
The table below shows how different value combinations impact the forwarded mitMsgType field. If the below inferences do not work for your business case, send the preferred mitMsgType in the StoredCredentials.TransactionType and it will be forwarded unmodified.  
The following message types can be inferred: CSTO, CREC, CINS, CUSE, MUSE, MREC, MINS.  
The following mitMsgTypes are unable to be inferred and should be explicitly sent: CGEN, CEST, SKIP, MRSB, MRAU, MINC, MNOS, and MDEL.  
| Initiator  | CredentialStored  | TransactionType  | Forwarded mitMsgType  |  
| --- | --- | --- | --- |  
| Cardholder  | True  | null  | CUSE  |  
| Cardholder  | False  | null  | CSTO  |  
| Cardholder  | True  | unscheduled  | CUSE  |  
| Cardholder  | False  | unscheduled  | CSTO  |  
| Cardholder  | True  | recurring  | CREC  |  
| Cardholder  | False  | recurring  | CREC  |  
| Cardholder  | True  | installment  | CINS  |  
| Cardholder  | False  | installment  | CINS  |  
| Merchant  | True  | null  | MUSE  |  
| Merchant  | True  | unscheduled  | MUSE  |  
| Merchant  | True  | recurring  | MREC  |  
| Merchant  | True  | installment  | MINS  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#example-requests "Direct link to Example Requests")
  * Card Authorize/Purchase
  * Card Capture
  * Card Force Capture
  * Card Void
  * Card Refund
  * Check Purchase
  * Check Force Capture
  * Check Refund

```
{  
  "merchantBin": "000001",  
  "creditCard": {  
    "brand": "Visa",  
    "number": "4111111111111111",  
    "expMonth": 2,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "orderInfo": {  
    "orderId": "12534",  
    "industryType": "EC"  
  },  
  "storedCredentials": {  
    "initiator": "merchant",  
    "credentialStored": true,  
    "previousNetworkTransactionId": "012227692162172",  
    "transactionType": "installment"  
  },  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001"  
}  

```

```
{  
  "merchantBin": "000001",  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>"  
}  

```
{  
  "forceCapture": true,  
  "merchantBin": "000001",  
  "orderInfo": {  
    "orderId": "12534",  
    "industryType": "EC"  
  },  
  "creditCard": {  
    "brand": "Visa",  
    "number": "4111111111111111",  
    "expMonth": 2,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001",  
  "tokenExTransactionCode": "<Prior approval code obtained manually or over the phone in Base64 format>"  
}  

```
{  
  "merchantBin": "000001",  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous transaction response>"  
}  

```
{  
  "merchantBin": "000001",  
  "creditCard": {  
    "brand": "Visa",  
    "number": "4111111111111111",  
    "expMonth": 2,  
    "expYear": 2024,  
    "cvv": "123"  
  },  
  "orderInfo": {  
    "orderId": "12534",  
    "industryType": "EC"  
  },  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous transaction response>" // see note in parameter chart  
}  

```
{  
  "merchantBin": "000001",  
  "orderInfo": {  
    "orderId": "18646",  
    "industryType": "EC"  
  },  
  "check": {  
    "accountNumber": "12345670",  
    "routingNumber": "314074269"  
  },  
  "billingAddress": {  
    "firstName": "Brittany",  
    "lastName": "Rath"  
  },  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001"  
}  

```
{  
  "forceCapture": true,  
  "merchantBin": "000001",  
  "orderInfo": {  
    "orderId": "18646",  
    "industryType": "EC"  
  },  
  "check": {  
    "accountNumber": "12345670",  
    "routingNumber": "314074269"  
  },  
  "billingAddress": {  
    "firstName": "Brittany",  
    "lastName": "Rath"  
  },  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001",  
  "tokenExTransactionCode": "<Prior approval code obtained manually or over the phone in Base64 format>"  
}  

```
{  
  "merchantBin": "000001",  
  "orderInfo": {  
    "orderId": "18646",  
    "industryType": "EC"  
  },  
  "check": {  
    "accountNumber": "12345670",  
    "routingNumber": "314074269"  
  },  
  "billingAddress": {  
    "firstName": "Brittany",  
    "lastName": "Rath"  
  },  
  "amount": 1200,  
  "gateway": "Orbital",  
  "username": "<Your Orbital username>",  
  "password": "<Your Orbital password>",  
  "merchantId": "<Your Orbital merchant ID>",  
  "terminalId": "001",  
  "tokenExTransactionCode": "<TokenExTransactionCode from a previous transaction response>"  
}  

## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Orbital Result Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approved`  | boolean  | _[see notes]_  | True in the following case:   
-`order.status.procStatus` = "0" and...   
-`order.status.approvalStatus`- = "1" **_OR_** `order.status.procStatusMessage` = "Approved"  |  
| `approvalCode`  | string  | `order.status.authorizationCode`  | Unique transactional-level code issued by the bank or service establishment for approvals. PINless Debit transactions could return blanks or `N/A`.  |  
| `providerTransactionCode`  | string  | `order.txRefNum`  | A unique value is assigned by the Gateway for each transaction.  |  
| `tokenExTransactionCode`  | string  | `order.txRefNum`  | Base64 encoded Orbital gateway response field order.txRefNum  |  
| `networkTransactionId`  | string  |  `order.mitReceivedTransactionId`  
`order.receivedNetworkTransactionId`  | The transaction id returned by the brand.   
orderReceivedNetworkTransactionId for Discover cards.  |  
| `merchantReferenceId`  | string  | `order.orderID`  | Value sent in request's OrderInfo.OrderId parameter  |  
| `customerProfileId`  | string  | `profile.customerRefNum`  | Reference value that is associated with the customer at the time of the transaction.  |  
| `verificationResult.cvvRaw`  | string  | `cardholderVerification.hostCvvRespCode`  | The CVV (card verification value) response returned by issuer.  |  
| `verificationResult.avsRaw`  | string  | `avsBilling.hostAVSRespCode`  | The address verification service (AVS) response returned by issuer.  |  
| `verificationResult.providerParsed.cvvMatch`  | string  | `cardholderVerification.cvvRespCode`  | CVV match as parsed by Orbital  |  
| `verificationResult.providerParsed.avs`  | string  | `avsBilling.avsRespCode`  | AVS values as parsed by Orbital  |  
| `brandAuthResponseCode`  | string  | `order.status.paymentBrandAuthResponseCode`  | Card brand code on why the transaction failed.  |  
| `brandCategoryCode`  | string  | `order.status.paymentBrandResponseCodeCategory`  | Brand response code on why the transaction failed.  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#example-responses "Direct link to Example Responses")
  * Card Authorize
  * Card Purchase
  * Card Capture
  * Card Refund
  * Card Void
  * Gateway Error
  * Processor Error

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"transType\":\"A\",\"merchant\":{\"bin\":\"000001\",\"merchantID\":\"445138\",\"terminalID\":\"001\"},\"paymentInstrument\":{\"card\":{\"cardBrand\":\"VI\"},\"eudd\":{}},\"order\":{\"orderID\":\"2007\",\"txRefNum\":\"65722F3F062E3DAA0000044600000923415653C0\",\"txRefIdx\":\"0\",\"respDateTime\":\"20231207154655\",\"status\":{\"procStatus\":\"0\",\"procStatusMessage\":\"Approved\",\"hostRespCode\":\"100\",\"respCode\":\"00\",\"approvalStatus\":\"1\",\"authorizationCode\":\"tst933\",\"pymtBrandAuthResponseCode\":\"00\",\"pymtBrandResponseCodeCategory\":\"A\"}},\"emvInfo\":{},\"avsBilling\":{\"avsRespCode\":\"3 \",\"hostAVSRespCode\":\"  \"},\"cardholderVerification\":{\"cvvRespCode\":\"M\",\"hostCVVRespCode\":\"M\"},\"debit\":{},\"cardTypeIndicator\":{},\"earlyWarningSystem\":{},\"foreignExchange\":{},\"realTimeAccountUpdater\":{},\"giftcard\":{},\"profile\":{},\"managedBilling\":{}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "NjU3MjJGM0YwNjJFM0RBQTAwMDAwNDQ2MDAwMDA5MjM0MTU2NTNDMA==",  
    "approvalCode": "tst933",  
    "providerTransactionCode": "65722F3F062E3DAA0000044600000923415653C0",  
    "approved": true,  
    "verificationResult": {  
      "avsRaw": "  ",  
      "cvvRaw": "M",  
      "providerParsed": {  
        "cvvMatch": "M",  
        "avs": "3 "  
      }  
    },  
    "merchantReferenceId": "2007"  
  },  
  "referenceNumber": "2312071446547660830",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"transType\":\"AC\",\"merchant\":{\"bin\":\"000001\",\"merchantID\":\"445138\",\"terminalID\":\"001\"},\"paymentInstrument\":{\"card\":{\"cardBrand\":\"VI\"},\"eudd\":{}},\"order\":{\"orderID\":\"2007\",\"txRefNum\":\"65722F552263F4350000082E0000D75941565359\",\"txRefIdx\":\"1\",\"respDateTime\":\"20231207154717\",\"status\":{\"procStatus\":\"0\",\"procStatusMessage\":\"Approved\",\"hostRespCode\":\"100\",\"respCode\":\"00\",\"approvalStatus\":\"1\",\"authorizationCode\":\"tst933\",\"pymtBrandAuthResponseCode\":\"00\",\"pymtBrandResponseCodeCategory\":\"A\"}},\"emvInfo\":{},\"avsBilling\":{\"avsRespCode\":\"3 \",\"hostAVSRespCode\":\"  \"},\"cardholderVerification\":{\"cvvRespCode\":\"M\",\"hostCVVRespCode\":\"M\"},\"debit\":{},\"cardTypeIndicator\":{},\"earlyWarningSystem\":{},\"foreignExchange\":{},\"realTimeAccountUpdater\":{},\"giftcard\":{},\"profile\":{},\"managedBilling\":{}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "NjU3MjJGNTUyMjYzRjQzNTAwMDAwODJFMDAwMEQ3NTk0MTU2NTM1OQ==",  
    "approvalCode": "tst933",  
    "providerTransactionCode": "65722F552263F4350000082E0000D75941565359",  
    "approved": true,  
    "verificationResult": {  
      "avsRaw": "  ",  
      "cvvRaw": "M",  
      "providerParsed": {  
        "cvvMatch": "M",  
        "avs": "3 "  
      }  
    },  
    "merchantReferenceId": "2007"  
  },  
  "referenceNumber": "23120714471649418713",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"merchant\":{\"bin\":\"000001\",\"terminalID\":\"001\"},\"order\":{\"txRefNum\":\"65722F3F062E3DAA0000044600000923415653C0\",\"txRefIdx\":\"1\",\"respDateTime\":\"20231207165211\",\"status\":{\"procStatus\":\"0\",\"hostRespCode\":\"100\",\"respCode\":\"00\",\"approvalStatus\":\"1\",\"authorizationCode\":\"tst933\"}},\"card\":{},\"avsBilling\":{\"avsRespCode\":\"3 \",\"hostAVSRespCode\":\"  \"}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "NjU3MjJGM0YwNjJFM0RBQTAwMDAwNDQ2MDAwMDA5MjM0MTU2NTNDMA==",  
    "approvalCode": "tst933",  
    "providerTransactionCode": "65722F3F062E3DAA0000044600000923415653C0",  
    "approved": true,  
    "verificationResult": {  
      "avsRaw": "  ",  
      "providerParsed": {  
        "avs": "3 "  
      }  
    }  
  },  
  "referenceNumber": "23120715521061762585",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"transType\":\"FR\",\"merchant\":{\"bin\":\"000001\",\"merchantID\":\"445138\",\"terminalID\":\"001\"},\"paymentInstrument\":{\"card\":{\"cardBrand\":\"VI\"},\"eudd\":{}},\"order\":{\"orderID\":\"2007\",\"txRefNum\":\"65723F1D1899632F0000082D0000C53E41565398\",\"txRefIdx\":\"1\",\"respDateTime\":\"20231207165437\",\"status\":{\"procStatus\":\"0\",\"procStatusMessage\":\"Approved\",\"hostRespCode\":\"100\",\"respCode\":\"00\",\"approvalStatus\":\"1\",\"authorizationCode\":\"tst701\",\"pymtBrandAuthResponseCode\":\"00\",\"pymtBrandResponseCodeCategory\":\"A\"}},\"emvInfo\":{},\"avsBilling\":{\"avsRespCode\":\"3 \",\"hostAVSRespCode\":\"  \"},\"cardholderVerification\":{\"cvvRespCode\":\" \",\"hostCVVRespCode\":\"  \"},\"debit\":{},\"cardTypeIndicator\":{},\"earlyWarningSystem\":{},\"foreignExchange\":{},\"realTimeAccountUpdater\":{},\"giftcard\":{},\"profile\":{},\"managedBilling\":{}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "NjU3MjNGMUQxODk5NjMyRjAwMDAwODJEMDAwMEM1M0U0MTU2NTM5OA==",  
    "approvalCode": "tst701",  
    "providerTransactionCode": "65723F1D1899632F0000082D0000C53E41565398",  
    "approved": true,  
    "verificationResult": {  
      "avsRaw": "  ",  
      "cvvRaw": "  ",  
      "providerParsed": {  
        "cvvMatch": " ",  
        "avs": "3 "  
      }  
    },  
    "merchantReferenceId": "2007"  
  },  
  "referenceNumber": "23120715543697763333",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"version\":\"4.3\",\"merchant\":{\"bin\":\"000001\",\"merchantID\":\"445138\",\"terminalID\":\"001\"},\"order\":{\"orderID\":\"2007\",\"outstandingAmt\":\"0\",\"txRefNum\":\"65723F41147027A600000FFA0000FA2D415653C2\",\"txRefIdx\":\"1\",\"respDateTime\":\"20231207165527\",\"status\":{\"procStatus\":\"0\",\"approvalStatus\":\"1\"}},\"emvInfo\":{}}",  
    "gatewayErrors": [],  
    "tokenExTransactionCode": "NjU3MjNGNDExNDcwMjdBNjAwMDAwRkZBMDAwMEZBMkQ0MTU2NTNDMg==",  
    "providerTransactionCode": "65723F41147027A600000FFA0000FA2D415653C2",  
    "approved": true,  
    "verificationResult": {  
      "providerParsed": {}  
    },  
    "merchantReferenceId": "2007"  
  },  
  "referenceNumber": "23120715552661900343",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"procStatus\":\"20412\",\"procStatusMessage\":\"Precondition Failed: Security Information is missing\"}",  
    "gatewayErrors": [  
      {  
        "code": "20412",  
        "message": "Precondition Failed: Security Information is missing",  
        "source": "Gateway"  
      }  
    ],  
    "tokenExTransactionCode": "",  
    "approvalCode": "",  
    "providerTransactionCode": "",  
    "approved": false  
  },  
  "referenceNumber": "23120809580921437511",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "412"  
}  

```
{  
  "gatewayResponse": {  
    "rawResponse": "{\"transType\":\"A\",\"merchant\":{\"bin\":\"000001\",\"merchantID\":\"445138\",\"terminalID\":\"001\"},\"paymentInstrument\":{\"card\":{\"cardBrand\":\"VI\"},\"eudd\":{}},\"order\":{\"orderID\":\"2007\",\"txRefNum\":\"65733D2E0748D9E30000082B000097AA415653AC\",\"txRefIdx\":\"0\",\"respDateTime\":\"20231208105838\",\"status\":{\"procStatus\":\"0\",\"procStatusMessage\":\"Processor Decline\",\"hostRespCode\":\"303\",\"respCode\":\"52\",\"approvalStatus\":\"0\",\"pymtBrandAuthResponseCode\":\"000\",\"pymtBrandResponseCodeCategory\":\"X\"}},\"emvInfo\":{},\"avsBilling\":{\"avsRespCode\":\"3 \",\"hostAVSRespCode\":\"  \"},\"cardholderVerification\":{\"cvvRespCode\":\"M\",\"hostCVVRespCode\":\"M\"},\"debit\":{},\"cardTypeIndicator\":{},\"earlyWarningSystem\":{},\"foreignExchange\":{},\"realTimeAccountUpdater\":{},\"giftcard\":{},\"profile\":{},\"managedBilling\":{}}",  
    "gatewayErrors": [  
      {  
        "code": "52",  
        "message": "Processor Decline",  
        "source": "Gateway"  
      },  
      {  
        "code": "303",  
        "source": "Processor"  
      }  
    ],  
    "providerTransactionCode": "65733D2E0748D9E30000082B000097AA415653AC",  
    "approved": false,  
    "verificationResult": {  
      "avsRaw": "  ",  
      "cvvRaw": "M",  
      "providerParsed": {  
        "cvvMatch": "M",  
        "avs": "3 "  
      }  
    },  
    "merchantReferenceId": "2007"  
  },  
  "referenceNumber": "23120809583714811160",  
  "success": true,  
  "error": "",  
  "message": "",  
  "thirdPartyStatusCode": "200"  
}  

  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/orbital#example-responses)