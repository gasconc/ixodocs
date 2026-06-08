---
title: Get Kount Risk Result
summary: ' Fraud Solutions  Get Kount Risk Result'
tags:
- tokenex-request-headers-https-documentation-ixopay-com-modules-docs-tokenex-getkountriskresult-tokenex-request-headers-direct-link-tokenex-request-headers
- request-parameters-https-documentation-ixopay-com-modules-docs-tokenex-getkountriskresult-request-parameters-direct-link-request-parameters
- api
- tokenex
- ixopay
- authorization
- transaction
- merchant
source_url: https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult
portal: ixopay-modules
updated: '2026-06-08'
related: []
---

* Fraud Solutions
  * [Kount](https://documentation.ixopay.com/modules/docs/tokenex/fraud-prevention-services)
  * Get Kount Risk Result

# Get Kount Risk Result
**URI:** 
## TokenEx Request Headers[​](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult#tokenex-request-headers "Direct link to TokenEx Request Headers")  
| HTTP Request Header  | Description  |  
| --- | --- |  
| Tx-TokenEx-Id  | ID from configuration menu in client portal  |  
| Tx-ApiKey  | API key from configuration menu in client portal  |  
| Tx-Detokenize  | True/False. Detokenizes TokenEx token in **Data** field within request and creates a KHash for PAN  |  
## Request Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult#request-parameters "Direct link to Request Parameters")  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| KountVersion*  | string  | Specifies version of Kount Risk Inquiry Service. Defaults to 7.10  |  
| MerchantId*  | string  | Merchant ID assigned to the merchant by Kount.  |  
| TransactionSite*  | string  | Website identifier of where order originated.  |  
| IpAddress*  | string  | Dotted decimal IPv4 address that the merchant sees coming from the customer.  |  
| MerchantOrderNumber  | string  | Merchant’s Order Number  |  
| SessionId  | string  | Unique Session ID. Must be unique over a 30-day span.  |  
| TransactionRiskAnalysisFlag  | string  | Transaction Risk Analysis (TRA) Flag.   
  
Valid values: _Y_ , _N_  |  
| Data  | string  | The TokenEx token representing the PAN, or the KHash of the PAN.  |  
| LastFour*  | string  | Last 4 numbers of the PAN  |  
| Amount*  | int64  | Total amount in currency submitted in lowest currency factor. e.g. USD = pennies($1.00 = 100).   
  
TOTL must be a natural number including 0.  |  
| AuthorizationStatus  | string  | Authorization Status returned to merchant from processor.   
  
A: Authorized   
D: Declined  |  
| Currency*  | string  | ISO 4217 currency code (3-character)  |  
| AddressVerificationSystemStreet  | string  | Address Verification System Street verification response returned to merchant from processor.   
  
M: Match   
N: No Match   
X: Unsupported or Unavailable  |  
| AddressVerificationSystemZipCode  | string  | Address Verification System Zip Code verification response returned to merchant from processor.   
  
M: Match   
N: No Match   
X: Unsupported or Unavailable  |  
| CardVerificationValue  | string  | Card Verification Value response returned to merchant from processor.   
  
M: Match   
N: No Match   
X: Unsupported or Unavailable  |  
| BillingEmailAddress*  | string  | This is the email address submitted by the customer.   
  
If the customer does not provide an email address, _`noemail@kount.com`_must be submitted.  |  
| BillingName  | string  | Name submitted with the order  |  
| BillingStreetAddress1  | string  | Billing street address - Line 1  |  
| BillingStreetAddress2  | string  | Billing street address - Line 2  |  
| BillingCity  | string  | Billing address - City  |  
| BillingState  | string  | Billing address - State/Province  |  
| BillingPostalCode  | string  | Billing address - Postal Code  |  
| BillingCountryCode  | string  | Billing address - Country  |  
| BillingPhoneNumber  | string  | Bill-to Phone Number  |  
| ShippingStreetAddress1  | string  | Shipping street address - Line 1  |  
| ShippingStreetAddress2  | string  | Shipping street address - Line 2  |  
| ShippingCity  | string  | Shipping address - City  |  
| ShippingCountryCode  | string  | Shipping address - Country  |  
| ShippingEmailAddress  | string  | Shipping address - Email address of recipient  |  
| ShippingName  | string  | Shipping address - Name of recipient  |  
| ShippingPostalCode  | string  | Shipping address - Postal Code  |  
| ShippingPhoneNumber  | string  | Ship-to Phone Number  |  
| ShippingState  | string  | Shipping address - State/Province  |  
| ShippingType  | string  | Shipping type. The following nomenclature is expected for shipping types to be passed to Kount:   
  
Same Day = _SD_   
Next Day = _ND_   
Second Day = _2D_   
Standard = _ST_  |  
| Cash  |   | Total fenceable value of goods sold.  |  
| Epoch  | string  | This is the timestamp associated with the creation of a user ID and is expressed as a number such as 1422377956.   
  
The timestamp value represents the number of seconds elapsed since midnight 01/01/1970.   
  
[Reference](http://www.epochconverter.com/)  |  
| DateOfBirth  | string  | DoB of the customer  |  
| Gender  | string  | M or F  |  
| ConsumerAccountNumber  | string  | Merchant assigned account number for consumer  |  
| UserAgent  | string  | Customer User-Agent HTTP header  |  
| Products*  | Product[]  | An array of Product objects (see table below)  |  
| UserDefinedFields  | []  | A list of key value pairs of user defined fields. The UDFs must be set up in your Kount account. NOTE: Validation occurs within Kount's system. The TokenEx FraudServices API does not validate these values.  |  
_Product_ type:  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| Type  | string  | High level or generalized description of the item added to the shopping cart.   
  
This value should be free from any markup or Unicode values. This value should be passed as plain text.  |  
| Description  | string  | Specific description of the item being purchased.  |  
| Quantity  | int64  | Quantity of the item being purchased.  |  
| Price  | int64  | The price of one of these items. Must be a natural number including 0.  |  
| Sku  | string  | SKU for an item.   
  
This value should be free from any markup or Unicode values. This value should be passed as plain text.  |  
Example payload
```

{  

  "billingEmailAddress": "<email_address@domain.com>",  

  "data": "<tokenex_token>",  

  "amount": 10000,  

  "currency": "USD",  

  "ipAddress": "<end.consumer.IP.Address>",  

  "kountVersion": "0720",  

  "lastFour": "1111",  

  "merchantId": "<kount_merchant_ID>",  

  "transactionSite": "DEFAULT",  

  "MerchantOrderNumber": "<order_number>",  

  "AuthorizationStatus": "A",  

  "BillingName": "Billing Name",  

  "BillingStreetAddress1": "917 S Lusk St",  

  "BillingStreetAddress2": "Suite 300",  

  "BillingCity": "Boise",  

  "BillingState": "ID",  

  "BillingPostalCode": "83706",  

  "BillingCountryCode": "US",  

  "BillingPhoneNumber": "5555555555",  

  "ShippingStreetAddress1": "917 S Lusk St",  

  "ShippingStreetAddress2": "Suite 300",  

  "ShippingCity": "Boise",  

  "ShippingCountryCode": "US",  

  "ShippingPostalCode": "83706",  

  "ShippingState": "ID",  

  "Products": [  

    {  

      "Type": "Trinket",  

      "Description": "Doodad",  

      "Quantity": 10,  

      "Price": 10,  

      "Sku": "tgj6dneq"  

    }  

  ],  

  "UserDefinedFields": {  

    "myUDFLabel": "myUDFValue"  

  }  

}  

```## Response Parameters[​](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult#response-parameters "Direct link to Response Parameters")  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| Provider  | string  | "Kount"  |  
| Outcome  | string  | 0 = The outcome could not be determined. See RawResponse.   
1 = Unknown outcome   
2 = Approved   
3 = Declined   
4 = Escalate   
5 = Review   
6 = Pending  |  
| RawResponse  | string  | The raw payload returned from Kount RIS  |  
| TransactionId  | string  | Alphanumeric transaction id generated by Kount.  |  
| Auto  | string  | (A)pprove, (R)eview, or (D)ecline.  |  
| OmniScore  | float  | Indicator of a transaction’s safety, ranging from **1** (unsafe) to **99.9** (safe)  |  
| SessionId  | string  | The session ID passed into the request  |  
Example response
```

{  

  "success": true,  

  "referenceNumber": "11221514057058665",  

  "message": "Risk inquiry successful",  

  "thirdPartyStatusCode": "200",  

  "provider": "Kount",  

  "outcome": 2,  

  "auto": "A",  

  "omniScore": "78.5",  

  "transactionId": "76JG032JT7CD",  

  "sessionId": "8e277b5f-152f-4b3f-a803-5102378fc7ea",  

  "rawResponse": "{\"VERS\":\"0700\",\"MODE\":\"Q\",\"TRAN\":\"76JG032JT7CD\",\"MERC\":\"888889\",\"SESS\":\"f2d209d0d4cf4c37b0481ff3adcbde00\",\"ORDR\":\"ORDR-1567540565\",\"AUTO\":\"A\",\"SCOR\":\"28\",\"GEOX\":\"US\",\"BRND\":\"VISA\",\"REGN\":\"US_ID\",\"NETW\":\"N\",\"KAPT\":\"Y\",\"CARDS\":\"1\",\"DEVICES\":\"1\",\"EMAILS\":\"1\",\"VELO\":\"0\",\"VMAX\":\"0\",\"SITE\":\"DEFAULT\",\"DEVICE_LAYERS\":\"DF651ACF30..99CF09F417.E3D16F2CB7.061826EF2B\",\"FINGERPRINT\":\"290D1C0172364AADAC25D9FD0B13D946\",\"TIMEZONE\":\"360\",\"LOCALTIME\":\"2019-09-03 13:56\",\"REGION\":\"US_ID\",\"COUNTRY\":\"US\",\"PROXY\":\"N\",\"JAVASCRIPT\":\"Y\",\"FLASH\":\"N\",\"COOKIES\":\"Y\",\"HTTP_COUNTRY\":\"US\",\"LANGUAGE\":\"EN\",\"MOBILE_DEVICE\":\"N\",\"MOBILE_TYPE\":null,\"MOBILE_FORWARDER\":\"N\",\"VOICE_DEVICE\":\"N\",\"PC_REMOTE\":\"N\",\"RULES_TRIGGERED\":0,\"COUNTERS_TRIGGERED\":0,\"REASON_CODE\":null,\"DDFS\":\"2019-08-22\",\"DSR\":\"1050x1680\",\"UAS\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36\",\"BROWSER\":\"Chrome 76.0.3809.100\",\"OS\":\"Mac OS X 10.14.6\",\"PIP_IPAD\":null,\"PIP_LAT\":null,\"PIP_LON\":null,\"PIP_COUNTRY\":null,\"PIP_REGION\":null,\"PIP_CITY\":null,\"PIP_ORG\":null,\"IP_IPAD\":\"208.75.113.3\",\"IP_LAT\":\"43.6337\",\"IP_LON\":\"-116.2004\",\"IP_COUNTRY\":\"US\",\"IP_REGION\":\"Idaho\",\"IP_CITY\":\"Boise\",\"IP_ORG\":\"UNKNOWN\",\"OMNISCORE\":54,\"3D_SECURE_MERCHANT_RESPONSE\":\"Challenge\",\"WARNING_COUNT\":0}"  

}  

```
```

{  

  "billingEmailAddress": "<email_address@domain.com>",  

  "data": "<tokenex_token>",  

  "amount": 10000,  

  "currency": "USD",  

  "ipAddress": "<end.consumer.IP.Address>",  

  "kountVersion": "0720",  

  "lastFour": "1111",  

  "merchantId": "<kount_merchant_ID>",  

  "transactionSite": "DEFAULT",  

  "MerchantOrderNumber": "<order_number>",  

  "AuthorizationStatus": "A",  

  "BillingName": "Billing Name",  

  "BillingStreetAddress1": "917 S Lusk St",  

  "BillingStreetAddress2": "Suite 300",  

  "BillingCity": "Boise",  

  "BillingState": "ID",  

  "BillingPostalCode": "83706",  

  "BillingCountryCode": "US",  

  "BillingPhoneNumber": "5555555555",  

  "ShippingStreetAddress1": "917 S Lusk St",  

  "ShippingStreetAddress2": "Suite 300",  

  "ShippingCity": "Boise",  

  "ShippingCountryCode": "US",  

  "ShippingPostalCode": "83706",  

  "ShippingState": "ID",  

  "Products": [  

    {  

      "Type": "Trinket",  

      "Description": "Doodad",  

      "Quantity": 10,  

      "Price": 10,  

      "Sku": "tgj6dneq"  

    }  

  ],  

  "UserDefinedFields": {  

    "myUDFLabel": "myUDFValue"  

  }  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "11221514057058665",  

  "message": "Risk inquiry successful",  

  "thirdPartyStatusCode": "200",  

  "provider": "Kount",  

  "outcome": 2,  

  "auto": "A",  

  "omniScore": "78.5",  

  "transactionId": "76JG032JT7CD",  

  "sessionId": "8e277b5f-152f-4b3f-a803-5102378fc7ea",  

  "rawResponse": "{\"VERS\":\"0700\",\"MODE\":\"Q\",\"TRAN\":\"76JG032JT7CD\",\"MERC\":\"888889\",\"SESS\":\"f2d209d0d4cf4c37b0481ff3adcbde00\",\"ORDR\":\"ORDR-1567540565\",\"AUTO\":\"A\",\"SCOR\":\"28\",\"GEOX\":\"US\",\"BRND\":\"VISA\",\"REGN\":\"US_ID\",\"NETW\":\"N\",\"KAPT\":\"Y\",\"CARDS\":\"1\",\"DEVICES\":\"1\",\"EMAILS\":\"1\",\"VELO\":\"0\",\"VMAX\":\"0\",\"SITE\":\"DEFAULT\",\"DEVICE_LAYERS\":\"DF651ACF30..99CF09F417.E3D16F2CB7.061826EF2B\",\"FINGERPRINT\":\"290D1C0172364AADAC25D9FD0B13D946\",\"TIMEZONE\":\"360\",\"LOCALTIME\":\"2019-09-03 13:56\",\"REGION\":\"US_ID\",\"COUNTRY\":\"US\",\"PROXY\":\"N\",\"JAVASCRIPT\":\"Y\",\"FLASH\":\"N\",\"COOKIES\":\"Y\",\"HTTP_COUNTRY\":\"US\",\"LANGUAGE\":\"EN\",\"MOBILE_DEVICE\":\"N\",\"MOBILE_TYPE\":null,\"MOBILE_FORWARDER\":\"N\",\"VOICE_DEVICE\":\"N\",\"PC_REMOTE\":\"N\",\"RULES_TRIGGERED\":0,\"COUNTERS_TRIGGERED\":0,\"REASON_CODE\":null,\"DDFS\":\"2019-08-22\",\"DSR\":\"1050x1680\",\"UAS\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36\",\"BROWSER\":\"Chrome 76.0.3809.100\",\"OS\":\"Mac OS X 10.14.6\",\"PIP_IPAD\":null,\"PIP_LAT\":null,\"PIP_LON\":null,\"PIP_COUNTRY\":null,\"PIP_REGION\":null,\"PIP_CITY\":null,\"PIP_ORG\":null,\"IP_IPAD\":\"208.75.113.3\",\"IP_LAT\":\"43.6337\",\"IP_LON\":\"-116.2004\",\"IP_COUNTRY\":\"US\",\"IP_REGION\":\"Idaho\",\"IP_CITY\":\"Boise\",\"IP_ORG\":\"UNKNOWN\",\"OMNISCORE\":54,\"3D_SECURE_MERCHANT_RESPONSE\":\"Challenge\",\"WARNING_COUNT\":0}"  

}  

```
```

{  

  "billingEmailAddress": "<email_address@domain.com>",  

  "data": "<tokenex_token>",  

  "amount": 10000,  

  "currency": "USD",  

  "ipAddress": "<end.consumer.IP.Address>",  

  "kountVersion": "0720",  

  "lastFour": "1111",  

  "merchantId": "<kount_merchant_ID>",  

  "transactionSite": "DEFAULT",  

  "MerchantOrderNumber": "<order_number>",  

  "AuthorizationStatus": "A",  

  "BillingName": "Billing Name",  

  "BillingStreetAddress1": "917 S Lusk St",  

  "BillingStreetAddress2": "Suite 300",  

  "BillingCity": "Boise",  

  "BillingState": "ID",  

  "BillingPostalCode": "83706",  

  "BillingCountryCode": "US",  

  "BillingPhoneNumber": "5555555555",  

  "ShippingStreetAddress1": "917 S Lusk St",  

  "ShippingStreetAddress2": "Suite 300",  

  "ShippingCity": "Boise",  

  "ShippingCountryCode": "US",  

  "ShippingPostalCode": "83706",  

  "ShippingState": "ID",  

  "Products": [  

    {  

      "Type": "Trinket",  

      "Description": "Doodad",  

      "Quantity": 10,  

      "Price": 10,  

      "Sku": "tgj6dneq"  

    }  

  ],  

  "UserDefinedFields": {  

    "myUDFLabel": "myUDFValue"  

  }  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "11221514057058665",  

  "message": "Risk inquiry successful",  

  "thirdPartyStatusCode": "200",  

  "provider": "Kount",  

  "outcome": 2,  

  "auto": "A",  

  "omniScore": "78.5",  

  "transactionId": "76JG032JT7CD",  

  "sessionId": "8e277b5f-152f-4b3f-a803-5102378fc7ea",  

  "rawResponse": "{\"VERS\":\"0700\",\"MODE\":\"Q\",\"TRAN\":\"76JG032JT7CD\",\"MERC\":\"888889\",\"SESS\":\"f2d209d0d4cf4c37b0481ff3adcbde00\",\"ORDR\":\"ORDR-1567540565\",\"AUTO\":\"A\",\"SCOR\":\"28\",\"GEOX\":\"US\",\"BRND\":\"VISA\",\"REGN\":\"US_ID\",\"NETW\":\"N\",\"KAPT\":\"Y\",\"CARDS\":\"1\",\"DEVICES\":\"1\",\"EMAILS\":\"1\",\"VELO\":\"0\",\"VMAX\":\"0\",\"SITE\":\"DEFAULT\",\"DEVICE_LAYERS\":\"DF651ACF30..99CF09F417.E3D16F2CB7.061826EF2B\",\"FINGERPRINT\":\"290D1C0172364AADAC25D9FD0B13D946\",\"TIMEZONE\":\"360\",\"LOCALTIME\":\"2019-09-03 13:56\",\"REGION\":\"US_ID\",\"COUNTRY\":\"US\",\"PROXY\":\"N\",\"JAVASCRIPT\":\"Y\",\"FLASH\":\"N\",\"COOKIES\":\"Y\",\"HTTP_COUNTRY\":\"US\",\"LANGUAGE\":\"EN\",\"MOBILE_DEVICE\":\"N\",\"MOBILE_TYPE\":null,\"MOBILE_FORWARDER\":\"N\",\"VOICE_DEVICE\":\"N\",\"PC_REMOTE\":\"N\",\"RULES_TRIGGERED\":0,\"COUNTERS_TRIGGERED\":0,\"REASON_CODE\":null,\"DDFS\":\"2019-08-22\",\"DSR\":\"1050x1680\",\"UAS\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36\",\"BROWSER\":\"Chrome 76.0.3809.100\",\"OS\":\"Mac OS X 10.14.6\",\"PIP_IPAD\":null,\"PIP_LAT\":null,\"PIP_LON\":null,\"PIP_COUNTRY\":null,\"PIP_REGION\":null,\"PIP_CITY\":null,\"PIP_ORG\":null,\"IP_IPAD\":\"208.75.113.3\",\"IP_LAT\":\"43.6337\",\"IP_LON\":\"-116.2004\",\"IP_COUNTRY\":\"US\",\"IP_REGION\":\"Idaho\",\"IP_CITY\":\"Boise\",\"IP_ORG\":\"UNKNOWN\",\"OMNISCORE\":54,\"3D_SECURE_MERCHANT_RESPONSE\":\"Challenge\",\"WARNING_COUNT\":0}"  

}  

```
```

{  

  "billingEmailAddress": "<email_address@domain.com>",  

  "data": "<tokenex_token>",  

  "amount": 10000,  

  "currency": "USD",  

  "ipAddress": "<end.consumer.IP.Address>",  

  "kountVersion": "0720",  

  "lastFour": "1111",  

  "merchantId": "<kount_merchant_ID>",  

  "transactionSite": "DEFAULT",  

  "MerchantOrderNumber": "<order_number>",  

  "AuthorizationStatus": "A",  

  "BillingName": "Billing Name",  

  "BillingStreetAddress1": "917 S Lusk St",  

  "BillingStreetAddress2": "Suite 300",  

  "BillingCity": "Boise",  

  "BillingState": "ID",  

  "BillingPostalCode": "83706",  

  "BillingCountryCode": "US",  

  "BillingPhoneNumber": "5555555555",  

  "ShippingStreetAddress1": "917 S Lusk St",  

  "ShippingStreetAddress2": "Suite 300",  

  "ShippingCity": "Boise",  

  "ShippingCountryCode": "US",  

  "ShippingPostalCode": "83706",  

  "ShippingState": "ID",  

  "Products": [  

    {  

      "Type": "Trinket",  

      "Description": "Doodad",  

      "Quantity": 10,  

      "Price": 10,  

      "Sku": "tgj6dneq"  

    }  

  ],  

  "UserDefinedFields": {  

    "myUDFLabel": "myUDFValue"  

  }  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "11221514057058665",  

  "message": "Risk inquiry successful",  

  "thirdPartyStatusCode": "200",  

  "provider": "Kount",  

  "outcome": 2,  

  "auto": "A",  

  "omniScore": "78.5",  

  "transactionId": "76JG032JT7CD",  

  "sessionId": "8e277b5f-152f-4b3f-a803-5102378fc7ea",  

  "rawResponse": "{\"VERS\":\"0700\",\"MODE\":\"Q\",\"TRAN\":\"76JG032JT7CD\",\"MERC\":\"888889\",\"SESS\":\"f2d209d0d4cf4c37b0481ff3adcbde00\",\"ORDR\":\"ORDR-1567540565\",\"AUTO\":\"A\",\"SCOR\":\"28\",\"GEOX\":\"US\",\"BRND\":\"VISA\",\"REGN\":\"US_ID\",\"NETW\":\"N\",\"KAPT\":\"Y\",\"CARDS\":\"1\",\"DEVICES\":\"1\",\"EMAILS\":\"1\",\"VELO\":\"0\",\"VMAX\":\"0\",\"SITE\":\"DEFAULT\",\"DEVICE_LAYERS\":\"DF651ACF30..99CF09F417.E3D16F2CB7.061826EF2B\",\"FINGERPRINT\":\"290D1C0172364AADAC25D9FD0B13D946\",\"TIMEZONE\":\"360\",\"LOCALTIME\":\"2019-09-03 13:56\",\"REGION\":\"US_ID\",\"COUNTRY\":\"US\",\"PROXY\":\"N\",\"JAVASCRIPT\":\"Y\",\"FLASH\":\"N\",\"COOKIES\":\"Y\",\"HTTP_COUNTRY\":\"US\",\"LANGUAGE\":\"EN\",\"MOBILE_DEVICE\":\"N\",\"MOBILE_TYPE\":null,\"MOBILE_FORWARDER\":\"N\",\"VOICE_DEVICE\":\"N\",\"PC_REMOTE\":\"N\",\"RULES_TRIGGERED\":0,\"COUNTERS_TRIGGERED\":0,\"REASON_CODE\":null,\"DDFS\":\"2019-08-22\",\"DSR\":\"1050x1680\",\"UAS\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36\",\"BROWSER\":\"Chrome 76.0.3809.100\",\"OS\":\"Mac OS X 10.14.6\",\"PIP_IPAD\":null,\"PIP_LAT\":null,\"PIP_LON\":null,\"PIP_COUNTRY\":null,\"PIP_REGION\":null,\"PIP_CITY\":null,\"PIP_ORG\":null,\"IP_IPAD\":\"208.75.113.3\",\"IP_LAT\":\"43.6337\",\"IP_LON\":\"-116.2004\",\"IP_COUNTRY\":\"US\",\"IP_REGION\":\"Idaho\",\"IP_CITY\":\"Boise\",\"IP_ORG\":\"UNKNOWN\",\"OMNISCORE\":54,\"3D_SECURE_MERCHANT_RESPONSE\":\"Challenge\",\"WARNING_COUNT\":0}"  

}  

```  * [TokenEx Request Headers](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult#tokenex-request-headers)
  * [Request Parameters](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult#request-parameters)
  * [Response Parameters](https://documentation.ixopay.com/modules/docs/tokenex/getkountriskresult#response-parameters)
```

{  

  "billingEmailAddress": "<email_address@domain.com>",  

  "data": "<tokenex_token>",  

  "amount": 10000,  

  "currency": "USD",  

  "ipAddress": "<end.consumer.IP.Address>",  

  "kountVersion": "0720",  

  "lastFour": "1111",  

  "merchantId": "<kount_merchant_ID>",  

  "transactionSite": "DEFAULT",  

  "MerchantOrderNumber": "<order_number>",  

  "AuthorizationStatus": "A",  

  "BillingName": "Billing Name",  

  "BillingStreetAddress1": "917 S Lusk St",  

  "BillingStreetAddress2": "Suite 300",  

  "BillingCity": "Boise",  

  "BillingState": "ID",  

  "BillingPostalCode": "83706",  

  "BillingCountryCode": "US",  

  "BillingPhoneNumber": "5555555555",  

  "ShippingStreetAddress1": "917 S Lusk St",  

  "ShippingStreetAddress2": "Suite 300",  

  "ShippingCity": "Boise",  

  "ShippingCountryCode": "US",  

  "ShippingPostalCode": "83706",  

  "ShippingState": "ID",  

  "Products": [  

    {  

      "Type": "Trinket",  

      "Description": "Doodad",  

      "Quantity": 10,  

      "Price": 10,  

      "Sku": "tgj6dneq"  

    }  

  ],  

  "UserDefinedFields": {  

    "myUDFLabel": "myUDFValue"  

  }  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "11221514057058665",  

  "message": "Risk inquiry successful",  

  "thirdPartyStatusCode": "200",  

  "provider": "Kount",  

  "outcome": 2,  

  "auto": "A",  

  "omniScore": "78.5",  

  "transactionId": "76JG032JT7CD",  

  "sessionId": "8e277b5f-152f-4b3f-a803-5102378fc7ea",  

  "rawResponse": "{\"VERS\":\"0700\",\"MODE\":\"Q\",\"TRAN\":\"76JG032JT7CD\",\"MERC\":\"888889\",\"SESS\":\"f2d209d0d4cf4c37b0481ff3adcbde00\",\"ORDR\":\"ORDR-1567540565\",\"AUTO\":\"A\",\"SCOR\":\"28\",\"GEOX\":\"US\",\"BRND\":\"VISA\",\"REGN\":\"US_ID\",\"NETW\":\"N\",\"KAPT\":\"Y\",\"CARDS\":\"1\",\"DEVICES\":\"1\",\"EMAILS\":\"1\",\"VELO\":\"0\",\"VMAX\":\"0\",\"SITE\":\"DEFAULT\",\"DEVICE_LAYERS\":\"DF651ACF30..99CF09F417.E3D16F2CB7.061826EF2B\",\"FINGERPRINT\":\"290D1C0172364AADAC25D9FD0B13D946\",\"TIMEZONE\":\"360\",\"LOCALTIME\":\"2019-09-03 13:56\",\"REGION\":\"US_ID\",\"COUNTRY\":\"US\",\"PROXY\":\"N\",\"JAVASCRIPT\":\"Y\",\"FLASH\":\"N\",\"COOKIES\":\"Y\",\"HTTP_COUNTRY\":\"US\",\"LANGUAGE\":\"EN\",\"MOBILE_DEVICE\":\"N\",\"MOBILE_TYPE\":null,\"MOBILE_FORWARDER\":\"N\",\"VOICE_DEVICE\":\"N\",\"PC_REMOTE\":\"N\",\"RULES_TRIGGERED\":0,\"COUNTERS_TRIGGERED\":0,\"REASON_CODE\":null,\"DDFS\":\"2019-08-22\",\"DSR\":\"1050x1680\",\"UAS\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36\",\"BROWSER\":\"Chrome 76.0.3809.100\",\"OS\":\"Mac OS X 10.14.6\",\"PIP_IPAD\":null,\"PIP_LAT\":null,\"PIP_LON\":null,\"PIP_COUNTRY\":null,\"PIP_REGION\":null,\"PIP_CITY\":null,\"PIP_ORG\":null,\"IP_IPAD\":\"208.75.113.3\",\"IP_LAT\":\"43.6337\",\"IP_LON\":\"-116.2004\",\"IP_COUNTRY\":\"US\",\"IP_REGION\":\"Idaho\",\"IP_CITY\":\"Boise\",\"IP_ORG\":\"UNKNOWN\",\"OMNISCORE\":54,\"3D_SECURE_MERCHANT_RESPONSE\":\"Challenge\",\"WARNING_COUNT\":0}"  

}  

```
```

{  

  "billingEmailAddress": "<email_address@domain.com>",  

  "data": "<tokenex_token>",  

  "amount": 10000,  

  "currency": "USD",  

  "ipAddress": "<end.consumer.IP.Address>",  

  "kountVersion": "0720",  

  "lastFour": "1111",  

  "merchantId": "<kount_merchant_ID>",  

  "transactionSite": "DEFAULT",  

  "MerchantOrderNumber": "<order_number>",  

  "AuthorizationStatus": "A",  

  "BillingName": "Billing Name",  

  "BillingStreetAddress1": "917 S Lusk St",  

  "BillingStreetAddress2": "Suite 300",  

  "BillingCity": "Boise",  

  "BillingState": "ID",  

  "BillingPostalCode": "83706",  

  "BillingCountryCode": "US",  

  "BillingPhoneNumber": "5555555555",  

  "ShippingStreetAddress1": "917 S Lusk St",  

  "ShippingStreetAddress2": "Suite 300",  

  "ShippingCity": "Boise",  

  "ShippingCountryCode": "US",  

  "ShippingPostalCode": "83706",  

  "ShippingState": "ID",  

  "Products": [  

    {  

      "Type": "Trinket",  

      "Description": "Doodad",  

      "Quantity": 10,  

      "Price": 10,  

      "Sku": "tgj6dneq"  

    }  

  ],  

  "UserDefinedFields": {  

    "myUDFLabel": "myUDFValue"  

  }  

}  

```
```

{  

  "success": true,  

  "referenceNumber": "11221514057058665",  

  "message": "Risk inquiry successful",  

  "thirdPartyStatusCode": "200",  

  "provider": "Kount",  

  "outcome": 2,  

  "auto": "A",  

  "omniScore": "78.5",  

  "transactionId": "76JG032JT7CD",  

  "sessionId": "8e277b5f-152f-4b3f-a803-5102378fc7ea",  

  "rawResponse": "{\"VERS\":\"0700\",\"MODE\":\"Q\",\"TRAN\":\"76JG032JT7CD\",\"MERC\":\"888889\",\"SESS\":\"f2d209d0d4cf4c37b0481ff3adcbde00\",\"ORDR\":\"ORDR-1567540565\",\"AUTO\":\"A\",\"SCOR\":\"28\",\"GEOX\":\"US\",\"BRND\":\"VISA\",\"REGN\":\"US_ID\",\"NETW\":\"N\",\"KAPT\":\"Y\",\"CARDS\":\"1\",\"DEVICES\":\"1\",\"EMAILS\":\"1\",\"VELO\":\"0\",\"VMAX\":\"0\",\"SITE\":\"DEFAULT\",\"DEVICE_LAYERS\":\"DF651ACF30..99CF09F417.E3D16F2CB7.061826EF2B\",\"FINGERPRINT\":\"290D1C0172364AADAC25D9FD0B13D946\",\"TIMEZONE\":\"360\",\"LOCALTIME\":\"2019-09-03 13:56\",\"REGION\":\"US_ID\",\"COUNTRY\":\"US\",\"PROXY\":\"N\",\"JAVASCRIPT\":\"Y\",\"FLASH\":\"N\",\"COOKIES\":\"Y\",\"HTTP_COUNTRY\":\"US\",\"LANGUAGE\":\"EN\",\"MOBILE_DEVICE\":\"N\",\"MOBILE_TYPE\":null,\"MOBILE_FORWARDER\":\"N\",\"VOICE_DEVICE\":\"N\",\"PC_REMOTE\":\"N\",\"RULES_TRIGGERED\":0,\"COUNTERS_TRIGGERED\":0,\"REASON_CODE\":null,\"DDFS\":\"2019-08-22\",\"DSR\":\"1050x1680\",\"UAS\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36\",\"BROWSER\":\"Chrome 76.0.3809.100\",\"OS\":\"Mac OS X 10.14.6\",\"PIP_IPAD\":null,\"PIP_LAT\":null,\"PIP_LON\":null,\"PIP_COUNTRY\":null,\"PIP_REGION\":null,\"PIP_CITY\":null,\"PIP_ORG\":null,\"IP_IPAD\":\"208.75.113.3\",\"IP_LAT\":\"43.6337\",\"IP_LON\":\"-116.2004\",\"IP_COUNTRY\":\"US\",\"IP_REGION\":\"Idaho\",\"IP_CITY\":\"Boise\",\"IP_ORG\":\"UNKNOWN\",\"OMNISCORE\":54,\"3D_SECURE_MERCHANT_RESPONSE\":\"Challenge\",\"WARNING_COUNT\":0}"  

}  

```