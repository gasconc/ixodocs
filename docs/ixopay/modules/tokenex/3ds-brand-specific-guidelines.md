---
title: Brand Specific Guidelines
summary: ' 3-D Secure Authentication  Brand Specific Guidelines'
tags:
- mastercard-identity-check-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-mastercard-identity-check-direct-link-mastercard-identity-check
- supported-versions-response-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-supported-versions-response-direct-link-supported-versions-response
- authentications-request-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-authentications-request-direct-link-authentications-request
- liability-shift-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-liability-shift-direct-link-liability-shift
- recurring-payments-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-recurring-payments-direct-link-recurring-payments
- visa-secure-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-visa-secure-direct-link-visa-secure
- discover-protectbuy-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-discover-protectbuy-direct-link-discover-protectbuy
- amex-safekey-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-amex-safekey-direct-link-amex-safekey
- authentications-challenge-results-response-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-authentications-challenge-results-response-direct-link-authentications-challenge-results-response
- jcb-secure-https-documentation-ixopay-com-modules-docs-tokenex-brand-specific-guidelines-jcb-jsecure-direct-link-jcb-secure
source_url: ''
portal: ixopay-modules
updated: '2026-04-10'
related: []
---

* 3-D Secure Authentication
  * Brand Specific Guidelines

# Brand Specific Guidelines
Details that are specific to each card brand's implementation of the EMVCo 3DS Specification.
This section provides descriptions of the validation variations for specific payment brands. Outlined below are the high-level required configurations for each payment brand. If additional information is needed, please contact TokenEx Support. If a brand does not have any specific guidance outlined below, the standard guidance applies: more valid data included in an authentications request decreases the risk of a challenge being presented to the presumed cardholder.
## Mastercard - Identity Check[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#mastercard---identity-check "Direct link to Mastercard - Identity Check")
### Supported Versions Response[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#supported-versions-response "Direct link to Supported Versions Response")
The Mastercard Identity Check Program has incorporated the 80 to 99 Reserved-for-Directory-Server-Use values to inform the 3DS Servers/Merchants of value-added services or transaction processing attributes that apply to account ranges present in the Supported Versions response.  
| threeDSecureResponse.acsInfoInd  | Description  |  
| --- | --- |  
| 01  | Authentication Available at ACS  |  
| 02  | Attempts Supported by ACS or DS  |  
| 03  | Decoupled Authentication Supported  |  
| 04  | Whitelisting Supported  |  
| 80  | Card Range is enrolled is Smart Authentication Stand-In Service  |  
| 81  | Card Range is enrolled in Smart Authentication Direct  |  
| 84  | Card Range supports payment transactions  |  
| 86  | Card Range supports the app channel  |  
| 85  | Card Range supports non-payment transactions  |  
| 87  | Card Range supports the browser channel  |  
| 88  | Card Range supports app-based ACS/Issuer Challenge Capabilities  |  
| 89  | Card Range supports browser-based ACS/Issuer Challenge Capabilities  |  
| 90  | Card Range is Enrolled in Identity Check Express  |  
| 91  | Card range supports Authentication Express Merchant Delegation for Identity Check Express (Type I)  |  
| 92  | Card range supports Authentication Express Low Fraud Merchant (Type II)  |  
| 93  | Card Range participates in Authentication Express Wallet Delegation  |  
| 94  | Card Range participates in Authentication Express Device Delegation  |  
### Authentications Request[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-request "Direct link to Authentications Request")
**Rules and Validations**  
| Request Parameter  | Applicability  | Description  |  
| --- | --- | --- |  
| MerchantDetails.AcquirerMerchantId  | Required: message category PA   
Optional: message category NPA  | Must match 3DS Enrollment data  |  
| AcquirerBin  | Required: message category PA   
Optional: message category NPA  | Must match 3DS Enrollment data  |  
| MerchantDetails.Name  | Required: message category PA   
Optional: message category NPA  | Must match 3DS enrollment data. In use cases where the transaction is initiated by a different merchant, like in the case of a travel aggregator site managing booking for airlines or hotels, the name must follow the following format: “Travel aggregator name_merchant (hotel or airline) name”   
example: aggregatorName_merchantName  |  
| MessageCategory  | Required  | 1 (PA) or 2 (NPA) or 80 (IDCI, see section below).  |  
### Liability Shift[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#liability-shift "Direct link to Liability Shift")
The below table outlines what to expect for liability shifts.  
| transStatus  | Meaning  | Message Category  | Authentication Value present  | ECI  | Version  | Liability Holder  | Comment  |  
| --- | --- | --- | --- | --- | --- | --- | --- |  
| Y  | Fully Authenticated  | PA  | Yes  | 02  |  2.1.0 and 2.2.0  | Issuer  | Successful authentication by the ACS (including whitelisting exemption and decoupled authentication)  |  
| Y  | Fully Authenticated  | PA  | Yes  | 07  |  2.1.0 and 2.2.0  | Issuer  | Recurring Transaction, successfully authenticated by the ACS (including 3RI recurring transactions applicable for v2.2.0, which is for the subsequent authentications after the initial transaction).  |  
| Y  | Fully Authenticated  | PA  | No  | 02  |  2.1.0 and 2.2.0  | Issuer  | Successful Frictionless authentication of** low-risk** transaction by Mastercard Stand-In RBA service (including recurring transaction)  |  
| A  | Attempted Authentication  | PA  | No  | 01  |  2.1.0 and 2.2.0  | Issuer  | Successful Frictionless authentication of **non low-risk **transaction by Mastercard Stand In RBA service (including recurring transaction)  |  
| A  | Attempted Authentication  | PA  | No  | 01  |  2.1.0 and 2.2.0  | Issuer  | Merchant only authenticated.   
Attempts: Transaction could not be authenticated by either the ACS or Mastercard RBA (including recurring transaction)  |  
| N  | Not Authenticated  | PA  | No  | 00  |  2.1.0 and 2.2.0  | Acquirer  | Not Authenticated: Transaction could not be authenticated, and Attempts doesn’t apply  |  
| R  | Rejected  | PA  | No  | 00  |  2.1.0and 2.2.0  | N/A  | Payment Transaction rejected by Issuer. Authorization should not be attempted.  |  
| I  | Information only  | PA  | Yes  | 06  | 2.2.0  | Acquirer  | Information only flow. Transaction was not authenticated by either ACS or Mastercard, based on Acquirer exemption for SCA or SCA performed by merchant or because it was data only flow(challenge indicator 05 or 07 or 06)  |  
| Y  | Fully Authenticated  | PA  | Yes  | 02  |  2.1.0 and 2.2.0  | Issuer  | Successful authentication by the Mastercard Identity Check Express (IDCX) Service  |  
| U  | Identity Check Insights  | PA  | Yes  | 04  |  2.1.0 and 2.2.0  | Acquirer  | Identity Check Insights transaction  |  
| U  | Identity Check Insights  | PA  | Yes  | 04  | 2.2.0  | Acquirer  | Identity Check Insights transaction on 3RI Device Channel  |  
| Y  | Fully Authenticated  | NPA  | No  | N2  |  2.1.0 and 2.2.0  | N/A  | Authenticated: Frictionless Transaction, Authenticated by ACS  |  
| Y  | Fully Authenticated  | NPA  | Yes  | N2  |  2.1.0 and 2.2.0  | N/A  | Authenticated: Challenge Transaction, Authenticated by ACS  |  
| N  | Not Authenticated  | NPA  | No  | N0  |  2.1.0 and 2.2.0  | N/A  | Not Authenticated: Transaction could not be authenticated, and Attempts doesn’t apply.  |  
| R  | Rejected  | NPA  | No  | N0  |  2.1.0 and 2.2.0  | N/A  | Transaction rejected by Issuer. Authorization should not be attempted.  |  
| I  | Information only  | NPA  | No  | N0  | 2.2.0  | N/A  | Information only flow. Transaction was not authenticated by either ACS or Mastercard, based on Acquirer exemption for SCA (challenge indicator = 05)  |  
The below table provides details of the specific reason codes defined by the Mastercard DS.  
| Transaction Status Reason, `transStatusReason`  | Applicability  | Applicable Scenario  |  
| --- | --- | --- |  
| 80  |  2.1.0 and 2.2.0  | Sent by the Mastercard DS to indicate that the authentication was processed through Identity Check Insights.  |  
| 81  | 2.1.0  | Sent by the ACS with a transaction status of N in the authentications response, indicating a successful authentication of an Acquirer SCA exemption transaction.  |  
| 82  |  2.1.0 and 2.2.0  | Sent by the Mastercard DS when a transaction is not eligible for Smart Authentication Stand-In because the authentication request's Challenge Indicator was set to “challenge requested: mandate” (threeDSRequestorChallengeInd = 04).   
  
In such cases, Mastercard DS will not invoke Smart Authentication Stand-In and will instead respond with an authentication response having a Transaction Status of N (transStatus = N) and Transaction Status Reason of 82 (transStatusReason = 82) meaning “Challenge Mandate requested but could not be performed”. In case of challenge results, a Transaction Status of N and Transaction Status Reason of 82 will be sent along with Authentication Type of 92 (authenticationType = 92) meaning “Challenge Mandate requested but could not be performed”.  |  
| 83  |  2.1.0 and 2.2.0  | Sent by the Mastercard DS when the DS drops the reason code received from the ACS because the one sent by the ACS did not make sense with a transaction status of N or R. Transaction Status Reason = 83 will mean - DS dropped reason code received from ACS.   
  
In the instance where the Mastercard DS replaces the transaction status in challenge results to N, Authentication Type will be populated with a value of 83 (DS altered transaction status).  |  
| 84  |  2.1.0 and 2.2.0  | Sent by the Mastercard DS to indicate that the transaction was not processed by Smart Authentication due to challenge cancellation.  |  
| 87  |  2.1.0 and 2.2.0  | Sent by the Mastercard DS to indicate that the request was not routed to Smart Authentication Stand-In due to the Device Channel being 3RI.  |  
| 88  |  2.1.0 and 2.2.0  | Sent by the ACS to indicate that 3DS Requestor Prior Transaction Authentication Data was provided in the request, but either the ACS could not find the 3DS Requestor Prior Transaction Authentication Data or it was expired.  |  
### Recurring Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#recurring-payments "Direct link to Recurring Payments")
A recurring payment should be indicated by the merchant in the authentications request parameter `AuthenticationIndicator` and a value of `02`.
The Mastercard Directory Server (DS) will check the presence and format of the `PriorAuthenticationInformation.Data` and `PriorAuthenticationInformation.Timestamp` fields for payment transactions (Message Category PA, 01) when the Device Channel is 3RI. If the fields are not present, the DS will error the transaction with error code 201. If the fields are present but in the incorrect format, the DS will return error code 203.
Strong Customer Authentication (SCA) is highly recommended for the following scenarios:
  * For the first transaction of the recurring payments. The ChallengeIndicator field should contain the value of 03 or 04.
  * After the Recurring Payment, if the Expiry date is reached and the next set of recurring payments need to be initiated, the maximum limit before another SCA is needed (recurring expiry) needs to be confirmed between merchant and cardholder and should be typically made before the authentication screens are shown.

#### Best Practice Recommendation[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#best-practice-recommendation "Direct link to Best Practice Recommendation")
  * Ideally, Merchants should have a recurring expiry associated with all recurring transactions after which SCA should be initiated, but in cases like subscriptions where there is no established expiry or end date of recurring transactions, merchants should indicate the value of “99991231” (YYYYMMDD format) in the `PurchaseDetails.RecurringExpiry` field.
  * Recurring payments with a variable frequency can set the `PurchaseDetails.RecurringFrequency` field to `01` to indicate that the frequency of payments is not set.

#### Variations based on EMV 3DS Version and Regulations[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#variations-based-on-emv-3ds-version-and-regulations "Direct link to Variations based on EMV 3DS Version and Regulations")
##### 2.1.0
In EMV 3DS version 2.1.0, all subsequent transaction that are part of a recurring payment go straight to authorization and do not go through authentication as the cardholder is not in session and the 3RI payment flow is not supported. **Note** : liability for such transactions will be with the merchant.
Refer to the authentications request and response snippets and table below for more details of the recurring payment scenario in EMVC 3DS version 2.1.0
**Authentication parameters for an initial/first recurring transaction**  
| Request Param  | Value and Details  |  
| --- | --- |  
| MessageCategory  | 1 - Payment Authentication  |  
| DeviceChannel  | 1 - App, 2 - Browser  |  
| AuthenticationIndicator  | 2 - Recurring Transaction  |  
| ChallengeIndicator  | "03" - Challenge requested because merchant preference   
"04" - Challenge requested because of a mandate  |  
| ThreeDSecureResponse Param  | Value and Details  |  
| --- | --- |  
| transStatus  | Y - Fully Authenticated  |  
| eci  | 02 or 07 (see table below)  |  
**ECI's impact on the authentication value's prefix**
These authentication value prefixes were added specifically for recurring payments and is recommended to ACS operators for use, though their usage is at the discretion of their ACS operator and should not be expected to be present for every initial recurring transaction's authentication.  
| ECI Value  | Authentication Flow  | Authentication Value Prefix  |  
| --- | --- | --- |  
| 02  | Frictionless  | kA  |  
| 02  | Challenged  | kB  |  
| 07  | Frictionless  | kO  |  
| 07  | Challenged  | kP  |  
**Request and Response snippet examples**
  * Authentication Request for the initial/first recurring transaction
  * Authentication Response

```
{  
  "DeviceChannel": 2, // Browser  
  "MessageCategory": 1, // Payment Authentication  
  "AuthenticationIndicator": 2, // Recurring  
  "ChallengeIndicator": "03" // A challenge is requested due to merchant preference  
  // remainder of request  
}  

```

```
{  
  "threeDSecureResponse": {  
    "transStatus": "Y",  
    "eci": "02",  
    "authenticationValue": "kB..." // ellipses in lieu of suffix  
   // remainder of response  
}  

##### 2.2.0[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#220 "Direct link to 2.2.0")
The request parameters described above for 2.1.0 are the same for version 2.2.0, though in 2.2.0 - all subsequent transactions that are part of a recurring payment should be sent as a 3RI transaction and include the below authentications request parameters.
**Authentication parameters for a subsequent recurring transaction**  
| Request Param  | Value and Details  |  
| --- | --- |  
| MessageCategory  | 1 - Payment Authentication  |  
| DeviceChannel  | 3 - 3RI  |  
| ThreeRIIndicator  | 1 - Recurring Transaction  |  
| PriorAuthenticationInformation.Data  | DS Transaction ID of the initial or the first recurring payment transaction  |  
| ThreeDSecureResponse Param  | Value and Details  |  
| --- | --- |  
| transStatus  | Y - Fully Authenticated  |  
| eci  | 07 (see authentication value details below)  |  
| authenticationValue  | The ECI 07 and authentication value prefixes were introduced for usage in recurring payments. Authentication values are prefixed by `kO` if the authentication was frictionless, and by `kP` if the authentication was challenged. In contrast with 2.1.0, ACS Operators are mandated to use these prefixes in 2.2.0 for 3RI payment transactions.  |  
**Request and Response snippet examples**
  * Authentication Request for subsequent recurring transaction
  * Authentication Response

```
{  
  "MessageCategory": 1, // Payment Authentication  
  "DeviceChannel": 3, // 3RI  
  "ThreeRIIndicator": 1, // Recurring Transaction  
  "PriorAuthenticationInformation": {  
    "Data":"64d76f6d-e512-4aba-ae29-f7af0dc7db09" // DS Transaction ID of the initial or first recurring payment transaction  
  }  
  // remainder of request  
}  

```
{  
  "threeDSecureResponse": {  
    "transStatus": "Y",  
    "eci": "07",  
    "authenticationValue": "kO..." // ellipses in lieu of suffix  
  // remainder of response  
}  

#### EU Specific Guidelines[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#eu-specific-guidelines "Direct link to EU Specific Guidelines")
According to the Article 14 in EEA, an authentication is required for the first transaction of the recurring payments with the below mentioned guidelines.  
| Authentication Request Param  | Value and Details  |  
| --- | --- |  
| ChallengeIndicator  | "04" - Challenge is requested due to mandate  |  
| PriorAuthenticationInformation.Data  | “999999999999999999999999999999999999”. This field must contain the number 9, repeating for a character count of 36.  |  
#### Identity Check Insights (IDCI)[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#identity-check-insights-idci "Direct link to Identity Check Insights \(IDCI\)")
IDCI is a Mastercard program built on top the EMV 3DS specification's framework, but is not included in the specification.
For merchants who have concerns regarding the latency of transactions and are willing to maintain the liability of the transaction, there is an option to submit the subsequent transactions as 3RI Identity Check Insights transactions (in version EMV 3DS 2.2.0). This will allow them to take advantage of DTIs that are generated for the IDCI 3RI transaction with the potential for higher approval rates in the authorization.
Refer to the below tables for more details of such recurring payment scenario.
**Authentications**  
| Request Param  | Value and Details  |  
| --- | --- |  
| MessageCategory  | 80 - IDCI  |  
| DeviceChannel  | 3 - 3RI  |  
| ThreeRIIndicator  | 1 - Recurring Transaction  |  
| PriorAuthenticationInformation.Data  | DS Transaction ID of the Initial or the first recurring payment transaction. **Note** : This field is a requirement for 3RI Identity Check Insights transactions for recurring payments.  |  
| ThreeDSecureResponse param  | Value and Details  |  
| --- | --- |  
| transStatus  | U - Authentication could not be performed. This transStatus is applicable to every IDCI transaction.  |  
| eci  | 04  |  
| authenticationValue  | An authentication value is not present in IDCI transaction responses.  |  
**Request and Response snippet examples**
  * IDCI Authentication Request for subsequent recurring transaction
  * Authentication Response

```
{  
  "MessageCategory": 80, // IDCI  
    "DeviceChannel": 3, // 3RI  
    "ThreeRIIndicator": 1, // Recurring Transaction  
    "PriorAuthenticationInformation": {  
      "Data":"64d76f6d-e512-4aba-ae29-f7af0dc7db09" // DS Transaction ID of the initial or first recurring payment transaction  
    }  
  // remainder of request  
}  

```
{  
  "threeDSecureResponse": {  
    "transStatus": "U",  
    "eci": "04",  
  // remainder of response  
}  

For unregulated markets where there are no regulations regarding Strong Customer Authentication, the IDCI message category —used with APP or BRW device channels— can be used for recurring payments initial or first transaction and use 3RI IDCI with subsequent transactions.
Refer to the below table for more details of such recurring payment scenario:
**Authentication parameters for an initial/first recurring transaction**  
| Request Param  | Value and Details  |  
| --- | --- |  
| MessageCategory  | 80 - IDCI  |  
| DeviceChannel  | 1 - App, 2 - Browser  |  
| AuthenticationIndicator  | 2 - Recurring Transaction  |  
| ChallengeIndicator  | "03" - Challenge requested because merchant preference   
"04" - Challenge requested because of a mandate  |  
| ThreeDSecureResponse Param  | Value and Details  |  
| --- | --- |  
| transStatus  | U - Authentication could not be performed. This transStatus is applicable to every IDCI transaction.  |  
| eci  | 04  |  
| authenticationValue  | An authentication value is not present in IDCI transaction responses.  |  
**Authentication parameters for a subsequent recurring transaction**  
| Request Param  | Value and Details  |  
| --- | --- |  
| MessageCategory  | 80 - IDCI  |  
| DeviceChannel  | 3 - 3RI  |  
| ThreeRIIndicator  | 1 - Recurring Transaction  |  
| PriorAuthenticationInformation.Data  | DS Transaction ID of the initial or the first recurring payment transaction. **Note** : This field is a requirement for 3RI Identity Check Insights transactions for recurring payments.  |  
| ThreeDSecureResponse Param  | Value and Details  |  
| --- | --- |  
| transStatus  | U - Authentication could not be performed. This transStatus is applicable to every IDCI transaction.  |  
| eci  | 04  |  
| authenticationValue  | An authentication value is not present in IDCI transaction responses.  |  
## Visa - Secure[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#visa---secure "Direct link to Visa - Secure")
To successfully submit authentication requests in compliance with Visa’s 3-D Secure Authentication program, specific validations as specified by the _Visa Secure Program Guide_ documentation applies.
### Supported Versions Response[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#supported-versions-response-1 "Direct link to Supported Versions Response")  
| threeDSecureResponse.acsInfoInd  | Description  |  
| --- | --- |  
| 01  | Authentication Available at ACS  |  
| 02  | Attempts Supported by ACS or DS  |  
| 80  | TRA Supported by issuer  |  
| 81  | Data-only Supported by issuer  |  
| 82  | Delegated Authentication Supported by issuer  |  
### Authentications Request[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-request-1 "Direct link to Authentications Request")
**Rules and Validations**  
| Request Parameter  | Applicability  | Description  |  
| --- | --- | --- |  
| CardDetails.CardExpiryDate  | Required  | YYMM  |  
| TransactionType  | Required  | 1 - Goods/Service Purchase   
3 - Check Acceptance   
10 - Account Funding   
11 - Quasi–Cash Transaction   
28 - Prepaid Activation and Load  |  
| ThreeDSecureRequestorAuthenticationInformation.Method  | Required for device channels APP and BRW.  | Cardholder authentication method used by merchant.   
Not applicable to 3RI.   
"01" = No 3DS Requestor authentication occurred (i.e., cardholder “logged in” as guest)   
"02" = Log into the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials   
"03" = Log into the cardholder account at the 3DS Requestor system using federated ID   
"04" = Log into the cardholder account at the 3DS Requestor system using issuer credentials   
"05" = Log into the cardholder account at the 3DS Requestor system using third–party authentication   
"06" = Log into the cardholder account at the 3DS Requestor system using FIDO® Authenticator   
"07" = Log into the cardholder account at the 3DS Requestor system using FIDO® Authenticator (FIDO® assurance data signed)   
"08" = SRC Assurance Data  |  
| ThreeRIIndicator  | Required for device channel 3RI  | 1 = Recurring transaction   
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
80–99 = Reserved for DS use   
  
**Note** : values 1-5 are applicable to both 2.1.0 and 2.2.0. Values 6-12 were introduced in version 2.2.0.   
  
**Edge Case** : When the transaction uses message version 2.1.0, message category 2 (NPA), device channel 3 (3RI), **and** the value for this parameter is 80, the ACS will _apply PA validations_ instead of NPA. This means that all message category 1 (PA) fields become required.  |  
| AcquirerBin  | Required  | Visa requires this field for both Message Categories PA and NPA.  |  
These are additional challenge indicator values applicable to the Visa DS  
| ChallengeIndicator  | Description  |  
| --- | --- |  
| 81  | Visa-specific Data-only transaction. This will only be applicable for 2.2.0.  |  
| 82  | NO CHALLENGE REQUESTED. The merchant is requesting to utilize Secure Corporate Exemption as applicable.  |  
| 83  | NO CHALLENGE REQUESTED. The merchant is requesting to utilize TRA Exemption This will only be applicable for 2.1.0.  |  
### Liability Shift[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#liability-shift-1 "Direct link to Liability Shift")
The below table outlines what to expect for liability shifts.  
| transStatus  | Meaning  | Authentication Value present  | ECI  | Version  | Liability Holder  | Comment  |  
| --- | --- | --- | --- | --- | --- | --- |  
| Y  | Fully Authenticated  | Yes  | 05  |  2.1.0 and 2.2.0  | Issuer  | Successful authentication.  |  
| A  | Attempted Authentication  | Yes  | 06  |  2.1.0 and 2.2.0  | Issuer  | Authentication attempted and CAVV provided.  |  
| A  | Attempted Authentication  | No  | 06  |  2.1.0 and 2.2.0  | Acquirer  | Authentication attempted but no CAVV provided by issuer.  |  
| N  | Not Authenticated  | No  | 07  |  2.1.0 and 2.2.0  | Acquirer  | Transaction could not be authenticated and Attempts does not apply.  |  
| R  | Rejected  | No  | 07  |  2.1.0 and 2.2.0  | Acquirer  | Payment Transaction rejected by Issuer. Authorization should not be attempted.  |  
| Y  | Fully Authenticated with TRA exemption  | Yes  | 07  | 2.2.0  | Acquirer  | Applicable when the merchant _populated_ the request's exemption indicator.  |  
| Y  | Fully Authenticated with TRA exemption  | Yes  | 05  | 2.2.0  | Issuer  | Applicable when the merchant* did not populate* the request's exemption indicator.  |  
| Y  | Fully Authenticated with low value  | Yes  | 05  |  2.1.0 and 2.2.0  | Issuer  | Issuer applied the low value exemption.  |  
| Y  | Fully Authenticated for Secure Corp Payment  | Yes  | 07  |  2.1.0 and 2.2.0  | Acquirer  | Applicable when the merchant _populated_ the request's exemption indicator.  |  
| Y  | Fully Authenticated for Secure Corp Payment  | Yes  | 05  |  2.1.0 and 2.2.0  | Issuer  | Applicable when the merchant* did not populate* the request's exemption indicator.  |  
| Y  | Fully Authenticated for Trusted Beneficiaries  | Yes  | 05  | 2.2.0  | Issuer  | Applicable when the merchant populated the request's exemption indicator.  |  
| Y  | Fully Authenticated  | Yes  | 07  | 2.2.0  | Acquirer  | Fully authenticated via the Visa Delegated auth program.  |  
| I  | Information Only  | Yes  | 07  | 2.2.0  | Acquirer  | Information only flow. Transaction was not authenticated by ACS, merchant challenge preference acknowledged.  |  
| U  | Unable to Authenticate  | Yes  | 07  |  2.1.0 and 2.2.0  | Acquirer  | Authentication Could Not Be Performed, Technical or Other Problem  |  
The below table provides details for additional reason codes defined by the Visa DS.  
| Transaction Status Reason Code  | Transaction Status Reason  | ECI  | Authentication Value present  |  
| --- | --- | --- | --- |  
| 80  | Error Connecting to the ACS  | 07  | No  |  
| 81  | ACS Timed Out  | 07  | No  |  
| 82  | Invalid Response from ACS  | 07  | No  |  
| 83  | System Error Response from ACS  | 07  | No  |  
| 84  | Internal error while generating authentication value  | 07  | No  |  
| 85  | Visa Merchant ID not eligible for requested program  | 07  | No  |  
| 86  | Version not supported by ACS  | 07  | No  |  
| 87  | Transaction excluded from Attempts processing  | 07  | No  |  
| 88  | Requested program not supported by ACS  | 07  | No  |  
| 89  | CAVV is included in response. **Note** : This is applicable for version 2.1.0 in scenarios such as the Secure Corporate Payment Exemption.  | 07  | Yes  |  
### Recurring Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#recurring-payments-1 "Direct link to Recurring Payments")
The following are generic guidelines for the Visa Secure program.
**First Authentication Transaction** - For merchants to receive Dispute protection, the first transaction in the series needs to be authenticated and must follow the associated authorization rules for an authenticated transaction, i.e., the authorization is submitted with the appropriate ECI and authentication value for the Visa Secure transaction.
**Authentications Request Parameters** - The Recurring Payment Data (`PurchaseDetails.Amount`) field, Recurring Frequency (`PurchaseDetails.RecurringFrequency`) field, and Recurring Expiry (`PurchaseDetails.RecurringFrequency`) field in the authentications request are required when the merchant and cardholder have agreed to recurring payments and the Recurring Expiry field must contain a date no later than the original authentication date.
**Dispute Protection** - If the first transaction was conducted as a Visa Secure authenticated or attempted authentication, Dispute protection applies to the original e-commerce transaction. But for all subsequent Recurring Transactions, Dispute provisions applicable for Recurring Transactions will apply and Visa Secure Dispute protection won’t be applicable.
## Discover - ProtectBuy[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#discover---protectbuy "Direct link to Discover - ProtectBuy")
To successfully submit authentication requests in compliance with American Express SafeKey Authentication program, specific validations as specified by _SafeKey 2-0 Protocol Specification_ and _SafeKey 2-0 Acquirer Merchant Implementation Guide_ are applied.
### Authentications Request[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-request-2 "Direct link to Authentications Request")
**Rules and Validations**  
| Request Param  | Applicability  | Description  |  
| --- | --- | --- |  
| CardDetails.CardExpiryDate  | Required  | YYMM  |  
### Liability Shift[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#liability-shift-2 "Direct link to Liability Shift")  
| transStatus  | Meaning  | ECI  | Version  | Liability Holder  | Comments  |  
| --- | --- | --- | --- | --- | --- |  
| Y  | Fully Authenticated  | 05  |  2.1.0 and 2.2.0  | Issuer  | Successful Authentication  |  
| A  | Attempted Authentication  | 06  |  2.1.0 and 2.2.0  | Issuer  | Attempts server responds that EMV 3DS is not supported or Issuer Unavailable.  |  
| N  | Not Authenticated  | 07  |  2.1.0 and 2.2.0  | Acquirer  | Not Authenticated. Transaction could not be authenticated and Attempts do not apply.  |  
## Amex - Safekey[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#amex---safekey "Direct link to Amex - Safekey")
### Authentications Request[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-request-3 "Direct link to Authentications Request")
**Rules and Validations**  
| Request Param  | Applicability  | Comments  |  
| --- | --- | --- |  
| AuthenticationIndicator  | Required  | Additional values accepted:   
80 - Membership Rewards transaction (01-PA) or Membership Rewards balance inquiry (02-NPA)   
81 - Add EMV Token and perform Card Member verification as part of EMV Token ID&V (Issuer must not send AV)   
82 - Maintain EMV Token information and perform Card Member verification as part of EMV Token ID&V (Issuer must not send AV).  |  
| ChallengeIndicator  | Optional: 2.2.0  | If the Challenge Indicator data element contains a value of 05, 06, or 07, the Amex DS will amend this to 02 = No challenge requested.  |  
| AcquirerMerchantId  | Required for message category PA.   
Optional for message category NPA.  | TokenEx fills the 3DS Requestor role of an aggregator (AGG). The Amex value for the AcquirerMerchantId through our 3DS solution is 10 characters long.  |  
| ShippingAddress fields  | Conditional based on ShippingIndicator value  | If ShippingIndicator is 1, 2, 3, or 4 - then the ShippingAddress fields become required.  |  
| PurchaseDetails.Currency  | Required for message category PA.   
Conditional for message category NPA.  | The 3DS Server will validate that Purchase currency is provided for 02-NPA if requestor Authentication Indicator = 02, 03, or 80.  |  
### Authentications and Challenge Results Response[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-and-challenge-results-response "Direct link to Authentications and Challenge Results Response")  
| threeDSecureResponse Param  | Comments  |  
| --- | --- |  
| authenticationType  | This field could include the value of 80 - Information or Value-Added interaction.  |  
| authenticationValue  | This field will also be returned for message category NPA if the request's AuthenticationIndicator was set to either 83 or 84 and the response's `transStatus` is `Y`.  |  
| dsTransID  | This value also may be referred to as an XID by the Amex Safekey program.  |  
| transStatus  | The value A is only applicable to message category PA. The value I is not used by Amex SafeKey.  |  
| transStatusReason  | Additional values that may be present   
80 - PAN/Token is not eligible for Amex SafeKey.   
81 - Message version number not supported by ACS for PAN/Token.  |  
### Liability Shift[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#liability-shift-3 "Direct link to Liability Shift")
The below table outlines what to expect for liability shifts.  
| transStatus  | Meaning  | Authentication Value Present  | ECI  | Version  | Liability Holder  | Comments  |  
| --- | --- | --- | --- | --- | --- | --- |  
| Y  | Fully Authenticated  | Yes  | 05  |  2.1.0 and 2.2.0  | Issuer  | Successful Authentication  |  
| A  | Attempted Authentication  | Yes  | 06  |  2.1.0and 2.2.0  | Issuer  | Attempts response from Issuer ACS  |  
| N  | Not Authenticated  | No  | N/A  |  2.1.0 and 2.2.0  | Acquirer  | Not Authenticated. Transaction could not be authenticated and Authorization should not be attempted.  |  
| R  | Rejected  | No  | N/A  |  2.1.0 and 2.2.0  | Acquirer  | Payment Transaction rejected by Issuer. Authorization should not be attempted.  |  
| U  | Unable to Authenticate  | No  | 07  |  2.1.0 and 2.2.0  | Acquirer  | Merchant obtained and conveyed Card Member information, but authentication was not performed by ACS.  |  
| U  | Unable to Authenticate  | No  | 07  |  2.1.0 and 2.2.0  | Acquirer  | PAN or Token is not eligible for SafeKey. TransStatusReason - 80.  |  
| I  | N/A  | N/A  | N/A  | N/A  | N/A  | Not Supported by Amex  |  
## JCB - J/Secure[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#jcb---jsecure "Direct link to JCB - J/Secure")
### Authentications Request[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-request-4 "Direct link to Authentications Request")
**Rules and Validations**  
| Request Param  | Applicability  | Comments  |  
| --- | --- | --- |  
| RequestorId  | Required  | JCB requires a unique 3DS Requestor ID (threeDSRequestorID), and 3DS Requestor Name (threeDSREquestorName) be assigned to each merchant and sent in the Authentication Request (AReq).   
  
The format for this value is as follows: AcquirerBin + `MCT` + AcquirerMerchantId. That's 8 digits + `MCT ` + 15 digits, for an example value of `12345678MCT123456789123456`.  |  
| RequestorName  | Required  | JCB requires a unique 3DS Requestor ID (threeDSRequestorID), and 3DS Requestor Name (threeDSREquestorName) be assigned to each merchant and sent in the Authentication Request (AReq).   
  
This value is the Merchant Name associated with the Merchant ID at time of authentication.  |  
| MerchantDetails.CountryCode  |  2.1.0 and 2.2.0, Required for message category PA.   
Optional for message category NPA  | This field accepts an additional value. 900 - Country Unknown  |  
### Authentications Response[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-response "Direct link to Authentications Response")  
| threeDSecureResponse param  | Comments  |  
| --- | --- |  
| transStatusReason  | The version specified in request is not supported by the ACS. An ECI of 07 will be returned and the authentication value will not be present.  |  
## Cartes Bancaires - FAST'R[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#cartes-bancaires---fastr "Direct link to Cartes Bancaires - FAST'R")
### Supported Versions Response[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#supported-versions-response-2 "Direct link to Supported Versions Response")
### Authentications Request[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#authentications-request-5 "Direct link to Authentications Request")
In addition to any specific details in the Rules and Validations table below, the following data elements are **recommended** by the FAST'R by CB program to increase likelihood of a **frictionless** authentication.
  * AddressMatchIndicator
  * AccountInfo (see table below)
  * CardholderDetails.BillingAddress
  * CardholderDetails.ShippingAddress
  * CardholderDetails.Name
  * CardholderDetails.EmailAddress
  * CardholderDetails.HomePhone
  * CardholderDetails.MobilePhone
  * CardholderDetails.WorkPhone
  * MerchantDetails.RiskIndicator (see table below)
  * PriorAuthenticationInformation.PriorTransactionReference (see table below)

**Rules and Validations**  
| Request Param  | Applicability  | Comments  |  
| --- | --- | --- |  
| RequestorId  | Required  | This field should be set with the SIRET Number, either of the Merchant or of other entity for which Cardholder authentication is necessary as identified by the Cardholder when initiating the transaction.   
  
- If transaction is to be processed by a CB acquirer but NOT for a payment/enrolment with a Wallet approved by CB, then the SIRET Number of the 3DS Requestor (numeric value on 14 characters) must be provided   
- If transaction is to be processed by a CB acquirer for a payment/enrolment with a Wallet approved by CB, then the SIRET Number of the 3DS Requestor (numeric value on 14 characters) + ‘Identifiant Wallet’ of the approved Wallet (numeric value on 20 characters) must be provided,**If transaction processed by a CB acquirer NOT for a payment/enrolment with a Wallet approved by CB** :CB2A field 47 / 96 = SIRET Number of the 3DS Requestor (numeric value on 14 characters)**If transaction processed by a CB acquirer for a payment/enrolment with a Wallet approved by CB** :CB2A field 47 / 96 + CB2A field 59 / 0418 = SIRET Number of the 3DS Requestor + WalletID of the approved Wallet (numeric value on 20 characters) I**If transaction NOT processed by a CB acquirer** : Follow international scheme 3DS Requestor ID  |  
| RequestorName  | Required  | This field should be set with the name that must be displayed by the ACS in the 3-D Secure UI when it summarizes the operation for cardholder authentication (e.g. on the Challenge UI).   
  
If the merchant name field _is present_ in the request, then fill this field with the same value.   
  
If the merchant name _is not present_ in the request, then provide the commercial name of the 3DS Requestor.  |  
| AcquirerBin  | CB DS has specific provisions for Acquirer BIN if the transaction will be CB Acquired  |  **If transaction processed by a CB acquirer** : Same as in authorization request = CB2A field 32 (11 characters with a numeric value) = Acquirer BIN (6 characters) + Bank Code (5 characters)   
  
**If transaction NOT processed by a CB acquirer** : Acquirer BIN should be of the Global Network  |  
| MerchantDetails.AcquirerMerchantId  | CB DS has specific provisions for Acquirer BIN if the transaction will be CB Acquired  |  **If transaction processed by a CB acquirer** : Same as in 3DS v1 authentication requests = CB2A field 42 (15 characters blank-padded on the right) + “-” (1 character) + CB2A field 41 (8 characters blank-padded on the right) e.g. 123456789**_____**_-1236_ ____   
  
**If transaction NOT processed by a CB acquirer** : Acquirer BIN should be of the Global Network  |  
| MerchantDetails.CountryCode  |  2.1.0 and 2.2.0, Required for message category PA.   
Optional for message category NPA  | This field accepts an additional value. 900 - Country Unknown  |  
| AccountInfo.PurchaseAccount  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 0-9999 (9999 if more than 9999 transactions)  |  
| AccountInfo.PaymentAccountAgeIndicator  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 01, 02, 03, 04 and 05  |  
| AccountInfo.ProvisioningAttemptsPerDay  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 0-999 (999 if more than 999 transactions)  |  
| AccountInfo.ShippingAddressUsageIndicator  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 01, 02, 03 and 04  |  
| AccountInfo.ShippingNameIndicator  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 01 and 02  |  
| AccountInfo.SuspiciousAccountActivity  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 01 and 02  |  
| AccountInfo.TransactionsPerDay  | CB DS has specific provisions for values within the Account Info sub-elements. Rather than recommended, this field is optional.  | Allowed values: 0-999 (999 if more than 999 transactions).  |  
| AccountInfo.TransactionsPerYear  | CB DS has specific provisions for values within the Account Info sub-elements  | Allowed values: 0-999 (999 if more than 999 transactions)  |  
| BrowserInfo.IpAddress  | Element is _required_ if Device Channel is BRW and transaction processed by a CB acquirer, else _recommended_ for frictionless if Device Channel = BRW and transaction _not_ processed by a CB acquirer.  | If transaction submitted via a CB Acquirer and Device Channel is BRW, then the CB DS will validate as a required field.   
  
Otherwise validated as a recommended field for frictionless if Device Channel is BRW and transaction is not processed by a CB acquirer.  |  
| MerchantDetails.RiskIndicator  | Recommended for frictionless authentication.  | Additional values accepted.   
80 - pick up n go delivery.   
81 - locker delivery or other automated pick-up.  |  
| ChallengeIndicator  | See [Liability Shift](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#cartes-bancaires-liability-shift)  | Additional value is accepted that is applicable to message category PA. 90 - CB Scoring Data.  |  
| PriorAuthenticationInformation.PriorTransactionReference  | Recommended for frictionless authentication.  | If transaction is to be processed by a CB acquirer for a payment with a Wallet approved by CB, then the value to be provided is the ACS Transaction ID of the 3DS operation performed to authenticate the enrolment on the approved Wallet  |  
### Liability Shift[​](https://documentation.ixopay.com/modules/docs/tokenex/3ds-brand-specific-guidelines#cartes-bancaires-liability-shift "Direct link to Liability Shift")
The liability for a fraudulent transaction is shifted to the merchant based off the authentications request `ChallengeIndicator` value.  
| Authentication Request ChallengeIndicator  | If the Issuer applies frictionless authentication  | If the Issuer applies a challenge  |  
| --- | --- | --- |  
| Merchant asks for frictionless authentication  | Liability holder is the merchant if the authentications request's ChallengeIndicator had the value of 2.  | Liability holder is Issuer.  |  
| Merchant requests a challenge  | Liability holder is Issuer.  | Liability holder is Issuer.  |  
| Merchant has no preference  | Liability holder is Issuer.  | Liability holder is Issuer.  |