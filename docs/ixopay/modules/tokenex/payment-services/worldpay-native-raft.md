---
title: Worldpay Native RAFT
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  Card/Check/Wallet
  API  Gateway Parametershttps://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters  Worldpay
  Native RAFT'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-native-raft-overview-direct-link-overview
- supported-request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-native-raft-supported-request-parameters-direct-link-supported-request-parameters
- requests-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-native-raft-requests-direct-link-requests
- responses-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-worldpay-native-raft-responses-direct-link-responses
- api
- json
- 3ds
- 3d-secure
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft
portal: ixopay-modules
updated: '2026-05-25'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * Card/Check/Wallet API
  * [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters)
  * Worldpay Native RAFT

# Worldpay Native RAFT
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#overview "Direct link to Overview")
**Gateway Website:**  **Developer Documentation:**  **Default Currency:** USD
**Request Objects** : `BillingAddress`, `CreditCard`, `ThreeDSecure`, `StoredCredentials`
**Gateway Endpoints** This implementation of Worldpay Native RAFT forwards requests to the below endpoints. **Production:**  **Sandbox:** 
## Supported Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#supported-request-parameters "Direct link to Supported Request Parameters")  
| **Field Name**  | **Type**  | **Worldpay Native RAFT Mapping**  | **Notes**  |  
| --- | --- | --- | --- |  
| `Gateway`  | String  | N/A  | WorldpayNativeRaft  |  
| `LicenseKey`  | String  | `Authorization Header`  | Value of license key normally sent within the Worldpay API's Authorization header. Do not send the Base64 encoded license. Send the bolded section of the following example: VANTIV license="**YOUR LICENSE HERE** "  |  
|  `Amount` or `MiscAmountsBalances.TransactionAmount`  | Int  | `MiscAmountsBalances.TransactionAmount`  | Transaction amount in cents. Example: $10.00 should be sent as 1000. Do not send values in both fields. Pick the variable that works best for your integration.  |  
| `MiscAmountsBalances.CashBackAmount`  | Int  | `MiscAmountsBalances.CashBackAmount`  | Cashback amount in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.SurchargeAmount`  | Int  | `MiscAmountsBalances.SurchargeAmount`  | Surcharge amount in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.ConvenienceFee`  | Int  | `MiscAmountsBalances.ConvenienceFEE`  | Convenience fee in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.TIPAmount`  | Int  | `MiscAmountsBalances.TIPAmount`  | Tip amount in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.DispensedAmount`  | Int  | `MiscAmountsBalances.DispensedAmount`  | Dispensed amount in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.CumulativeAmount`  | Int  | `MiscAmountsBalances.CumulativeAmount`  | Cumulative amount in cents. Example: $10.00 should be sent as 1000  |  
|  `tax.Amount` or `MiscAmountsBalances.SalesTaxAmount`  | Int  | `MiscAmountsBalances.SalesTAXAmount`  | Tax amount in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.PreAuthorizedAmount`  | Int  | `MiscAmountsBalances.PreauthorizedAmount`  | For previously authorized transactions (preauth completion, credit card completion), the acquirer places the amount that the transaction was originally authorized for in this field.  
For gift card purchases, this field can be sent by the acquirer to indicate the amount that was pre-authorized.  |  
| `MiscAmountsBalances.PaymentTrailingAmt`  | Int  | `MiscAmountsBalances.PaymentTrailingAmt`  | Payment trailing amount in cents. Example: $10.00 should be sent as 1000  |  
| `MiscAmountsBalances.OptumAmount`  | Int  | `MiscAmountsBalances.OPTUMAmount`  | Optum amount in cents. Example: $10.00 should be sent as 1000  |  
| `creditCard.Number`  | String  | `CardInfo.PAN`  | Card's plaintext PAN or TokenEx token. If Worldpay tokens are being sent to Worldpay, this field does not get forwarded to Worldpay.  |  
| `creditCard.ExpirationMonth and creditCard.ExpirationYear`  | Int  | `CardInfo.ExpirationDate`  | Month: 1 or 2 digits. Year: Four digits. TokenEx will combine expYear with expMonth to match the "YYMM" format.  |  
| `UseAVS`  | Boolean  |  `AddressVerificationData.AVSZIPCode`  
`AddressVerificationData.AVSAddress`  | Maps the BillingAddress.Zip and BillingAddress.Address1 to Worldpay AVS fields  |  
| `AVSResult`  | String  | `AddressVerificationData.AVSResult`  | Worldpay returns this field in the response message if the authorization request included AVSZipCode or AVSAddress.  
  
Valid values are:  
A - Address Matches, ZIP does not  
B - Address Matches, ZIP not verified  
C - Address an ZIP not verified  
D - Address and postal code match, international AVS only  
E - Edit Error or ineligible  
F - Address and ZIP match - UK only  
G - Address not verified - international  
I - Address not verified  
M - Address and postal code match, international AVS only  
N - Neither address nor ZIP match  
P - Codes match, addresses not verified  
R - System unavailable or time-out  
S - AVS not supported  
U - Address info N/A  
W - Nine digit zip matches, not address  
X - Address and nine digit zip match, domestic AVS only  
Y - Address and five digit zip match, domestic AVS only  
Z - ZIP matches, address does not  |  
| `creditCard.CVV`  | String  | `CardVerificationData.Cvv2Cvc2CIDValue`  | 3 or 4 digit Card Verification Code.  |  
| `creditCard.CvvPresenceIndicator`  | String  | `CardVerificationData.Cvv2Cvc2CIDIndicator`  | This field contains the CVV2, CVC2, or CID Presence Indicator. Use one of the following values:  
0 - The CVV2/CVC2/CID value was bypassed or not given.  
1 - The CVV2/CVC2/CID value is present.  
2 - The CVV2/CVC2/CID value is illegible.  
9 - The CVV2/CVC2/CID value is not on the card.  |  
| `CardVerificationResult`  | String  | `CardVerificationData.Cvv2Cvc2CIDResult`  | If the authorization request included CVV2, CVC2, or CID, the following values are returned:  
E - PAYPASS - UNPREDICTABLE NUMBER ERROR  
M -CVV2/CVC2/CID VALUE MATCHES  
N - CVV2/CVC2/CID VALUE DOES NOT MATCH  
P - CVV2/CVC2/CID VALUE NOT PROCESSED  
S - CVV2/CVC2/CID ON CARD, NOT REQUEST  
U - CVV2/CVC2/CID VALIDATION N/A  
Y - SWIPED AND PAYPASS - CVC1/3 ERROR  |  
| `CreditCard.WorldpayToken`  | String  | `EncryptionTokenData.TokenizedPAN`  | This field should contain a Worldpay-tokenized PAN. Sending a value in this field will cause CardInfo.PAN to not be forwarded to Worldpay.  |  
| `CreditCard.LowValueToken`  | String  | `EncryptionTokenData.LowValueToken`  | The field contains a temporary token with an expiration time that you use with eProtect (a card not present or eComm security product). Clients' (merchants) customers in a card not present online environment present a low value token in lieu of PAN and optional CVV   
information.  
Sending a value in this field will cause CardInfo.PAN to not be forwarded to Worldpay.  |  
| `tokenRequested`  | bool  | `EncryptionTokenData.WPTokenRequested`  | Setting this to TRUE will result in Worldpay tokenizing the value in CreditCard.Number and returning a WorldpayToken  |  
| `tokenRequested`  | bool  | `EncryptionTokenData.ReturnTokenizedPan`  | Setting this to TRUE will result in Worldpay tokenizing the value in CreditCard.Number and returning a WorldpayToken  |  
| `terminalData.EntryMode`  | String  | `TerminalData.EntryMode`  | Valid values are:  
SWIPED - Magnetic Stripe Swiped  
UNSPEC - Unspecified  
KEYED - Manual Entry  
CARDNOTK - Card Present but No Track  
BARCODE - Bar Code  
OCRCODE - OCR Code  
EMVCHIP - EMV Chip Read  
CONTCHIP - Contactless Chip  
CONTMAG - Contactless Magnetic Stripe  
CHIPSEC - Chip Secured Remote Payment  
FALLBMAN - Chip Card/Chip Terminal -> Failback to Manual  
FALLBMAG - Chip Card/Chip Terminal -> Failback to Magnetic Stripe  
E-COMM - Electronic Commerce/In application 3D secure processing  
CREDONFL - Credentials On File (COF)  
SWIPMICR - Swiped MICR  
IN-APP - In application 3D secure processing  
IN-STORE - In store 3D secure processing  |  
| `terminalData.TerminalType`  | String  | `TerminalData.TerminalType`  | The type of terminal that acquired the transaction. If omitted, a value of 'POS' will be used.  
Valid values are:  
  
ATMON - On premise ATM  
ATM - On premise ATM  
ATMOFF - Off premise ATM  
POS - Point of Sale  
DIALPOS - Dial POS device  
SCRIP - Scrip device  
TELEPHON - Telephone but not a Home Banking Transaction  
HOMEBANK - home Banking Device  
INTERNET - Internet Banking  
MOBIBANK - Mobile Banking  
VENDING - Vending Machine  
DVRS - Audio (Dialogic Voice Response System)  
MPOS - MPOS Device  
LIMITAMT - Limited Amount Terminal  
CAT - Cardholder Activated Terminal  
VIRTTERM - Virtual Terminal  |  
| `terminalData.TerminalNumber`  | String  | `TerminalData.TerminalNumber`  | The terminal number that the acquirer assigns. If a value is not provided, it defaults to the Worldpay Merchant ID.  |  
| `terminalData.PosConditionCode`  | String  | `TerminalData.POSConditionCode`  | A value that describes the overall environment in which the transaction takes place.  
Valid values are:  
00 - Normal Transaction of This Type  
01 - Customer Not Present  
02 - Unattended terminal, customer Operated  
03 - Merchant Suspicious of Transaction  
05 - Customer Present, Card not Present  
06 - Previously authorized  
08 - Mail/Telephone Order  
10 - Customer Identity Verified  
51 - Verification-Only Request, the transaction amount must be zero.  
59 - Electronic Commerce Transaction  |  
| `terminalData.PosEnvironment`  | String  | `TerminalData.POSEnvironment`  | Special conditions of the POS processing environment.  
Valid values are:  
C - Credential on File transaction for Visa  
F - 'Final Authorization' transaction for MasterCard  
P - Not a 'Final Authorization' transaction for MasterCard  
R - Recurring transaction for Visa  
I - Installment transaction for Visa  |  
| `terminalData.TerminalEntryCap`  | String  | `TerminalData.TerminalEntryCap`  | Indicates by which the card data was read.  
Valid values are:  
0 - Unspecified  
1 - Terminal Not Used  
2 - Magnetic Stripe Read Capable  
3 - Bar Code  
4 - OCR  
5 - Integrated Circuit Card  
6 - Contactless Magnetic Chip  
7 - Contactless Magnetic Stripe  
8 - Default or Unknown  
9 - Not Capable of Reading Card Data  
S - Magnetic Stripe Read and Manual Entry Capable  
T - Magnetic Stripe Read, Manual Entry, and Integrated Circuit Card Capable  |  
| `terminalData.AttendedDevice`  | String  | `TerminalData.AttendedDevice`  | Y/N flag indicating whether the device is attended or not.  |  
| `terminalData.OperatingEnvironment`  | String  | `TerminalData.OperatingEnvironment`  | This identifies the type of environment the transaction is being executed in.  
  
Valid values are:  
0 - No terminal used  
1 - On premise of card acceptor, attended device  
2 - On premise of card acceptor, unattended device  
3 - Off premise of card acceptor, attended device  
4 - Off premise of card acceptor, unattended device  
5 - On premise of card holder, unattended device  |  
|  `ThreeDSecure.ECI` or `OrderInfo.EcommerceIndicator`  | String  | `E-commerceData.E-commerceIndicator`  | All electronic commerce transactions must include this field to indicate the type of transaction being performed. It can also be used to distinguish various types of Bill Payment transactions. Use OrderInfo.ECommerceIndicator for non-3DS transactions.  
  
Valid values are:  
01 - Single transaction - default for Bill Payments  
02 - Recurring Transaction  
03 - Installment Payment  
05 - Verified by Visa authenticated/MasterCard SecureCode with AAV data/Discover with CAVV data.  
06 - Verified by Visa attempts processing/MasterCard SecureCode with or without AAV data/Discover with or without CAVV data.  
07 - eCommerce, but neither Verified by Visa, nor MasterCard SecureCode.  
08 - The cardholder's payment card data was transmitted to the merchant using no security method.  
09 - Used by non-U.S. merchants to designate Secure Electronic Transaction (SET) purchases. U.S. Issuers should not receive ECI of 9, unless the value was the result of a processing error or a miscoded value.  
10 - Recurring transaction (first transaction of a recurring payment series)  
20 - Token Initiated (AMEX only)  |  
| `ThreeDSecure.XID`  | String  | `E-commerceData.3dSecureData`  | If included and card number is Visa or American Express, is appended to value of CAVV field. This field expects data to already be base64 encoded. If it is already base64 encoded, it does not need to be encoded again.  |  
| `ThreeDSecure.CAVV`  | String  | `E-commerceData.3dSecureData`  | 3DS Authentication value. Use this field to pass Visa's CAVV, MasterCard's AAV, Discover's CAVV, or American Express' AEVV.  
This field expects data to already be base64 encoded. If it is already base64 encoded, it does not need to be encoded again.  |  
| `orderInfo.PurchaseOrderNumber`  | String  | `E-commerceData.E-commerceOrderNum`  | E-Commerce Order Number  |  
| `CustomerIpAddress`  | String  | `E-commerceData.E-commerceIPAddress`  | E-Commerce IP Address  |  
| `OrderInfo.LoginStatus`  | String  | `E-commerceData.LoginStatus`  | Login Status  |  
| `OrderInfo.ItemDepartment`  | String  | `E-commerceData.ItemDepartment`  | Item Department  |  
| `OrderInfo.OriginalChainId`  | String  | `E-commerceData.OriginalChainID`  | Original Chain ID  |  
| `ThreeDSecure.ReturnECI`  | String  | `E-commerceData.ReturnE-commerceIndicator`  | If the network changes the E-commerce indicator for any reason (downgrades, etc.), the new value will be returned in this field.  |  
| `ThreeDSecure.ReturnUCAFIndicator`  | String  | `E-commerceData.ReturnUCAFIndicator`  | If the network changes the UCAF indicator for any reason (downgrades, etc.), the new value will be returned in this field.  |  
| `ThreeDSecure.ReturnESLIndicator`  | String  | `E-commerceData.ReturnEcommerceSecurityLevelIndicator`  | This value contains security protocol and cardholder authentication data (SLI) for the network. It will contain either the value that Worldpay sent to the network or the modified network value should they change it in the authorization response. For follow up messages such as completions and reversals, Worldpay will attempt to retrieve the original value, but this data can be sent back up to ensure it is logged for settlement reasons.  |  
| `ThreeDSecure.ReturnUCAFAAVData`  | String  | `E-commerceData.ReturnUCAFAAVData`  | This value contains the UCAF/AAV value that Worldpay provided to the network for authorization. For follow up messages such as completions and reversals, Worldpay will attempt to retrieve the original value, but this data can be sent back up to ensure it is logged for settlement reasons.  |  
| `ThreeDSecure.ProgramProtocol`  | String  | `E-commerceData.3DSecureProgramProtocol`  | This value contains the current version of 3D secure software being used. Refer to the Mastercard processing specifications for a full list of valid values. Common values:  
1 - 3D Secure Version 1.0 (3DS 1.0)  
2 - EMV 3D Secure (3DS 2.0)  |  
| `ThreeDSecure.DSTransId`  | String  | `E-commerceData.3DSecureDirectoryServerTransactionID`  | This value is generated by the 3D secure server during the authentication transaction and passed back to the merchant along with the authentication results.  |  
| `billPaymentType`  | String  | `BillPaymentData.BillPaymentType`  | Valid values are:  
B - Standard bill payment  |  
| `GatewayRoutingId`  | String  | `GatewayRoutingId`  |    
string (GatewayRoutingId_Type) <= 4 characters  
Value used to force the transaction to a specific entity.  
Valid Values:  
ALIP - AliPay  
FGFT - Stored Value Systems  
GDOT - Green Dot  
GDT2 - Green Dot Alternate  
ICOM - Incomm  
MPLN - MasterCard Repower  
NET1 - NET1 PIN Translation  
NSPD - Netspend  
SWAY - Safeway/Blackhawk  
TSY1 - TSY1 PIN Translation  
VPLN - Visa Prepaid Load Network/ReadyLink  |  
| `ProcFlagsIndicators.PinlessRequest`  | String  | `ProcFlagsIndicators.PinlessRequest`  | Y/N flag indicating whether the customer would like Worldpay to attempt a PINLess conversion from signature to debit.  |  
| `ProcFlagsIndicators.PartialAllowed`  | String  | `ProcFlagsIndicators.PartialAllowed`  | Y/N flag indicating whether the customer allows partial authorizations.  |  
| `ProcFlagsIndicators.MerchantStandin`  | String  | `ProcFlagsIndicators.MerchantStandin`  | Y/N flag indicating whether the transaction was authorized by the merchant in standin.  |  
| `Recurring`  | Boolean  | `ProcFlagsIndicators.RecurringBillPay`  | true/false flag indicating whether the transaction is a recurring bill payment. If true, TokenEx will assign "Y" to this field.  |  
| `ProcFlagsIndicators.RecurringBillPay`  | String  | `ProcFlagsIndicators.RecurringBillPay`  | Y/N flag indicating whether the transaction is a recurring bill payment. If sent, value will overwrite any previously set value (e.g. Recurring bool)  |  
| `ProcFlagsIndicators.PaymentExistingDebt`  | String  | `ProcFlagsIndicators.PaymentExistingDebt`  | Y/N flag indicating if the transaction qualifies as a payment exist debt.  |  
| `ProcFlagsIndicators.PANMappingRequest`  | String  | `ProcFlagsIndicators.PANMappingRequest`  | Y/N flag indicating if the acquirer wishes to receive PAN Mapping data.  |  
| `ProcFlagsIndicators.SignatureCapture`  | String  | `ProcFlagsIndicators.SignatureCapture`  | Y/N flag indicating if the acquirer wishes to receive a signature capture token.  |  
| `ProcFlagsIndicators.HostCaptureAdvice`  | String  | `ProcFlagsIndicators.HostCaptureAdvice`  | Y/N flag indicating if the transaction is a host capture advice.  |  
|  `Tax.SalesTaxIndicator` or `ProcFlagsIndicators.SalesTaxIndicator`  | String  | `ProcFlagsIndicators.SalesTaxIndicator`  | Indicator to provide the status of sales tax for the transaction.  
'0' - Sales tax amount not present  
'1' - Sales tax amount present (default if a sales tax is present)  
'2' - Sales tax exempt  |  
| `ProcFlagsIndicators.EMDSettlement`  | String  | `ProcFlagsIndicators.EMDSettlement`  | Y/N flag indicating that the transaction will be settled via an EMD file submission.  |  
| `ProcFlagsIndicators.SplitShipment`  | String  | `ProcFlagsIndicators.SplitShipment`  | Y/N flag indicating if the transaction is part of a split shipment.  |  
| `ProcFlagsIndicators.IncrementalAuth`  | String  | `ProcFlagsIndicators.IncrementalAuth`  | Y/N flag indicating if the transaction is part of an incremental authorization.  |  
| `ProcFlagsIndicators.PriorAuth`  | String  | `ProcFlagsIndicators.PriorAuth`  | Y/N flag indicating if the transaction is a prior authorized transaction. Defaults to "Y" on Capture/Completion actions.  |  
| `ProcFlagsIndicators.AccountUpdaterRequest`  | String  | `ProcFlagsIndicators.AccountUpdaterRequest`  | Y/N flag indicating if the transaction supports Account Updater information in the response.  |  
| `ProcFlagsIndicators.AccountUpdaterTokenRequest`  | String  | `ProcFlagsIndicators.AccountUpdaterTokenRequest`  | Account Updater Request Flags. Valid values are:  
T - Indicator for transactions that use the account updater to send back a token on the new card number (if available).  |  
| `ProcFlagsIndicators.ReauthShipment`  | String  | `ProcFlagsIndicators.ReauthShipment`  | Y/N flag indicating if the transaction is a reauthorization of a prior shipment auth.  |  
| `ProcFlagsIndicators.MerchantFraudRiskData`  | String  | `ProcFlagsIndicators.MerchantFraudRiskData`  | Request Merchant Fraudsight Risk Data in the response.  |  
| `ProcFlagsIndicators.BenefitCardServicesRequest`  | String  | `ProcFlagsIndicators.BenefitCardServicesRequest`  | Y/N flag indicating the transaction is a Benefit Card Services request.  |  
| `ProcFlagsIndicators.RawNetworkDataRequest`  | String  | `ProcFlagsIndicators.RawNetworkDataRequest`  | Y/N flag indicating the acquirer would like the Raw Network Data returned in the response if available.  |  
| `ProcFlagsIndicators.ExtendedNetworkRoutingDataRequest`  | String  | `ProcFlagsIndicators.ExtendedNetworkRoutingDataRequest`  | Y/N flag indicating the acquirer would like the Extended Network Routing Data returned in the response if available.  |  
| `ProcFlagsIndicators.DigitalSecureRemotePaymentIndicator`  | String  | `ProcFlagsIndicators.DigitalSecureRemotePaymentIndicator`  | Y/N flag indicating that the transaction qualifies as a digital secure remote payment.  |  
| `BrandSpecificData.MastererCard.AdviceCodeIndicator`  | String  | `ProcFlagsIndicators.MastercardAdviceCodeIndicator`  | Y/N flag indicating the customer wishes to receive the Mastercard Merchant Advice Code in the response.  |  
| `ProcFlagsIndicators.InitialApplyAndBuy`  | String  | `ProcFlagsIndicators.InitialApplyAndBuy`  | Y/N flag indicating the transaction is the initial one in an Apply and Buy transaction sequence  |  
| `BrandSpecificData.Visa.ValidationCode`  | String  | `VisaSpecificData.VisaValidationCode`  | Visa calculated code to ensure that key fields in the authorization request matches their respective fields in the BASE II deferred clearing message.  |  
| `BrandSpecificData.Visa.TransactionId`  | String  | `VisaSpecificData.VisaTransactionId`  | Reference number assigned by Visa.  |  
| `BrandSpecificData.Visa.AuthCharId`  | String  | `VisaSpecificData.VisaAuthCharId`  | Code that the acquirer uses to request CPS qualification.  |  
| `BrandSpecificData.Visa.ResponseCode`  | String  | `VisaSpecificData.VisaResponseCode`  | Response code assigned to the transaction by Visa.  |  
| `BrandSpecificData.Visa.SubsequentTransactionReasonCode`  | String  | `VisaSpecificData.VisaSubsequentTransactionReasonCode`  | Value used to identify the reason for sending up a subsequent transaction. Valid values are:  
13 - Below floor limit  
17 - VRU Approved  
40 - Incremental Authorization  
41 - Resubmission  
42 - Delayed Charge  
43 - Reauthorization  
44 - No Show  
45 - Deferred Authorization  
50 - Offline Chip Approval  |  
| `BrandSpecificData.MasterCard.BankNetReferenceNumber`  | String  | `McrdSpecificData.McrdBanknetREFNUM`  | MasterCard Banknet Reference Number  |  
| `BrandSpecificData.MasterCard.BankNetSettlementDate`  | String  | `McrdSpecificData.McrdBanknetSettleDate`  | MasterCard Settlement Date (MMDD format)  |  
| `BrandSpecificData.MasterCard.SubsequentTransactionReasonCode`  | String  | `McrdSpecificData.McrdSubsequentTransactionReasonCode`  | Value used to identify the reason for sending up a subsequent transaction. Valid values are:  
13 - Below floor limit  
17 - VRU Approved  
40 - Incremental Authorization  
41 - Resubmission  
42 - Delayed Charge  
43 - Reauthorization  
44 - No Show  
45 - Deferred Authorization  
50 - Offline Chip Approval  |  
| `BrandSpecificData.MasterCard.RewardsRequest`  | String  | `McrdSpecificData.McrdRewardsReq`  | Y/N flag indicating whether the customer requests MasterCard Rewards information from the network.  |  
| `BrandSpecificData.Discover.TransactionId`  | String  | `DiscSpecificData.DiscTransactionId`  | Discover Reference Number  |  
| `BrandSpecificData.Discover.ProcessingCode`  | String  | `DiscSpecificData.DiscProcessingCode`  | Discover Reference Number  |  
| `BrandSpecificData.Discover.TraceNumber`  | String  | `DiscSpecificData.DiscTraceNumber`  | Discover Processing Code  |  
| `BrandSpecificData.Discover.EntryMode`  | String  | `DiscSpecificData.DiscEntryMode`  | Discover Sequence Number  |  
| `BrandSpecificData.Discover.PinCapability`  | String  | `DiscSpecificData.DiscPINCapability`  | Discover Entry Mode  |  
| `BrandSpecificData.Discover.TrackStatusCode`  | String  | `DiscSpecificData.DiscTrackStatusCode`  | Discover PIN Capability  |  
| `BrandSpecificData.Discover.PosDataCodes`  | String  | `DiscSpecificData.DiscPOSDataCodes`  | Discover Track Status Code  |  
| `BrandSpecificData.Discover.ResponseCode`  | String  | `DiscSpecificData.DiscResponseCode`  | Discover POS Data Codes  |  
| `BrandSpecificData.Discover.SubsequentTransactionReasonCode`  | String  | `DiscSpecificData.DiscSubsequentTransactionReasonCode`  | Discover Response Code  |  
| `BrandSpecificData.Amex.TransactionId`  | String  | `AmexSpecificData.AmexTransactionId`  | This field contains a 15-character transaction ID that American Express assigns. Worldpay only returns this for American Express transactions.  |  
| `BrandSpecificData.Amex.SellerId`  | String  | `AmexSpecificData.AmexSellerId`  | This field contains the 20-character Seller ID for American Express transactions  |  
| `BrandSpecificData.Amex.PosDataCodes`  | String  | `AmexSpecificData.AmexPOSDataCodes`  | This field contains a series of values indicating the terminal and cardholder operating environment. Worldpay only returns this for American Express transactions.  |  
| `BrandSpecificData.Amex.SubsequentTransactionReasonCode`  | String  | `AmexSpecificData.AmexSubsequentTransactionReasonCode`  | Value used to identify the reason for sending up a subsequent transaction. Valid values are:  
13 - Below floor limit  
17 - VRU Approved  
40 - Incremental Authorization  
41 - Resubmission  
42 - Delayed Charge  
43 - Reauthorization  
44 - No Show  
45 - Deferred Authorization  
50 - Offline Chip Approval  |  
| `MarketSpecificData`  | String  | `MarketSpecificData`  | This field indicates market type (vertical) of the merchant. Valid values are:  
Blank - Unspecified  
A - Auto Rental  
B - Payment  
E - Electronic Commerce Transaction Aggregation  
H - Hotel  
M - Healthcare  |  
| `Duration`  | String  | `Duration`  | Hotel/Auto Rental duration.  |  
| `merchantSpecificData.MerchantCategoryCode`  | String  | `MerchantSpecificData.MerchantCategoryCode`  | Merchant Category Code (MCC/SIC)  |  
| `merchantSpecificData.LaneRegister`  | String  | `MerchantSpecificData.LaneRegister`  | Lane/Register Number  |  
| `merchantSpecificData.Division`  | String  | `MerchantSpecificData.Division`  | Division Number  |  
| `merchantSpecificData.AcquirerCountryCode`  | String  | `MerchantSpecificData.AcquirerCountryCode`  | Acquirer Country Code  |  
| `merchantSpecificData.SellerEmail`  | String  | `MerchantSpecificData.MerchantSellerEmail`  | Merchant Seller Email. For American Express transactions, this represents the Email of the Payment Aggregators or OptBlue Participant's Seller.  |  
| `merchantSpecificData.SellerPhone`  | String  | `MerchantSpecificData.MerchantSellerPhone`  | Merchant Seller Phone. For American Express transactions, this represents the Telephone number of the Payment Aggregators or OptBlue Participant's Seller.  |  
| `merchantSpecificData.AcquirerCurrencyCode`  | String  | `MerchantSpecificData.AcquirerCurrencyCode`  | Acquirer Currency Code  |  
| `merchantSpecificData.CardAcceptorNameLocation`  | String  | `MerchantSpecificData.CardAcceptorNameLocation`  | The merchant name or location where the transaction occurred or the sender information for money transfer type transactions.  |  
| `merchantSpecificData.CardAcceptorCity`  | String  | `MerchantSpecificData.CardAcceptorCity`  | The name of the city where the transaction occurred.  |  
| `merchantSpecificData.CardAcceptorState`  | String  | `MerchantSpecificData.CardAcceptorState`  | The state where the transaction occurred.  |  
| `merchantSpecificData.CardAcceptorZipCode`  | String  | `MerchantSpecificData.CardAcceptorZipCode`  | The zip code where the transaction occurred.  |  
| `ReferenceTraceNumbers.RetrievalRefNumber`  | String  | `ReferenceTraceNumbers.RetrievalREFNumber`  | This field yields a value generated by the message originator to associate a unique identifier to a given transaction. You can use this value to identify the transaction throughout the transaction's life cycle (authorization, reversal, and so on). This value will be generated by Worldpay if not sent by the originator.  |  
| `ReferenceTraceNumbers.CorrelationId`  | String  | `ReferenceTraceNumbers.CorrelationID`  | A value that can be generated by the acquirer to associate transactions in reporting and research.  |  
| `ReferenceTraceNumbers.authorizationNumber`  | String  | `ReferenceTraceNumbers.AuthorizationNumber`  | This field contains a value generated by the authorizing processor to indicate their acceptance of the transaction. If a value is not generated by either Worldpay or the network on approved transactions, Worldpay will generate one and return it to the merchant.  |  
|  `OrderInfo.InvoiceNumber` or `ReferenceTraceNumbers.ReferenceInvoiceNumber`  | String  | `ReferenceTraceNumbers.RefInvoiceNumber`  | The field contains the customer code for Level 2 or Level 3 interchange rates. It identifies the purchase to the issuer and cardholder. This is a customer-supplied code that is typically a project number, cost center, or general ledger code. If you do not require it, Worldpay recommends using a value of "NONE". Do not send values in both fields. Pick the variable that works best for your integration.  |  
| `ReferenceTraceNumbers.DraftLocator`  | String  | `ReferenceTraceNumbers.DraftLocator`  | This field allows merchants to include the draft locator so that it can be logged and eventually presented in reporting utilities.  |  
| `MerchantId`  | String  | `WorldPayMerchantID`  | Worldpay Merchant Id  |  
| `UserDefined`  | List  |  `UserDefinedData.UserData1`  
`UserDefinedData.UserData2`  
`UserDefinedData.UserData3`  | Max 3 entries of user defined data. First item in list is assigned to UserData1, second item in list is assigned to UserData2, and third item is assigned to UserData3.  |  
|  `WalletId` or `BrandSpecificData.MasterCard.WalletId`  | String  | `WalletId`  | MasterCard-assigned Wallet ID.  |  
| `OperatorEmployee`  | String  | `OperatorEmployee`  | Employee Number/Clerk ID/Operator ID  |  
| `BatchNumber`  | String  | `BatchNumber`  | Number representing a grouping (batch) of transactions.  |  
| `BillingAddress.Zip`  | String  | `CustomerInformation.ZIPCode`  | Postal code of customer's billing address  |  
| `CreditCard.FirstName`  | String  | `CustomerInformation.CardholderFirstName`  | Cardholder's First Name  |  
| `CreditCard.LastName`  | String  | `CustomerInformation.CardholderLastName`  | Cardholder's Last Name  |  
| `BillingAddress.Address1`  | String  | `CustomerInformation.CardholderAddress1`  | Customer’s billing street address.  |  
| `BillingAddress.Address2`  | String  | `CustomerInformation.CardholderAddress2`  | Continuation of street address, if needed  |  
| `BillingAddress.City`  | String  | `CustomerInformation.CardholderCity`  | City of customer’s billing address.  |  
| `BillingAddress.State`  | String  | `CustomerInformation.CardholderState`  | State of customer’s billing address.  |  
| `BillingAddress.Country`  | String  | `CustomerInformation.CardholderCountryCode`  | Country of customer’s billing address.  |  
| `CreditCard.FullName`  | String  | `CustomerInformation.CardholderFullName`  | Default value is creditCard.Firstname + creditCard.Lastname  |  
| `PrestigiousPropertyInd`  | String  | `PrestigiousPropertyIND`  | Prestigious Property Indicator. Valid values are:  
Blank - Unspecified  
D - $500 Limit  
B - $1000 Limit  
S - $1500 Limit  |  
| `ReversalAdviceReasonCode`  | String  | `ReversalAdviceReasonCd`  |    
string (ReversalAdviceReasonCd_Type) <= 3 characters  
For reversal messages, this field contains the reason the reversal was generated. For advice messages, it contains the reason or nature of the advice. If a value is not provided, Worldpay will use default values.  
Valid values are:  
000 - Normal Reversal  
002 - Timeout Reversal  
003 - Syntax  
005 - Clerk Cancel  
006 - Customer Cancel  
010 - Previously Authorized  |  
| `Synchrony.PosData`  | String  | `PrivateLabelData.SynchronyPOSData`  | POS Data specific to Synchrony  |  
| `Synchrony.PrivateData`  | String  | `PrivateLabelData.SynchronyPrivateData`  | Positions 1-2 = Payment Source  
  
Valid values are:  
00 - Unknown  
01 - Teller  
02 - ATM  
03 - Retailer  
04 - On-line Banking  
05 - Mail  
06 - Western Union  
07 through 49 - Reserved for future use  
  
Positions 3-4 = Payment Type  
  
Valid values are:  
00 - Unknown (default)  
01 - Check  
02 - Money Order  
03 - Cash  
04 - Credit Card  
05 - Debit Card  
06 - Electronic Funds Transfer  
07 - Wire Transfer  
08 - Coupon  
09 - Mixed Tender  
10 - ACH Check  
11 - Drop to Draft Check  |  
| `AuthorizationType`  | String  | `AuthorizationType`  | Defaults to "FP" on Capture/Completion calls and "RV" on Void/Reversals.  |  
| `ApiTransactionId`  | String  | `APITransactionID`  | Unique identifier used for each transaction chain. One is automatically generated if not provided in the format of yyMMddHHmmss + 4 random alphanumerics for a total of 16 characters. Example: 220423180459Zu3x  |  
| `LocalDateTime`  | String  | `LocalDateTime`  | This field contains the merchant's local date and time in a YYYY-MM-DDTHH:mm:ss format. For example, 4:15 PM on October 31st of 2018 would be 2018-10-31T16:15:00. Any follow up type messages for gift cards (completions, reversals, etc.) should contain the original local date/time for matching purposes. Default value is the local time of the specific TokenEx server used to process the transaction.  |  
| `OnlineShippingAddress.Address1`  | String  | `OnlineShipToAddress.OnlineShipToAddressLine1`  | Shipping Address Line 1 for online orders  |  
| `OnlineShippingAddress.Address2`  | String  | `OnlineShipToAddress.OnlineShipToAddressLine2`  | Shipping Address Line 2 for online orders  |  
| `OnlineShippingAddress.City`  | String  | `OnlineShipToAddress.OnlineShipToCity`  | Shipping Address City for online orders  |  
| `OnlineShippingAddress.Zip`  | String  | `OnlineShipToAddress.OnlineShipToZipCode`  | Shipping Address State for online orders  |  
| `OnlineShippingAddress.State`  | String  | `OnlineShipToAddress.OnlineShipToState`  | Shipping Address Country for online orders  |  
| `OnlineShippingAddress.Country`  | String  | `OnlineShipToAddress.OnlineShipToCountry`  | Shipping Address Zip Code for online orders  |  
| `OnlineBillingAddress.Address1`  | String  | `OnlineBillToAddress.OnlineBillToAddressLine1`  | Billing Address Line 1 for online orders  |  
| `OnlineBillingAddress.Address2`  | String  | `OnlineBillToAddress.OnlineBillToAddressLine2`  | Billing Address Line 2 for online orders  |  
| `OnlineBillingAddress.City`  | String  | `OnlineBillToAddress.OnlineBillToCity`  | Billing Address City for online orders  |  
| `OnlineBillingAddress.Zip`  | String  | `OnlineBillToAddress.OnlineBillToZipCode`  | Billing Address State for online orders  |  
| `OnlineBillingAddress.State`  | String  | `OnlineBillToAddress.OnlineBillToState`  | Billing Address Country for online orders  |  
| `OnlineBillingAddress.Country`  | String  | `OnlineBillToAddress.OnlineBillToCountry`  | Billing Address Zip Code for online orders  |  
| `Synchrony.PromoNeededResult`  | String  | `SynchronyData.SyncPromoNeededResult`  | Valid Values:  
00 - Yes  
01 - No  
02 - Lite  
08 - Error  |  
| `Synchrony.EtcTransactionType`  | String  | `SynchronyData.SyncETCTransactionType`  | Valid Values:  
00 - Non-ETC Merchant  
71 - Authorization and Ticket  
72 - Return  
73 - Ticket Only  
74 - Authorization Only  
75 - Reversal of Authorization and Ticket  
76 - Reversal of a Return  
77 - Reversal of a Ticket Only  |  
| `Synchrony.EtcDescriptorCode`  | String  | `SynchronyData.SyncETCDescriptorCode`  | ETC Descriptor Code  
8 digits, should be spaced out when ETC transaction type is 00  |  
| `Synchrony.TicketTermsPromoCodeInvoice`  | String  | `SynchronyData.SyncTicketTermsPromoCodeInvoice`  | ETC Ticket Terms/Promotional Codes or invoice number  
  
6 digits Left justified, space filled  |  
| `Synchrony.CashOverAcceptanceIndicator`  | String  | `SynchronyData.SyncCashOverAcceptanceIndicator`  | Cash Over Partial Authorization Partial Cash Acceptance Indicator  
  
Valid Values:  
' ' - Partial cash disbursement is not acceptable  
'0' - Partial cash disbursement is not acceptable  
'1' - Partial cash disbursement is acceptable  |  
| `Synchrony.EtcMotoEcommIndicator`  | String  | `SynchronyData.SyncEtcMotoEcommIndicator`  | Mail/Order/Electronic Commerce Indicator  
  
Valid Values:  
00 - Not Applicable  
01 - Mail/Telephone, Order, Single Transaction  
02 - Recurring Transaction  
03 - Installment Payment  
04 - Unknown Classification  
05 - SET with Cardholder Certificate  
06 - SET without Cardholder Certificate  
07 - Channel-encrypted Transaction  
08 - Non-secure Transaction  |  
| `PriorityRouting`  | String  | `PriorityRouting`  | Acquirers use this field to indicate the order in which a transaction can choose to route to networks. It contains a series of 4 character acronyms that can be selected for the transaction. Each acronym should be padded on the right with blanks if necessary. For a listing of available networks, please contact your Worldpay Relationship Manager.  |  
| `CreditCard.FullName`  | String  | `AdditionalFraudData.CardholderName`  | Name on card to be passed to merchant fraudsight. Default value is creditCard.Firstname + creditCard.Lastname  |  
| `EncryptedData`  | String  | `EncryptedData`  | Encrypted JSON fields in the form of a JWE Token using RSA asymmetric encryption. Requires exchange of public keys.  
  
The Authentication HTTP header with a valid AuthID is required for any request messages containing this field.  |  
| `TraceData`  | String  | `TraceData`  | Provides a means to pass data back and forth between acquirer and processor.  |  
|  `MasterCardDSRPCryptogram` or `BrandSpecificData.MasterCard.DSRPCryptogram`  | String  | `MastercardDSRPCryptogram`  | Cryptogram data. This field expects data to already be base64 encoded. If it is already base64 encoded, it does not need to be encoded again.  |  
|  `MasterCardRemoteCommerceAcceptorIdentifier` or `BrandSpecificData.MasterCard.RemoteCommerceAcceptorIdentifier`  | String  | `MastercardRemoteCommerceAcceptorIdentifier`  | Business website URL or reverse domain name as presented to the consumer during checkout. Base64 encoded.  |  
| `StoredCredentials.Initiator`  | String  |  `ProcFlagsIndicators.CardholderInitiatedTransaction` or `ProcFlagsIndicators.MerchantInitiatedTransaction`  | Valid values: "cardholder", "merchant".   
  
If "cardholder", then **ProcFlagsIndicators.CardholderInitiatedTransaction** = "Y", if "merchant", then **ProcFlagsIndicators.MerchantInitiatedTransaction** = "Y"  |  
| `StoredCredentials.CredentialStored`  | Boolean  | Related to `ECommerceData.ECommerceIndicator`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials).   
  
This field is used in conjunction with **StoredCredentials.TransactionType** to determine the **ECommerceData.ECommerceIndicator**. See TransactionType below.  |  
| `StoredCredentials.PreviousNetworkTransactionId`  | String  | `ReferenceTraceNumbers.RetrievalRefNumber`  | See usage in [The Basics - Stored Credentials](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/psv2-gateway-parameters#storedcredentials).   
  
Obtained from the (CardBrand)SpecificData TransactionId field associated with the previous request referenced. For example, a Visa card transaction's TransactionId can be obtained from **VisaSpecificData.VisaTransactionId**  |  
| `StoredCredentials.TransactionType`  | String  | `ECommerceData.ECommerceIndicator`  | Valid values: "recurring", "installment", or "unscheduled"   
  
Mappings:   
"installment" = "03", "unscheduled" = "07", "recurring" = if **StoredCredentials.CredentialStored** is true, then "02", otherwise "10".  |  
## Example Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#example-requests "Direct link to Example Requests")
warning
In contrast with other Payment Services gateways, Worldpay Native RAFT refunds do not accept a TokenExTransactionCode. Additionally, Worldpay Native RAFT is unique in that refunds must stand on their own and not tie back to the origin transaction's APITransactionId. For a successful refund, create a unique 16 character APITransactionId or see parameter chart for default value format if no APITransactionId is supplied.
  * Card Authorize/Purchase
  * Card Authorize/Purchase with 3DS
  * Card Capture
  * Card Refund
  * Card Void/Reversal
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "threeDSecure": {  

    "dsTransId": "378a925e-66b2-414d-b4c4-10a573ea9e17",  

    "eci": "05",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA", // Mapped from threeDSecureResponse.authenticationValue.  

    "programProtocol": "2"  

  },  

  "terminalData": {  

    "terminalNumber": "01",  

    "entryMode": "E-COMM",  

    "posConditionCode": "59",  

    "terminalEntryCap": "8"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "testMode": true,  

  "amount": 1000,  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "MiscAmountsBalances": {  

    "PreAuthorizedAmount": 1000  

  },  

  "AuthorizationType": "FP",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "ProcFlagsIndicators": {  

    "PriorAuth": "Y"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "terminalEntryCap": "0",  

    "posConditionCode": "06"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, Purchase, or Refund response>",  

  "testMode": true,  

  "amount": 1000,  

  "reversalAdviceReasonCd": "000",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```## Gateway Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#gateway-response-parameters "Direct link to Gateway Response Parameters")  
| Field Name  | Type  | Worldpay Native RAFT Mapping  | Notes  |  
| --- | --- | --- | --- |  
| `approvalCode`  | String  | `ReferenceTraceNumbers.AuthorizationNumber`  | The authorization code granted by the card issuing bank for this transaction.  |  
| `approved`  | String  | `ResponseCode`  | The overall status of the transaction.   
The field is true if the gateway's raw response Response Code equals "000" (full approval) or "010" (partial approval)  |  
| `providerTransactionCode`  | String  | `APITransactionID`  | APITransactionID as shown in the the gateway raw response  |  
## Example Responses[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#example-responses "Direct link to Example Responses")
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

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BPVS\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171206846\",\n\"VisaAuthCharId\":\"N\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117120748\",\n\"NetworkRefNumber\":\"334117120748\",\n\"SystemTraceNumber\":\"023636\",\n\"AuthorizationNumber\":\"752006\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171206cdji\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjA2Y2RqaTsx",  

    "approvalCode": "752006",  

    "providerTransactionCode": "231207171206cdji",  

    "approved": true  

  },  

  "referenceNumber": "23120717120578419227",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"C2WU\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171227118\",\n\"VisaAuthCharId\":\"V\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117122802\",\n\"NetworkRefNumber\":\"334117122802\",\n\"SystemTraceNumber\":\"023650\",\n\"AuthorizationNumber\":\"064942\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsy",  

    "approvalCode": "064942",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717122656700974",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditcompletionresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"023748\",\n\"AuthorizationNumber\":\"002848\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsz",  

    "approvalCode": "002848",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717150999000795",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditrefundresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\",\n\"AvailableBALFromAcct\":\"2008.53\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BR3Z\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171650180\",\n\"VisaAuthCharId\":\"A\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117165110\",\n\"PaymentAcctREFNumber\":\"43215678901234567890123456789\",\n\"NetworkRefNumber\":\"334117165110\",\n\"SystemTraceNumber\":\"023802\",\n\"AuthorizationNumber\":\"909926\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312071716507a4G\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNjUwN2E0Rzs0",  

    "approvalCode": "909926",  

    "providerTransactionCode": "2312071716507a4G",  

    "approved": true  

  },  

  "referenceNumber": "23120717165018883760",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BM3V\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171530662\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117153059\",\n\"NetworkRefNumber\":\"334117153059\",\n\"SystemTraceNumber\":\"023777\",\n\"AuthorizationNumber\":\"405534\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171530saoo\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNTMwc2Fvbzsx",  

    "approvalCode": "405534",  

    "providerTransactionCode": "231207171530saoo",  

    "approved": true  

  },  

  "referenceNumber": "23120717161496243964",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000E\",\n\"ReturnText\":\"EXPIRATION DATE IS INCORRECT FORMAT (YYMM)\",\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"007889\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231208091922nlP5\",\n\"ResponseCode\":\"030\",\n\"ErrorInformation\": \n{ \"ErrorText\":\"2623\",\n\"FieldInError\":\"ExpirationDate\" }\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - EXPIRATION DATE IS INCORRECT FORMAT (YYMM)"  

      },  

      {  

        "code": "030",  

        "message": "FORMAT ERROR"  

      },  

      {  

        "code": "0004",  

        "message": "ExpirationDate - 2623"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "231208091922nlP5",  

    "approved": false  

  },  

  "referenceNumber": "23120809192152157008",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000F\",\n\"ReturnText\":\"STOLEN CARD, PICK UP\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"43\",\n\"VisaValidationCode\":\"EJTS\",\n\"VisaTransactionId\":\"233420091805332\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334209180631\",\n\"NetworkRefNumber\":\"334209180631\",\n\"SystemTraceNumber\":\"007806\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"DCCEligibleBin\":\"Y\",\n\"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312080918052t7G\",\n\"ResponseCode\":\"022\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - STOLEN CARD, PICK UP"  

      },  

      {  

        "code": "022",  

        "message": "DECLINE - PICK UP STOLEN CARD"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "2312080918052t7G",  

    "approved": false  

  },  

  "referenceNumber": "23120809180524271095",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "threeDSecure": {  

    "dsTransId": "378a925e-66b2-414d-b4c4-10a573ea9e17",  

    "eci": "05",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA", // Mapped from threeDSecureResponse.authenticationValue.  

    "programProtocol": "2"  

  },  

  "terminalData": {  

    "terminalNumber": "01",  

    "entryMode": "E-COMM",  

    "posConditionCode": "59",  

    "terminalEntryCap": "8"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "testMode": true,  

  "amount": 1000,  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "MiscAmountsBalances": {  

    "PreAuthorizedAmount": 1000  

  },  

  "AuthorizationType": "FP",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "ProcFlagsIndicators": {  

    "PriorAuth": "Y"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "terminalEntryCap": "0",  

    "posConditionCode": "06"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, Purchase, or Refund response>",  

  "testMode": true,  

  "amount": 1000,  

  "reversalAdviceReasonCd": "000",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BPVS\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171206846\",\n\"VisaAuthCharId\":\"N\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117120748\",\n\"NetworkRefNumber\":\"334117120748\",\n\"SystemTraceNumber\":\"023636\",\n\"AuthorizationNumber\":\"752006\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171206cdji\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjA2Y2RqaTsx",  

    "approvalCode": "752006",  

    "providerTransactionCode": "231207171206cdji",  

    "approved": true  

  },  

  "referenceNumber": "23120717120578419227",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"C2WU\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171227118\",\n\"VisaAuthCharId\":\"V\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117122802\",\n\"NetworkRefNumber\":\"334117122802\",\n\"SystemTraceNumber\":\"023650\",\n\"AuthorizationNumber\":\"064942\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsy",  

    "approvalCode": "064942",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717122656700974",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditcompletionresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"023748\",\n\"AuthorizationNumber\":\"002848\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsz",  

    "approvalCode": "002848",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717150999000795",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditrefundresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\",\n\"AvailableBALFromAcct\":\"2008.53\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BR3Z\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171650180\",\n\"VisaAuthCharId\":\"A\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117165110\",\n\"PaymentAcctREFNumber\":\"43215678901234567890123456789\",\n\"NetworkRefNumber\":\"334117165110\",\n\"SystemTraceNumber\":\"023802\",\n\"AuthorizationNumber\":\"909926\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312071716507a4G\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNjUwN2E0Rzs0",  

    "approvalCode": "909926",  

    "providerTransactionCode": "2312071716507a4G",  

    "approved": true  

  },  

  "referenceNumber": "23120717165018883760",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BM3V\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171530662\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117153059\",\n\"NetworkRefNumber\":\"334117153059\",\n\"SystemTraceNumber\":\"023777\",\n\"AuthorizationNumber\":\"405534\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171530saoo\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNTMwc2Fvbzsx",  

    "approvalCode": "405534",  

    "providerTransactionCode": "231207171530saoo",  

    "approved": true  

  },  

  "referenceNumber": "23120717161496243964",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000E\",\n\"ReturnText\":\"EXPIRATION DATE IS INCORRECT FORMAT (YYMM)\",\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"007889\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231208091922nlP5\",\n\"ResponseCode\":\"030\",\n\"ErrorInformation\": \n{ \"ErrorText\":\"2623\",\n\"FieldInError\":\"ExpirationDate\" }\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - EXPIRATION DATE IS INCORRECT FORMAT (YYMM)"  

      },  

      {  

        "code": "030",  

        "message": "FORMAT ERROR"  

      },  

      {  

        "code": "0004",  

        "message": "ExpirationDate - 2623"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "231208091922nlP5",  

    "approved": false  

  },  

  "referenceNumber": "23120809192152157008",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000F\",\n\"ReturnText\":\"STOLEN CARD, PICK UP\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"43\",\n\"VisaValidationCode\":\"EJTS\",\n\"VisaTransactionId\":\"233420091805332\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334209180631\",\n\"NetworkRefNumber\":\"334209180631\",\n\"SystemTraceNumber\":\"007806\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"DCCEligibleBin\":\"Y\",\n\"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312080918052t7G\",\n\"ResponseCode\":\"022\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - STOLEN CARD, PICK UP"  

      },  

      {  

        "code": "022",  

        "message": "DECLINE - PICK UP STOLEN CARD"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "2312080918052t7G",  

    "approved": false  

  },  

  "referenceNumber": "23120809180524271095",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "threeDSecure": {  

    "dsTransId": "378a925e-66b2-414d-b4c4-10a573ea9e17",  

    "eci": "05",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA", // Mapped from threeDSecureResponse.authenticationValue.  

    "programProtocol": "2"  

  },  

  "terminalData": {  

    "terminalNumber": "01",  

    "entryMode": "E-COMM",  

    "posConditionCode": "59",  

    "terminalEntryCap": "8"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "testMode": true,  

  "amount": 1000,  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "MiscAmountsBalances": {  

    "PreAuthorizedAmount": 1000  

  },  

  "AuthorizationType": "FP",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "ProcFlagsIndicators": {  

    "PriorAuth": "Y"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "terminalEntryCap": "0",  

    "posConditionCode": "06"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, Purchase, or Refund response>",  

  "testMode": true,  

  "amount": 1000,  

  "reversalAdviceReasonCd": "000",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BPVS\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171206846\",\n\"VisaAuthCharId\":\"N\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117120748\",\n\"NetworkRefNumber\":\"334117120748\",\n\"SystemTraceNumber\":\"023636\",\n\"AuthorizationNumber\":\"752006\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171206cdji\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjA2Y2RqaTsx",  

    "approvalCode": "752006",  

    "providerTransactionCode": "231207171206cdji",  

    "approved": true  

  },  

  "referenceNumber": "23120717120578419227",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"C2WU\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171227118\",\n\"VisaAuthCharId\":\"V\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117122802\",\n\"NetworkRefNumber\":\"334117122802\",\n\"SystemTraceNumber\":\"023650\",\n\"AuthorizationNumber\":\"064942\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsy",  

    "approvalCode": "064942",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717122656700974",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditcompletionresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"023748\",\n\"AuthorizationNumber\":\"002848\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsz",  

    "approvalCode": "002848",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717150999000795",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditrefundresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\",\n\"AvailableBALFromAcct\":\"2008.53\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BR3Z\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171650180\",\n\"VisaAuthCharId\":\"A\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117165110\",\n\"PaymentAcctREFNumber\":\"43215678901234567890123456789\",\n\"NetworkRefNumber\":\"334117165110\",\n\"SystemTraceNumber\":\"023802\",\n\"AuthorizationNumber\":\"909926\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312071716507a4G\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNjUwN2E0Rzs0",  

    "approvalCode": "909926",  

    "providerTransactionCode": "2312071716507a4G",  

    "approved": true  

  },  

  "referenceNumber": "23120717165018883760",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BM3V\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171530662\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117153059\",\n\"NetworkRefNumber\":\"334117153059\",\n\"SystemTraceNumber\":\"023777\",\n\"AuthorizationNumber\":\"405534\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171530saoo\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNTMwc2Fvbzsx",  

    "approvalCode": "405534",  

    "providerTransactionCode": "231207171530saoo",  

    "approved": true  

  },  

  "referenceNumber": "23120717161496243964",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000E\",\n\"ReturnText\":\"EXPIRATION DATE IS INCORRECT FORMAT (YYMM)\",\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"007889\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231208091922nlP5\",\n\"ResponseCode\":\"030\",\n\"ErrorInformation\": \n{ \"ErrorText\":\"2623\",\n\"FieldInError\":\"ExpirationDate\" }\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - EXPIRATION DATE IS INCORRECT FORMAT (YYMM)"  

      },  

      {  

        "code": "030",  

        "message": "FORMAT ERROR"  

      },  

      {  

        "code": "0004",  

        "message": "ExpirationDate - 2623"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "231208091922nlP5",  

    "approved": false  

  },  

  "referenceNumber": "23120809192152157008",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000F\",\n\"ReturnText\":\"STOLEN CARD, PICK UP\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"43\",\n\"VisaValidationCode\":\"EJTS\",\n\"VisaTransactionId\":\"233420091805332\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334209180631\",\n\"NetworkRefNumber\":\"334209180631\",\n\"SystemTraceNumber\":\"007806\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"DCCEligibleBin\":\"Y\",\n\"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312080918052t7G\",\n\"ResponseCode\":\"022\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - STOLEN CARD, PICK UP"  

      },  

      {  

        "code": "022",  

        "message": "DECLINE - PICK UP STOLEN CARD"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "2312080918052t7G",  

    "approved": false  

  },  

  "referenceNumber": "23120809180524271095",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "threeDSecure": {  

    "dsTransId": "378a925e-66b2-414d-b4c4-10a573ea9e17",  

    "eci": "05",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA", // Mapped from threeDSecureResponse.authenticationValue.  

    "programProtocol": "2"  

  },  

  "terminalData": {  

    "terminalNumber": "01",  

    "entryMode": "E-COMM",  

    "posConditionCode": "59",  

    "terminalEntryCap": "8"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "testMode": true,  

  "amount": 1000,  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "MiscAmountsBalances": {  

    "PreAuthorizedAmount": 1000  

  },  

  "AuthorizationType": "FP",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "ProcFlagsIndicators": {  

    "PriorAuth": "Y"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "terminalEntryCap": "0",  

    "posConditionCode": "06"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, Purchase, or Refund response>",  

  "testMode": true,  

  "amount": 1000,  

  "reversalAdviceReasonCd": "000",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BPVS\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171206846\",\n\"VisaAuthCharId\":\"N\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117120748\",\n\"NetworkRefNumber\":\"334117120748\",\n\"SystemTraceNumber\":\"023636\",\n\"AuthorizationNumber\":\"752006\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171206cdji\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjA2Y2RqaTsx",  

    "approvalCode": "752006",  

    "providerTransactionCode": "231207171206cdji",  

    "approved": true  

  },  

  "referenceNumber": "23120717120578419227",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"C2WU\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171227118\",\n\"VisaAuthCharId\":\"V\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117122802\",\n\"NetworkRefNumber\":\"334117122802\",\n\"SystemTraceNumber\":\"023650\",\n\"AuthorizationNumber\":\"064942\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsy",  

    "approvalCode": "064942",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717122656700974",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditcompletionresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"023748\",\n\"AuthorizationNumber\":\"002848\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsz",  

    "approvalCode": "002848",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717150999000795",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditrefundresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\",\n\"AvailableBALFromAcct\":\"2008.53\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BR3Z\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171650180\",\n\"VisaAuthCharId\":\"A\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117165110\",\n\"PaymentAcctREFNumber\":\"43215678901234567890123456789\",\n\"NetworkRefNumber\":\"334117165110\",\n\"SystemTraceNumber\":\"023802\",\n\"AuthorizationNumber\":\"909926\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312071716507a4G\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNjUwN2E0Rzs0",  

    "approvalCode": "909926",  

    "providerTransactionCode": "2312071716507a4G",  

    "approved": true  

  },  

  "referenceNumber": "23120717165018883760",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BM3V\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171530662\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117153059\",\n\"NetworkRefNumber\":\"334117153059\",\n\"SystemTraceNumber\":\"023777\",\n\"AuthorizationNumber\":\"405534\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171530saoo\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNTMwc2Fvbzsx",  

    "approvalCode": "405534",  

    "providerTransactionCode": "231207171530saoo",  

    "approved": true  

  },  

  "referenceNumber": "23120717161496243964",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000E\",\n\"ReturnText\":\"EXPIRATION DATE IS INCORRECT FORMAT (YYMM)\",\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"007889\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231208091922nlP5\",\n\"ResponseCode\":\"030\",\n\"ErrorInformation\": \n{ \"ErrorText\":\"2623\",\n\"FieldInError\":\"ExpirationDate\" }\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - EXPIRATION DATE IS INCORRECT FORMAT (YYMM)"  

      },  

      {  

        "code": "030",  

        "message": "FORMAT ERROR"  

      },  

      {  

        "code": "0004",  

        "message": "ExpirationDate - 2623"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "231208091922nlP5",  

    "approved": false  

  },  

  "referenceNumber": "23120809192152157008",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000F\",\n\"ReturnText\":\"STOLEN CARD, PICK UP\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"43\",\n\"VisaValidationCode\":\"EJTS\",\n\"VisaTransactionId\":\"233420091805332\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334209180631\",\n\"NetworkRefNumber\":\"334209180631\",\n\"SystemTraceNumber\":\"007806\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"DCCEligibleBin\":\"Y\",\n\"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312080918052t7G\",\n\"ResponseCode\":\"022\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - STOLEN CARD, PICK UP"  

      },  

      {  

        "code": "022",  

        "message": "DECLINE - PICK UP STOLEN CARD"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "2312080918052t7G",  

    "approved": false  

  },  

  "referenceNumber": "23120809180524271095",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#overview)
  * [Supported Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#supported-request-parameters)
  * [Example Requests](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#example-requests)
  * [Gateway Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#gateway-response-parameters)
  * [Example Responses](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/worldpay-native-raft#example-responses)
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "threeDSecure": {  

    "dsTransId": "378a925e-66b2-414d-b4c4-10a573ea9e17",  

    "eci": "05",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA", // Mapped from threeDSecureResponse.authenticationValue.  

    "programProtocol": "2"  

  },  

  "terminalData": {  

    "terminalNumber": "01",  

    "entryMode": "E-COMM",  

    "posConditionCode": "59",  

    "terminalEntryCap": "8"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "testMode": true,  

  "amount": 1000,  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "MiscAmountsBalances": {  

    "PreAuthorizedAmount": 1000  

  },  

  "AuthorizationType": "FP",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "ProcFlagsIndicators": {  

    "PriorAuth": "Y"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "terminalEntryCap": "0",  

    "posConditionCode": "06"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, Purchase, or Refund response>",  

  "testMode": true,  

  "amount": 1000,  

  "reversalAdviceReasonCd": "000",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BPVS\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171206846\",\n\"VisaAuthCharId\":\"N\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117120748\",\n\"NetworkRefNumber\":\"334117120748\",\n\"SystemTraceNumber\":\"023636\",\n\"AuthorizationNumber\":\"752006\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171206cdji\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjA2Y2RqaTsx",  

    "approvalCode": "752006",  

    "providerTransactionCode": "231207171206cdji",  

    "approved": true  

  },  

  "referenceNumber": "23120717120578419227",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"C2WU\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171227118\",\n\"VisaAuthCharId\":\"V\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117122802\",\n\"NetworkRefNumber\":\"334117122802\",\n\"SystemTraceNumber\":\"023650\",\n\"AuthorizationNumber\":\"064942\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsy",  

    "approvalCode": "064942",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717122656700974",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditcompletionresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"023748\",\n\"AuthorizationNumber\":\"002848\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsz",  

    "approvalCode": "002848",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717150999000795",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditrefundresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\",\n\"AvailableBALFromAcct\":\"2008.53\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BR3Z\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171650180\",\n\"VisaAuthCharId\":\"A\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117165110\",\n\"PaymentAcctREFNumber\":\"43215678901234567890123456789\",\n\"NetworkRefNumber\":\"334117165110\",\n\"SystemTraceNumber\":\"023802\",\n\"AuthorizationNumber\":\"909926\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312071716507a4G\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNjUwN2E0Rzs0",  

    "approvalCode": "909926",  

    "providerTransactionCode": "2312071716507a4G",  

    "approved": true  

  },  

  "referenceNumber": "23120717165018883760",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BM3V\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171530662\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117153059\",\n\"NetworkRefNumber\":\"334117153059\",\n\"SystemTraceNumber\":\"023777\",\n\"AuthorizationNumber\":\"405534\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171530saoo\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNTMwc2Fvbzsx",  

    "approvalCode": "405534",  

    "providerTransactionCode": "231207171530saoo",  

    "approved": true  

  },  

  "referenceNumber": "23120717161496243964",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000E\",\n\"ReturnText\":\"EXPIRATION DATE IS INCORRECT FORMAT (YYMM)\",\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"007889\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231208091922nlP5\",\n\"ResponseCode\":\"030\",\n\"ErrorInformation\": \n{ \"ErrorText\":\"2623\",\n\"FieldInError\":\"ExpirationDate\" }\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - EXPIRATION DATE IS INCORRECT FORMAT (YYMM)"  

      },  

      {  

        "code": "030",  

        "message": "FORMAT ERROR"  

      },  

      {  

        "code": "0004",  

        "message": "ExpirationDate - 2623"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "231208091922nlP5",  

    "approved": false  

  },  

  "referenceNumber": "23120809192152157008",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000F\",\n\"ReturnText\":\"STOLEN CARD, PICK UP\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"43\",\n\"VisaValidationCode\":\"EJTS\",\n\"VisaTransactionId\":\"233420091805332\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334209180631\",\n\"NetworkRefNumber\":\"334209180631\",\n\"SystemTraceNumber\":\"007806\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"DCCEligibleBin\":\"Y\",\n\"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312080918052t7G\",\n\"ResponseCode\":\"022\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - STOLEN CARD, PICK UP"  

      },  

      {  

        "code": "022",  

        "message": "DECLINE - PICK UP STOLEN CARD"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "2312080918052t7G",  

    "approved": false  

  },  

  "referenceNumber": "23120809180524271095",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2024,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "threeDSecure": {  

    "dsTransId": "378a925e-66b2-414d-b4c4-10a573ea9e17",  

    "eci": "05",  

    "cavv": "xgQYYgZVAAAAAAAAAAAAAAAAAAAA", // Mapped from threeDSecureResponse.authenticationValue.  

    "programProtocol": "2"  

  },  

  "terminalData": {  

    "terminalNumber": "01",  

    "entryMode": "E-COMM",  

    "posConditionCode": "59",  

    "terminalEntryCap": "8"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "testMode": true,  

  "amount": 1000,  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize response>",  

  "MiscAmountsBalances": {  

    "PreAuthorizedAmount": 1000  

  },  

  "AuthorizationType": "FP",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "ProcFlagsIndicators": {  

    "PriorAuth": "Y"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "terminalEntryCap": "0",  

    "posConditionCode": "06"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "apiTransactionId": "16-AN-Characters",  

  "testMode": true,  

  "amount": 1000,  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gateway": "WorldpayNativeRaft",  

  "merchantId": "<Merchant ID assigned by Worldpay>",  

  "licenseKey": "<License Key assigned by Worldpay>",  

  "localDateTime": "<YYYY-MM-DDTHH:mm:ss>",  

  "TokenExTransactionCode": "<TokenExTransactionCode from a previous Authorize, Capture, Purchase, or Refund response>",  

  "testMode": true,  

  "amount": 1000,  

  "reversalAdviceReasonCd": "000",  

  "ReferenceTraceNumbers": {  

    "AuthorizationNumber": "approval code from prior transaction"  

  },  

  "creditCard": {  

    "number": "Token or PAN",  

    "expMonth": 6,  

    "expYear": 2028,  

    "firstName": "John",  

    "lastName": "Doe",  

    "fullName": "John Allen Doe",  

    "cvv": "382"  

  },  

  "billingAddress": {  

    "company": "Test Co.",  

    "address1": "123 Someplace Lane",  

    "address2": "Some Place",  

    "city": "Tulsa",  

    "state": "OK",  

    "zip": "74111",  

    "country": "USA"  

  },  

  "orderInfo": {  

    "ecommerceIndicator": "07"  

  },  

  "terminalData": {  

    "entryMode": "KEYED",  

    "posConditionCode": "59",  

    "terminalEntryCap": "0"  

  }  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BPVS\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171206846\",\n\"VisaAuthCharId\":\"N\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117120748\",\n\"NetworkRefNumber\":\"334117120748\",\n\"SystemTraceNumber\":\"023636\",\n\"AuthorizationNumber\":\"752006\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171206cdji\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjA2Y2RqaTsx",  

    "approvalCode": "752006",  

    "providerTransactionCode": "231207171206cdji",  

    "approved": true  

  },  

  "referenceNumber": "23120717120578419227",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"C2WU\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171227118\",\n\"VisaAuthCharId\":\"V\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117122802\",\n\"NetworkRefNumber\":\"334117122802\",\n\"SystemTraceNumber\":\"023650\",\n\"AuthorizationNumber\":\"064942\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsy",  

    "approvalCode": "064942",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717122656700974",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditcompletionresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"023748\",\n\"AuthorizationNumber\":\"002848\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171227g7Sy\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxMjI3ZzdTeTsz",  

    "approvalCode": "002848",  

    "providerTransactionCode": "231207171227g7Sy",  

    "approved": true  

  },  

  "referenceNumber": "23120717150999000795",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditrefundresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\",\n\"AvailableBALFromAcct\":\"2008.53\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BR3Z\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171650180\",\n\"VisaAuthCharId\":\"A\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117165110\",\n\"PaymentAcctREFNumber\":\"43215678901234567890123456789\",\n\"NetworkRefNumber\":\"334117165110\",\n\"SystemTraceNumber\":\"023802\",\n\"AuthorizationNumber\":\"909926\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312071716507a4G\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNjUwN2E0Rzs0",  

    "approvalCode": "909926",  

    "providerTransactionCode": "2312071716507a4G",  

    "approved": true  

  },  

  "referenceNumber": "23120717165018883760",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditauthresponse\": \n { \"ReturnCode\":\"0000\",\n\"ReasonCode\":\"0000\",\n\"MiscAmountsBalances\": \n{ \"OriginalAuthAmount\":\"10.00\" },\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"00\",\n\"VisaValidationCode\":\"BM3V\",\n\"VisaCardLevelResults\":\"A \",\n\"VisaTransactionId\":\"233410171530662\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334117153059\",\n\"NetworkRefNumber\":\"334117153059\",\n\"SystemTraceNumber\":\"023777\",\n\"AuthorizationNumber\":\"405534\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231207\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231207171530saoo\",\n\"ResponseCode\":\"000\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [],  

    "tokenExTransactionCode": "MjMxMjA3MTcxNTMwc2Fvbzsx",  

    "approvalCode": "405534",  

    "providerTransactionCode": "231207171530saoo",  

    "approved": true  

  },  

  "referenceNumber": "23120717161496243964",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000E\",\n\"ReturnText\":\"EXPIRATION DATE IS INCORRECT FORMAT (YYMM)\",\n\"ReferenceTraceNumbers\": \n{ \"SystemTraceNumber\":\"007889\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"231208091922nlP5\",\n\"ResponseCode\":\"030\",\n\"ErrorInformation\": \n{ \"ErrorText\":\"2623\",\n\"FieldInError\":\"ExpirationDate\" }\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - EXPIRATION DATE IS INCORRECT FORMAT (YYMM)"  

      },  

      {  

        "code": "030",  

        "message": "FORMAT ERROR"  

      },  

      {  

        "code": "0004",  

        "message": "ExpirationDate - 2623"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "231208091922nlP5",  

    "approved": false  

  },  

  "referenceNumber": "23120809192152157008",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```
```

{  

  "gatewayResponse": {  

    "rawResponse": "{ \"creditpurchaseresponse\": \n { \"ReturnCode\":\"0004\",\n\"ReasonCode\":\"000F\",\n\"ReturnText\":\"STOLEN CARD, PICK UP\",\n\"CardInfo\": \n{ \"CardProductCode\":\"A C\" },\n\"VisaSpecificData\": \n{ \"VisaSpendQualifier\":\"Q\",\n\"VisaResponseCode\":\"43\",\n\"VisaValidationCode\":\"EJTS\",\n\"VisaTransactionId\":\"233420091805332\",\n\"VisaAuthCharId\":\"E\" },\n\"ReferenceTraceNumbers\": \n{ \"RetrievalREFNumber\":\"334209180631\",\n\"NetworkRefNumber\":\"334209180631\",\n\"SystemTraceNumber\":\"007806\" },\n\"CustomerInformation\": \n{ \"IssuerCountryCode\":\"752\" },\n\"SettlementData\": \n{ \"SettlementDate\":\"20231208\",\n\"SettlementNetwork\":\"OMPS\",\n\"RegulationIndicator\":\"0\" },\n\"WorldPayRoutingData\": \n{ \"DCCEligibleBin\":\"Y\",\n\"NetworkId\":\"BASE\" },\n\"APITransactionID\":\"2312080918052t7G\",\n\"ResponseCode\":\"022\",\n\"AuthorizationSource\":\"5\"\n}\n}",  

    "gatewayErrors": [  

      {  

        "code": "0004",  

        "message": "Edit error on input - STOLEN CARD, PICK UP"  

      },  

      {  

        "code": "022",  

        "message": "DECLINE - PICK UP STOLEN CARD"  

      }  

    ],  

    "tokenExTransactionCode": "",  

    "approvalCode": "",  

    "providerTransactionCode": "2312080918052t7G",  

    "approved": false  

  },  

  "referenceNumber": "23120809180524271095",  

  "success": true,  

  "error": "",  

  "message": "",  

  "thirdPartyStatusCode": "200"  

}  

```