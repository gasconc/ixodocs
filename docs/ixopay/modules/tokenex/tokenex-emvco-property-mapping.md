---
title: 'TokenEx : EMVCo Property Mapping'
summary: ' 3-D Secure Authentication  TokenEx : EMVCo Property Mapping'
tags:
- webhook
- 3ds
- tokenex
- ixopay
- acquirer
- recurring
- authorization
- credit-card
- transaction
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/tokenex-emvco-property-mapping
portal: ixopay-modules
updated: '2026-06-01'
related: []
---

* 3-D Secure Authentication
  * TokenEx : EMVCo Property Mapping

# TokenEx : EMVCo Property Mapping  
| TokenEx Property  | 3DS version 2.1/2.2 EMVCo  | Data Type (TokenEx)  | Description  |  
| --- | --- | --- | --- |  
| DeviceChannel  | deviceChannel  | int  | Indicates the type of channel interface being used to initiate the transaction.   
  
2 = BRW   
3 = 3RI  |  
| MessageCategory  | messageCategory  | int  | Identifies the category of the message for a specific use case.   
  
1 = Payment   
2 = Non Payment  |  
| MessageVersion  | messageVersion  | string  | Indicates the Protocol Version Number of the specification utilized by the system creating this message. The Message Version Number does not change during a 3DS transaction.   
  
For backwards compatibility, these values will be mapped to the following 3DS versions:   
1 = 3DS 2.1.0   
2 = 3DS 2.2.0  |  
| MethodCompletionIndicator  | threeDSCompInd  | int  | 1 = Device Fingerprinting was successfully completed.   
2 = Device Fingerprinting was not successfully completed (error or otherwise).   
3 = Device Fingerprinting URL (threeDSMethodURL) not available from Supported Versions response.  |  
| AuthenticationIndicator  | threeDSRequestorAuthenticationInd  | int  | Indicates the type of Authentication request. This data element provides additional information to the ACS to determine the best approach for handing an authentication request.   
  
Values accepted:   
01 = Payment transaction   
02 = Recurring transaction   
03 = Installment transaction   
04 = Add card   
05 = Maintain card   
06 = Cardholder verification as part of EMV® token ID&V   
  
* Required for   
Device Channel - 02-Browser  |  
| RequestorId  | threeDSRequestorID  | string  | Required only if dsIdentifier is JCB or CB  |  
| RequestorName  | threeDSRequestorName  | string  | Required only if dsIdentifier is JCB or CB  |  
| ServerTransactionId  | threeDSServerTransID  | string  | Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction  |  
| DirectoryServerIdentifier  | dsIdentifier  | string  | Indicates the Directory Server for which the card range is enrolled/eligible.   
  
_ AMEX   
_ CB   
_ DISCOVER   
_ JCB   
_ MASTERCARD   
_ VISA  |  
| AcquirerBin  | acquirerBIN  | string  | Acquiring institution identification code as assigned by the DS receiving the AReq message.   
  
* Required if   
Message Category is 1 Payment. Required by Visa for Message Categories 1 and 2. See [Brand Specific Guidelines ](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines)  |  
| GenerateChallengeRequest  | generateCReq  | bool  | Indicator as to whether or not the 3DS Server should generate and return a Base64 encoded CReq message to be used to initiate the challenge with the ACS.   
  
* default set to true  |  
| NotificationUrl  | notificationURL  | string  | Fully qualified URL of the system that receives the CRes message or Error Message. The CRes message is posted by the ACS through the Cardholder browser at the end of the challenge and receipt of the RRes message.   
**Note** : using "localhost" in the URL will return a validation error. Use a tool such as [Ngrok](https://ngrok.com) or [Webhook.site](https://webhook.site) with XHR Redirect enabled.  |  
| TransactionType  | transType  | Enum TransactionTypes  | Identifies the type of transaction being authenticated.   
  
1 = GoodsServicePurchase   
3 = CheckAcceptance   
10 = AccountFunding   
11 = CashTransaction   
28 = PrepaidActivationAndLoad  |  
| WhiteListStatus  | whiteListStatus  | bool  | Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the 3DS Requestor.  |  
| WhiteListStatusSource  | whiteListStatusSource  | int  | This data element will be populated by the system setting Whitelist Status.   
  
Only applicable to 3DS v2.2.0   
and required if Whitelist Status is present.   
  
01 = 3DS Server   
02 = DS   
03 = ACS  |  
| AuthenticationInformation  | threeDSRequestorAuthenticationInfo  | AuthenticationInformation - Object  | Information about how the 3DS Requestor authenticated the cardholder before or during the transaction.   
  
Only applicable if Device Channel is 2 - Browser  |  
| -- Method  | threeDSReqAuthMethod  | string  | Mechanism used by the Cardholder to authenticate to the 3DS Requestor  |  
| -- Data  | threeDSReqAuthData  | string  | Data that documents and supports a specific authentication process.  |  
| -- Timestamp  | threeDSReqAuthTimestamp  | string  | Date and time in UTC of the cardholder authentication.  |  
| PriorAuthenticationInformation  | threeDSRequestorPriorAuthenticationInfo  | PriorAuthenticationInformation - Object  | Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS transaction.  |  
| -- PriorTransactionReference  | threeDSReqPriorRef  | string  | This data element provides additional information to the ACS to determine the best approach for handling a request.   
  
This data element is an ACS Transaction ID for a prior authenticated transaction (for example, the first recurring transaction that was authenticated with the cardholder).   
  
Format: 36 character GUID (Canonical format as defined in IETF RFC 4122)  |  
| -- Method  | threeDSReqPriorAuthMethod  | string  | Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor.   
  
01 = Frictionless authentication occurred by ACS   
02 = Cardholder challenge occurred by ACS   
03 = AVS verified   
04 = Other issuer methods   
05–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)   
80–99 = Reserved for DS use  |  
| -- Data  | threeDSReqPriorAuthData  | string  | Data that documents and supports a specific authentication process.  |  
| -- Timestamp  | threeDSReqPriorAuthTimestamp  | string  | Date and time in UTC of the prior cardholder authentication.   
  
Format: YYYYMMDDHHMM  |  
| ThreeRIIndicator  | threeRIInd  | int  | Indicates the type of 3RI request. This data element provides additional information to the ACS to determine the best approach for handing a 3RI request.   
* Required only if Device channel is set to 3 (3RI)   
  
Values accepted:   
1 = Recurring transaction   
2 = Instalment transaction   
3 = Add card   
4 = Maintain card information   
5 = Account verification   
6 = Split/delayed shipment   
7 = Top–up   
8 = Mail Order   
9 = Telephone Order   
10 = Whitelist status check   
11 = Other payment   
12 = Billing Agreement   
13–79 = Reserved for EMVCo future use (values invalid until defined by EMVCo)   
80–99 = Reserved for DS use  |  
| ChallengeWindowSize  | challengeWindowSize  | Enum ChallengeWindowSizes  | Dimensions of the challenge window that has been displayed to the Cardholder. The ACS shall reply with content that is formatted to appropriately render in this window to provide the best possible user experience. Preconfigured sizes are width x height in pixels of the window displayed in the Cardholder browser window.   
  
1 = *250x400,   
2 = *390x400,   
3 = *500x600,   
4 = *600x400,   
5 = FullScreen  |  
| DecoupledAuthenticationDetails  |   | DecoupledAuthenticationDetails - Object  |   |  
| -- DecoupledIndicator  | threeDSRequestorDecReqInd  | bool  | Indicates whether the 3DS Requestor requests the ACS to use Decoupled Authentication and agrees to use Decoupled Authentication if the ACS confirms its use.   
  
Defaults to false.  |  
| -- DecoupledMaxTime  | threeDSRequestorDecMaxTime  | int  | Indicates the maximum amount of time that the 3DS Requestor will wait for an ACS to provide the results of a Decoupled Authentication transaction (in minutes). Acceptable range: Between 1 and 10080.   
  
Required if 3DS Requestor Decoupled Request Indicator = true available in 3DS v2.2.0  |  
| PurchaseDetails  |   | PurchaseDetails - Object  |   |  
| -- Amount  | purchaseAmount  | int  | Purchase amount in minor units of currency with all punctuation removed. When used in conjunction with the Purchase Currency Exponent field, proper punctuation can be calculated.  |  
| -- Currency  | purchaseCurrency  | string  | Currency in which purchase amount is expressed, using ISO 4217 three-digit currency code.  |  
| -- Exponent  | purchaseExponent  | int  | Minor units of currency as specified in the ISO 4217 currency exponent.   
Example:- USD = 2, Yen = 0  |  
| -- Date  | purchaseDate  | string  | Date and time of the purchase, expressed in UTC.  |  
| -- RecurringExpiry  | recurringExpiry  | string  | Date after which no further authorizations shall be performed.   
  
V1 Conditions: Required if 3DS Requestor Authentication Indicator= 02 or 03.   
  
V2 Conditions: Required if 3DS Requestor Authentication Indicator= 02 or 03 OR   
3RI Indicator = 01 or 02   
  
Format: YYYYMMDD  |  
| -- RecurringFrequency  | recurringFrequency  | int  | Indicates the minimum number of days between authorizations.   
  
V1 Conditions: Required if 3DS Requestor Authentication Indicator= 02 or 03.   
  
V2 Conditions: Required if 3DS Requestor Authentication Indicator= 02 or 03 OR 3RI Indicator = 01 or 02  |  
| AddressMatchIndicator  | addrMatch  | bool  | Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same.   
  
If Address match indicator = true then shipping and billing address information must be present   
  
Values accepted:   
true = Shipping Address matches Billing Address   
false = Shipping Address does not match Billing Address  |  
| CardDetails  |   | CardDetails - Object  |   |  
| -- *Number  | acctNumber  | string  | Account number that will be used in the authorization request for payment transactions. Represented by PAN/Credit card.  |  
| -- CardExpiryDate  | cardExpiryDate  | string  | Expiry Date of the PAN or token supplied to the 3DS Requestor by the Cardholder, in YYMM format  |  
| -- AccountType  | acctType  | Enum AccountTypes  | Indicates the type of account. For example, a multi–account card product.   
1 = NotApplicable   
2 = Credit   
3 = Debit  |  
| CardholderDetails  |   | CardholderDetails - Object  |   |  
| -- Name  | cardholderName  | string  | Name of the Cardholder.  |  
| -- EmailAddress  | email  | string  | The email address associated with the account that is either entered by the Cardholder, or is on file with the 3DS Requestor.  |  
| -- BillingAddress  |   | Address - Object  |   |  
| ---- City  | billAddrCity  | string  | The city of the Cardholder billing address associated with the card used for this purchase.  |  
| ---- Country  | billAddrCountry  | string  | The country of the Cardholder billing address associated with the card used for this purchase.   
  
3 characters   
ISO 3166–1 numeric three–digit country code.  |  
| ---- Line1  | billAddrLine1  | string  | First line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase.  |  
| ---- Line2  | billAddrLine2  | string  | Second line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase.  |  
| ---- Line3  | billAddrLine3  | string  | Third line of the street address or equivalent local portion of the Cardholder billing address associated with the card used for this purchase.  |  
| ---- PostalCode  | billAddrPostCode  | string  | ZIP or other postal code of the Cardholder billing address associated with the card used for this purchase.  |  
| ---- State  | billAddrState  | string  | The state or province of the Cardholder billing address associated with the card used for this purchase.  |  
| -- ShippingAddress  |   | Address - Object  |   |  
| ---- City  | shipAddrCity  | string  | City portion of the shipping address requested by the Cardholder.  |  
| ---- Country  | shipAddrCountry  | string  | Country of the shipping address requested by the Cardholder.   
  
3 characters   
ISO 3166–1 numeric three–digit country code.  |  
| ---- Line1  | shipAddrLine1  | string  | First line of the street address or equivalent local portion of the shipping address requested by the Cardholder.  |  
| ---- Line2  | shipAddrLine2  | string  | The second line of the street address or equivalent local portion of the shipping address requested by the Cardholder.  |  
| ---- Line3  | shipAddrLine3  | string  | The third line of the street address or equivalent local portion of the shipping address requested by the Cardholder.  |  
| ---- PostalCode  | shipAddrPostCode  | string  | The ZIP or other postal code of the shipping address requested by the Cardholder.  |  
| ---- State  | shipAddrState  | string  | The state or province of the shipping address associated with the card being used for this purchase.  |  
| -- MobilePhone  | mobilePhone  | CardholderPhoneNumber - Object  | The mobile phone number provided by the Cardholder.  |  
| ---- CountryCode  | cc  | string  | 1–3 characters  |  
| ---- Subscriber  | subscriber  | string  | Maximum 15 characters  |  
| -- HomePhone  | homePhone  | CardholderPhoneNumber - Object  | The home phone number provided by the Cardholder.  |  
| ---- CountryCode  | cc  | string  | 1–3 characters  |  
| ---- Subscriber  | subscriber  | string  | Maximum 15 characters  |  
| -- WorkPhone  | workPhone  | CardholderPhoneNumber - Object  | The work phone number provided by the Cardholder.  |  
| ---- CountryCode  | cc  | string  | 1–3 characters  |  
| ---- Subscriber  | subscriber  | string  | Maximum 15 characters  |  
| BrowserInfo  |   | BrowserInfo - Object  | Device Channel:   
02–BRW   
  
Message Category:   
01–PA   
02–NPA  |  
| -- AcceptHeaders  | browserAcceptHeader  | string  | Exact content of the HTTP accept headers as sent to the 3DS Requestor from the Cardholder’s browser.  |  
| -- JavaEnabled  | browserJavaEnabled  | bool  | Boolean that represents the ability of the cardholder browser to execute Java. Value is returned from the navigator.javaEnabled property.  |  
| -- JavascriptEnabled  | browserJavascriptEnabled  | bool  | Boolean that represents the ability of the cardholder browser to execute JavaScript. Value is returned from the navigator.javaEnabled property.  |  
| -- ColorDepth  | browserColorDepth  | string  | Value representing the bit depth of the color palette for displaying images, in bits per pixel. Obtained from Cardholder browser using the screen.colorDepth property.  |  
| -- ScreenHeight  | browserScreenHeight  | string  | Total height of the Cardholder’s screen in pixels. Value is returned from the screen.height property.  |  
| -- ScreenWidth  | browserScreenWidth  | string  | Total width of the cardholder’s screen in pixels. Value is returned from the screen.width property.  |  
| -- TimeZone  | browserTZ  | string  | Time difference–zone offset in minutes between UTC time and the Cardholder browser local time, in minutes.  |  
| -- Language  | browserLanguage  | string  | Value representing the browser language as defined in IETF BCP47. Returned from navigator.language property.  |  
| -- UserAgent  | browserUserAgent  | string  | Exact content of the HTTP user–agent header.  |  
| -- IpAddress  | browserIP  | string  | IP address of the browser as returned by the HTTP headers to the 3DS Requestor.  |  
| MerchantDetails  |   | MerchantDetails - Object  |   |  
| -- Name  | merchantName  | string  | Merchant name assigned by the Acquirer or Payment System.  |  
| -- CategoryCode  | mcc  | string  | DS–specific code describing the Merchant’s type of business, product or service.  |  
| -- CountryCode  | merchantCountryCode  | string  | Country Code of the Merchant. This value correlates to the Merchant Country Code as defined by each Payment System or DS.   
  
3 characters   
ISO 3166–1 numeric three–digit country code  |  
| -- AcquirerMerchantId  | acquirerMerchantID  | string  | Acquirer–assigned Merchant identifier. This may be the same value that is used in authorization requests sent on behalf of the 3DS Requestor and is represented in ISO 8583 formatting requirements.  |  
| -- RiskIndicator  | merchantRiskIndicator  | Object  | Merchant’s assessment of the level of fraud risk for the specific authentication for both the cardholder and the authentication being conducted.  |  
| ---- DeliveryEmailAddress  | deliveryEmailAddress  | string  | For Electronic delivery, the email address to which the merchandise was delivered.  |  
| ---- DeliveryTimeframe  | deliveryTimeframe  | string  | Indicates the merchandise delivery timeframe.   
  
1 = Electronic Delivery   
2 = Same day shipping   
3 = Overnight shipping   
4 = Two–day or more shipping  |  
| ---- GiftCardAmount  | giftCardAmount  | string  | For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s) in major units (for example, USD 123.45 is 123). Example: gift card amount is USD 123.45:   
Values accepted:   
123   
0123   
00123  |  
| ---- GiftCardCount  | giftCardCount  | string  | For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.  |  
| ---- GiftCardCurrency  | giftCardCurrency  | string  | For prepaid or gift card purchase, ISO 4217 three–digit currency code of the gift card  |  
| ---- PreOrderDate  | preOrderDate  | string  | For a pre–ordered purchase, the expected date that the merchandise will be available.   
  
Format accepted: Date format = YYYYMMDD  |  
| ---- PreOrderPurchaseIndicator  | preOrderPurchaseInd  | string  | Indicates whether Cardholder is placing an order for merchandise with a future availability or release date.   
  
Values accepted:   
1 = Merchandise available   
2 = Future availability  |  
| ---- ReOrderItemsIndicator  | reorderItemsInd  | string  | Indicates whether the cardholder is reordering previously purchased merchandise.   
  
1 = First time ordered   
2 = Reordered  |  
| ---- ShippingIndicator  | shipIndicator  | string  | Indicates shipping method chosen for the transaction. Merchants must choose the Shipping Indicator code that most accurately describes the cardholder’s specific transaction, not their general business. If one or more items are included in the sale, use the Shipping Indicator code for the physical goods, or if all digital goods, use the Shipping Indicator code that describes the most expensive item.  |  
| AccountInfo  | acctInfo  | Object  | Additional information about the account optionally provided by the 3DS Requestor.  |  
| -- AccountAgeIndicator  | chAccAgeInd  | string  | Length of time that the cardholder has had the account with the 3DS Requestor.   
  
Values accepted:   
01 = No account (guest check–out)   
02 = Created during this transaction   
03 = Less than 30 days   
04 = 30−60 days   
05 = More than 60 days  |  
| -- AccountChange  | chAccChange  | string  | Date that the cardholder’s account with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.   
  
Date format = YYYYMMDD  |  
| -- AccountChangeIndicator  | chAccChangeInd  | string  | Length of time since the cardholder’s account information with the 3DS Requestor was last changed, including Billing or Shipping address, new payment account, or new user(s) added.   
  
Values accepted:   
01 = Changed during this transaction   
02 = Less than 30 days   
03 = 30−60 days   
04 = More than 60 days  |  
| -- AccountDate  | chAccDate  | string  | Date that the cardholder opened the account with the 3DS Requestor.  |  
| -- PasswordChange  | chAccPWChange  | string  | Date that cardholder’s account with the 3DS Requestor had a password change or account reset.   
  
Date format = YYYYMMDD  |  
| -- PasswordChangeIndicator  | chAccPWChangeInd  | string  | Indicates the length of time since the cardholder’s account with the 3DS Requestor had a password change or account reset.   
  
Values accepted:   
01 = No change   
02 = Changed during this transaction   
03 = Less than 30 days   
04 = 30−60 days   
05 = More than 60 days  |  
| -- PurchaseCount  | nbPurchaseAccount  | string  | Number of purchases with this cardholder account during the previous six months.  |  
| -- ProvisioningAttemptsPerDay  | provisionAttemptsDay  | string  | Number of Add Card attempts in the last 24 hours.   
  
values:   
_ 2   
_ 02   
* 002  |  
| -- TransactionsPerDay  | txnActivityDay  | string  | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous 24 hours.   
  
values:   
_ 2   
_ 02   
* 002  |  
| -- TransactionsPerYear  | txnActivityYear  | string  | Number of transactions (successful and abandoned) for this cardholder account with the 3DS Requestor across all payment accounts in the previous year.   
  
values:   
2   
02   
002  |  
| -- PaymentAccountAge  | paymentAccAge  | string  | Date that the payment account was enrolled in the cardholder’s account with the 3DS Requestor.  |  
| -- PaymentAccountAgeIndicator  | paymentAccInd  | string  | Indicates the length of time that the payment account was enrolled in the cardholder’s account with the 3DS Requestor   
  
Values accepted:   
01 = No account (guest check–out)   
02 = During this transaction   
03 = Less than 30 days   
04 = 30−60 days   
05 = More than 60 days  |  
| -- ShippingAddressUsage  | shipAddressUsage  | string  | Date when the shipping address used for this transaction was first used with the 3DS Requestor.   
  
Date format = YYYYMMDD  |  
| -- ShippingAddressUsageIndicator  | shipAddressUsageInd  | string  | Indicates when the shipping address used for this transaction was first used with the 3DS Requestor.   
  
1 = This transaction   
2 = Less than 30 days   
3 = 30−60 days   
4 = More than 60 days  |  
| -- ShippingNameIndicator  | shipNameIndicator  | string  | Indicates if the Cardholder Name on the account is identical to the shipping Name used for this transaction.   
  
Values accepted:   
01 = Account Name identical to shipping Name   
02 = Account Name different than shipping Name  |  
| -- SuspiciousAccountActivity  | suspiciousAccActivity  | string  | Indicates whether the 3DS Requestor has experienced suspicious activity (including previous fraud) on the cardholder account.   
  
Values accepted:   
01 = No suspicious activity has been observed   
02 = Suspicious activity has been observed  |  
| MessageExtension  | messageExtension  | Object  | Data necessary to support requirements not otherwise defined in the 3–D Secure message are carried in a Message Extension.  |  
| -- Id  | id  | string  | A unique identifier for the extension. Note: Payment System Registered Application Provider Identifier (RID) is required as prefix of the ID.  |  
| -- Data  | data  | string  | The data carried in the extension.  |  
| -- CriticalityIndicator  | criticalityIndicator  | bool  | A Boolean value indicating whether the recipient must understand the contents of the extension to interpret the entire message.  |  
| -- Name  | name  | string  | The name of the extension data set as defined by the extension owner.  |  
| AccountId  | acctID  | string  | Additional information about the account optionally provided by the 3DS Requestor.  |  
| InstallmentPaymentData  | purchaseInstalData  | string  | Indicates the maximum number of authorizations permitted for installment payments.   
  
Required if the Merchant and Cardholder have agreed to installment payments.  |  
| ChallengeIndicator  | threeDSRequestorChallengeInd  | string  | Indicates whether a challenge is requested for this transaction.   
  
01 = No preference   
02 = No challenge requested   
03 = Challenge requested: 3DS Requestor Preference   
04 = Challenge requested: Mandate   
  
The below values are applicable to version 2.2.0   
  
05 = No challenge requested (transactional risk analysis is already performed)   
06 = No challenge requested; (Data share only)   
07 =No challenge requested (strong consumer authentication is already performed)   
08 – No challenge requested (utilize whitelist exemption if no challenge required)   
09 – Challenge requested (whitelist prompt requested if challenge required)   
  
If this field is not provided, the expected action is that the ACS would interpret as 01 = No preference.  |