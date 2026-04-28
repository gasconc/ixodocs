---
title: External Risk
summary: ' External Risk'
tags:
- forter-external-risk-adapter-https-documentation-ixopay-com-adapters-external-risk-forter-external-risk-adapter-direct-link-forter-external-risk-adapter
- forter-external-risk-check-additional-extra-data-https-documentation-ixopay-com-adapters-external-risk-forter-external-risk-check-additional-extra-data-direct-link-forter-external-risk-check-additional-extra-data
- fraudnet-external-risk-adapter-https-documentation-ixopay-com-adapters-external-risk-fraudnet-external-risk-adapter-direct-link-fraudnet-external-risk-adapter
- fraudnet-external-risk-check-additional-extra-data-https-documentation-ixopay-com-adapters-external-risk-fraudnet-external-risk-check-additional-extra-data-direct-link-fraudnet-external-risk-check-additional-extra-data
- api
- json
- ixopay
- payment-gateway
- credit-card
- transaction
source_url: https://documentation.ixopay.com/adapters/external-risk
portal: ixopay-dev
updated: '2026-04-28'
related: []
---

* External Risk

# External Risk
This page provides an overview of the payments methods provided by the External Risk adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating External Risk within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
## Forter External Risk Adapter[​](https://documentation.ixopay.com/adapters/external-risk#forter-external-risk-adapter "Direct link to Forter External Risk Adapter")
### Forter External Risk Check additional extra data[​](https://documentation.ixopay.com/adapters/external-risk#forter-external-risk-check-additional-extra-data "Direct link to Forter External Risk Check additional extra data")
Those extra data fields are mapped to the corresponding Forter Validation Request Parameters: 
#### Customer Extra Data[​](https://documentation.ixopay.com/adapters/external-risk#customer-extra-data "Direct link to Customer Extra Data")
> Example
```

{  

  "customer": {  

    "identification": "c0001",  

    "extraData": {  

      "FORTER_CUSTOMER_LAST_LOGINIP": "203.12.55.12",  

      "FORTER_CUSTOMER_BILLING_ADDRESS_TYPE": "HOME"  

    }  

  }  

}  

```
  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
| **`FORTER_CUSTOMER_PAST_ORDERS_COUNT`** |  optional integer  | 0  |  
| **`FORTER_CUSTOMER_PAST_ORDERS_SUM_USD`** |  optional decmimal  | 0.00  |  
| **`FORTER_CUSTOMER_LAST_LOGINIP`** |  string  | 203.12.55.12  |  
| **`FORTER_CUSTOMER_REGISTRATION_IP`** |  string  | 203.12.55.12  |  
|  **`FORTER_CUSTOMER_ACCOUNT_TYPE`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_BILLING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_BILLING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_BILLING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_BILLING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
|  **`FORTER_CUSTOMER_SHIPPING_EMAIL`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_SHIPPING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_SHIPPING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_SHIPPING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_SHIPPING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
#### Transaction Extra Data[​](https://documentation.ixopay.com/adapters/external-risk#transaction-extra-data "Direct link to Transaction Extra Data")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FORTER_ORDER_TYPE`**  
  
optional, default WEB. Platform order was made through. Possible Values: "WEB", "PHONE", "MOBILE", "IOS", "ANDROID", "WAP", "STORE", "MAIL_ORDER", "AUTOMATIC_RENEWAL_OR_INSTALLMENT_PAYMENT", "UNKNOWN"  | string  | WEB  |  
|  **`FORTER_TOKEN`**  
  
conditional Forter token cookie from request headers. Maximum length is 128 characters.  | string  | 2315688945984  |  
|  **`FORTER_USER_AGENT`**  
  
required when PaymentJS is not used, Customer's User agent. Maximum length is 4096 characters.  | string  | Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36  |  
|  **`FORTER_CHECKOUT_TIME`**  
  
optional will use current timestamp if not provided. The time when the buyer completed the checkout process in the merchant website in SECONDS since unix epoch (Jan 1, 1970).  | number  | 1415273168  |  
|  **`FORTER_MOBILE_UID`**  
  
optional - mobile UID. The device identifier such as IMEI in android or identifier for vendor in iOS. This should match the deviceId sent via the mobile events API (for mobile transactions only) Maximum length is 128 characters.  | string  | 6429751237891  |  
|  **`FORTER_MERCHANT_DEVICE_IDENTIFIER`**  
  
conditional - A unique device identifier generated by merchant  | string  | HGJ7512345H3  |  
|  **`FORTER_MOBILE_APP_VERSION`**  
  
conditional - The version of the merchant application which is running on the user's device  | string  | 2.9  |  
|  **`FORTER_MOBILE_OS_TYPE`**  
  
conditional - The operating system running on the user's device (relevant for native app only)  | string  | Android  |  
|  **`FORTER_MOBILE_DEVICE_BRAND`**  
  
conditional - The user's device brand (relevant for native app only)  | string  | Samsung  |  
|  **`FORTER_MOBILE_DEVICE_MODEL`**  
  
conditional - The model of the user's device (relevant for native app only)  | string  | Galaxy 3  |  
|  **`FORTER_FULL_HEADERS_JSON`**  
  
conditional - A unique device identifier generated by merchant  | string JSON  | "{"method":"GET / HTTP/1.1", "Host": "forter.com", "Connection": "keep-alive", "Accept": ...}"  |  
|  **`FORTER_DELIVERY_DETAILS_DELIVERY_TYPE`**  
  
optional default PHYSICAL - Type of delivery: PHYSICAL for any type of shipped goods. DIGITAL for non-shipped goods (services, gift cards etc.) Example: PHYSICAL Possible values are: "DIGITAL", "PHYSICAL", "HYBRID"  | string  | DIGITAL  |  
|  **`FORTER_DELIVERY_DETAILS_DELIVERY_METHOD`**  
  
optional default POSTAL SERVICE - Delivery method chosen by customer such as postal service, email, in game transfer, etc. Example: USPS - Ground Mail  | string  | Galaxy  |  
|  **`FORTER_DELIVERY_DETAILS_DELAYED_DELIVERY_DATE`**  
  
conditional - Use if customer chose to deliver the item at a later date (to arrive in time for a holiday, a birthday, etc.). Use YYYY-MM-DD format.  | string  | 2018-10-12  |  
|  **`FORTER_DELIVERY_DETAILS_CARRIER`**  
  
optional - The delivery carrier  | string  | DHL  |  
|  **`FORTER_DELIVERY_DETAILS_DELIVERY_PRICE_AMOUNT`**  
  
conditional - same currency as transaction currency is assumed  | string  | 5.00  |  
|  **`FORTER_DELIVERY_DETAILS_TRACKING_EXTRA_CHARGE_AMOUNT`**  
  
conditional - same currency as transaction currency is assumed  | string  | 1.00  |  
|  **`FORTER_DELIVERY_DETAILS_EXPECTED_DELIVERY_DATE`**  
  
conditional - Date delivery is expected to arrive at destination. Use YYYY-MM-DD  | string  | 2018-10-14  |  
|  **`FORTER_DELIVERY_DETAILS_LEAVE_OUTSIDE`**  
  
optional - 1 if customer chose to allow shipment to be left outside or at a building lobby or reception area.  | integer  | 1  |  
|  **`FORTER_DELIVERY_DETAILS_SMS_UPDATES`**  
  
optional - 1 if customer asked to receive SMS updates regarding delivery.  | integer  | 0  |  
|  **`FORTER_DELIVERY_DETAILS_WAIT_TO_SHIP_TOGETHER`**  
  
conditional - 1 if customer asked to try and bundle shipments together to save costs.  | integer  | 1  |  
|  **`FORTER_DELIVERY_DETAILS_DELIVERY_COMMENTS`**  
  
conditional - Any comments or requests customer had for delivery  | string  | Please call before arriving, Thanks!  |  
|  **`FORTER_IS_MERCHANT_OF_RECORD`**  
  
conditional - 1 if the Forter account owner is also the merchant of record  | string  | 1  |  
|  **`FORTER_PAYMENT_METHOD_NICKNAME`**  
  
conditional - Nickname assigned to this payment method by the user  | string  | My Work Card  |  
|  **`FORTER_PAYMENT_CREDIT_USED_AMOUNT`**  
  
conditional - Store credit used to pay for purchase  | string  | 1.00  |  
|  **`FORTER_IS_DEFAULT_PAYMENT_METHOD`**  
  
conditional - 1 if this payment instrument is the default set by the customer.  | integer  | 0  |  
|  **`FORTER_NUMBER_OF_INSTALLMENTS`**  
  
conditional - Number of payments if customer chose to pay in several installments. integer  | string  | 12  |  
|  **`FORTER_DELAYED_CHARGE`**  
  
conditional - 1 if customer chose to pay at a later date. False if customer chose to pay in several installments as long as first payment is immediate.  | integer  | 0  |  
|  **`FORTER_DELAYED_CHARGE_DATE`**  
  
conditional - Date customer is due to pay. Use YYYY-MM-DD format.  | string  | 2015-12-01  |  
|  **`FORTER_PAYMENT_GATEWAY_ID`**  
  
conditional - Transaction identifier provided by the payment gateway  | string  | SDS34653246346  |  
|  **`FORTER_MERCHANT_ID`**  
  
conditional - Merchant unique identifier  | string  | eh629dK9  |  
|  **`FORTER_MERCHANT_DOMAIN`**  
  
conditional - Use if merchant operates several sites (such as a regular site and a related discount brand)  | string  | HandbagsExpressDiscounts.com  |  
|  **`FORTER_MERCHANT_NAME`**  
  
conditional - Use if merchant operates several sites (such as a regular site and a related discount brand)  | string  | Handbags Express Discounts  |  
|  **`FORTER_SITE_LOCALIZATION_COUNTRY`**  
  
conditional - Use if site has multiple localized versions  | string  | FR  |  
|  **`FORTER_SITE_LOCALIZATION_LANGUAGE`**  
  
conditional - Site interface language chosen by customer, 2-letter ISO-639-1 language code  | string  | EN  |  
|  **`FORTER_SITE_LOCALIZATION_CURRENCY`**  
  
conditional - Currency chosen by customer as default, 3-letter ISO-4217 format currency code  | string  | USD  |  
|  **`FORTER_ITEM_DEFAULT_QUANTITY`**  
  
optional defaults to 1  | integer  | 1  |  
|  **`FORTER_ITEM_DEFAULT_TYPE`**  
  
optional default to TANGIBLE - Tangible if physical item, non-tangible if any other product Example: TANGIBLE Possible values are: "TANGIBLE", "NON_TANGIBLE"  | string  | NON_TANGIBLE  |  
|  **`FORTER_ITEM_DEFAULT_CREATED_TIME`**  
  
conditional - Time item was added to cart by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1415273168  |  
|  **`FORTER_ITEM_DELIVERY_TYPE`**  
  
conditional - Could be either PHYSICAL or DIGITAL. PHYSICAL by default  | string  | PHYSICAL  |  
|  **`FORTER_ITEM_DEFAULT_SPECIFIC_DATA_JSON`**  
  
conditional - JSON with the format described here:  | string JSON  | {"personalCustomization":false, ....}  |  
|  **`FORTER_BENEFICIARIES_FIRSTNAME[i]`**  
  
conditional - Required field in case Beneficiary object is being mapped  | string  | John  |  
|  **`FORTER_BENEFICIARIES_LASTNAME[i]`**  
  
conditional - Required field in case Beneficiary object is being mapped  | string  | Doe  |  
|  **`FORTER_BENEFICIEARIES_EMAIL[i]`**  
  
optional - Beneficiary email address  | string  | john.doe@gmail.com  |  
|  **`FORTER_BENEFICIARIES_USER_COMMENTS_TO_MERCHANT[i]`**  
  
optional - Message user is leaving to a merchant  | string  | Please pack camera extra secure  |  
|  **`FORTER_BENEFICIARIES_MESSAGE_TO_BENEFICIARY[i]`**  
  
optional - Message to Beneficiary  | string  | Message  |  
|  **`FORTER_BENEFICIARIES_MERCHANT_COMMENTS[i]`**  
  
optional - Merchant comments  | string  | Merchant comments  |  
|  **`FORTER_FORCE_RECOMMENDATION`**  
  
optional, use for testing - When risk check result from Forter has empty`recommendation` , this value will be used as override to fake recommendation action received from Forter  | string  | VERIFICATION_REQUIRED_3DS_CHALLENGE  |  
#### Transaction Item Extra Data besides the standard item data[​](https://documentation.ixopay.com/adapters/external-risk#transaction-item-extra-data-besides-the-standard-item-data "Direct link to Transaction Item Extra Data besides the standard item data")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FORTER_ITEM_TYPE`**  
  
optional default to TANGIBLE - Tangible if physical item, non-tangible if any other product Example: TANGIBLE Possible values are: "TANGIBLE", "NON_TANGIBLE"  | string  | NON_TANGIBLE  |  
|  **`FORTER_ITEM_PRODUCTID`**  
  
Unique identifier for item that is common to all identical items (such as SKU, ISBN, etc.)  | string  | 324234  |  
|  **`FORTER_ITEM_PRODUCTID_TYPE`**  
  
optional - Type of product ID used (SKU/ISBN/UPC/etc.)  | string  | SKU  |  
|  **`FORTER_ITEM_CATEGORY`**  
  
optional - The item category  | string  | Item Category  |  
|  **`FORTER_ITEM_COUPON_CODE_USED`**  
  
optional - The coupon code used  | string  | FATHERSDAY2015  |  
|  **`FORTER_ITEM_DISCOUNT_TYPE`**  
  
optional - Discount type  | string  | COUPON  |  
|  **`FORTER_ITEM_SPECIFIC_DATA_JSON`**  
  
conditional - JSON with the format described here:  | string JSON  | {"personalCustomization":false, ....}  |  
|  **`FORTER_ITEM_CREATED_TIME`**  
  
conditional - Time item was created in seconds since unix epoch (UTC, Jan 1, 1970)  | string  | 1448549922  |  
|  **`FORTER_ITEM_DELIVERY_TYPE`**  
  
conditional - Could be either PHYSICAL or DIGITAL. PHYSICAL by default  | string  | PHYSICAL  |  
|  **`FORTER_ITEM_DELIVERY_METHOD`**  
  
optional - Should be used if items from the cart have different payment methods  | string  | Store Pickup  |  
|  **`FORTER_BENEFICIARIES_FIRSTNAME[i]`**  
  
conditional - Required field in case Beneficiary object is being mapped  | string  | John  |  
|  **`FORTER_BENEFICIARIES_LASTNAME[i]`**  
  
conditional - Required field in case Beneficiary object is being mapped  | string  | Doe  |  
|  **`FORTER_BENEFICIEARIES_EMAIL[i]`**  
  
optional - Beneficiary email address  | string  | john.doe@gmail.com  |  
|  **`FORTER_BENEFICIARIES_USER_COMMENTS_TO_MERCHANT[i]`**  
  
optional - Message user is leaving to a merchant  | string  | Please pack camera extra secure  |  
|  **`FORTER_BENEFICIARIES_MESSAGE_TO_BENEFICIARY[i]`**  
  
optional - Message to Beneficiary  | string  | Message  |  
|  **`FORTER_BENEFICIARIES_MERCHANT_COMMENTS[i]`**  
  
optional - Merchant comments  | string  | Merchant comments  |  
## FraudNet External Risk Adapter[​](https://documentation.ixopay.com/adapters/external-risk#fraudnet-external-risk-adapter "Direct link to FraudNet External Risk Adapter")
### FraudNet External Risk Check additional extra data[​](https://documentation.ixopay.com/adapters/external-risk#fraudnet-external-risk-check-additional-extra-data "Direct link to FraudNet External Risk Check additional extra data")
Those optional extra data fields are mapped to the corresponding FraudNet Transaction Check Parameters and may help to get much more accurate risk score from the FraudNet: 
#### Required fields[​](https://documentation.ixopay.com/adapters/external-risk#required-fields "Direct link to Required fields")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
| **`identification (customer)`** |  string  | 123  |  
#### Customer Extra Data[​](https://documentation.ixopay.com/adapters/external-risk#customer-extra-data-1 "Direct link to Customer Extra Data")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
| **`FRAUDNET_CUSTOMER_REGION`** |  string  | NY  |  
|  **`FRAUDNET_CUSTOMER_PHONE_2`**  
  
If the phone provided is in not a US number, precede the number with country and city codes  | string  | +43660501869  |  
|  **`FRAUDNET_CUSTOMER_PHONE_3`**  
  
If the phone provided is in not a US number, precede the number with country and city codes  | string  | +43660501869  |  
|  **`FRAUDNET_CUSTOMER_STARTED_ON`**  
  
Date/Time (ISO 8601) customer started  | string or null  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_CUSTOMER_TYPE`**  
  
Categorization of the account type  | string  | NEW  |  
|  **`FRAUDNET_CUSTOMER_DOB`**  
  
The date of birth of the customer Format: (YYYY-MM-DD)  | string  | 1995-12-12  |  
| **`FRAUDNET_CUSTOMER_ANNUAL_INCOME`** |  string  | 120000  |  
#### Transaction Extra Data[​](https://documentation.ixopay.com/adapters/external-risk#transaction-extra-data-1 "Direct link to Transaction Extra Data")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FRAUDNET_TRANSACTION_TYPE`**  
  
Type of query that is being requested (usually sale, registration, payment, or authentication)  | string  | sale  |  
|  **`FRAUDNET_TRANSACTION_ORDER_IS_DIGITAL`**  
  
Whether the order is for a digital product or service (digital payments, online games, airline tickets, etc)  | boolean  | false  |  
|  **`FRAUDNET_TRANSACTION_EVENT`**  
  
Your order status or order event that you would like to track. This list can be as detailed and numerous as you would like, but each will generally need to be mapped to one of Fraud.net's statuses  | string  | pending shipment  |  
|  **`FRAUDNET_TRANSACTION_ORDER_SOURCE`**  
  
Marketing channel that delivered the user to your site. If you would like to track detailed marketing channels, campaigns and media, please contact your customer success team member for instructions.  | string  | google ppc  |  
|  **`FRAUDNET_TRANSACTION_ORDER_COUNT`**  
  
User's aggregate (lifetime) number of orders (optional)  | integer  | 2  |  
|  **`FRAUDNET_TRANSACTION_TOTAL_SPENT`**  
  
User's aggregate (lifetime) amount spent  | number  | 420  |  
|  **`FRAUDNET_TRANSACTION_SESSION_ID`**  
  
User's current session ID. Use this to link your website and cart events to your post transaction orders (optional)  | string  | 1234ABC  |  
|  **`FRAUDNET_TRANSACTION_FIRST_PURCHASE`**  
  
Date the user first made a purchase  | string  | 2020-01-06T13:46:46.718Z  |  
|  **`FRAUDNET_TRANSACTION_LAST_PURCHASE`**  
  
Date the user last made a purchase  | string  | 2022-01-06T13:46:46.718Z  |  
|  **`FRAUDNET_TRANSACTION_USER_LOCALE`**  
  
Two-character country code for the transaction location, according to ISO 3166-1 alpha 2  | string  | US  |  
|  **`FRAUDNET_TRANSACTION_COUPON_CODE`**  
  
Coupon code, if a coupon was used  | string  | r4124adsq2  |  
|  **`FRAUDNET_TRANSACTION_ORDER_DISCOUNT`**  
  
Amount of discount  | number  | 1  |  
|  **`FRAUDNET_TRANSACTION_ORDER_SHIPPING`**  
  
Cost of shipping the order  | number  | 10  |  
|  **`FRAUDNET_TRANSACTION_ORDER_TAX`**  
  
Amount of taxes  | number  | 5  |  
|  **`FRAUDNET_TRANSACTION_AGENT_CODE`**  
  
Code for an internal agent who has made changes to the order  | string  | AC775  |  
|  **`FRAUDNET_TRANSACTION_AGENT_DEPT`**  
  
Department of internal agent  | string  | ITD  |  
|  **`FRAUDNET_TRANSACTION_IDENT_ID`**  
  
Identification that the customer provided  | string  | LZ3124125  |  
|  **`FRAUDNET_TRANSACTION_IDENT_COUNTRY`**  
  
Country where the customer identification comes from  | string  | Austria  |  
|  **`FRAUDNET_TRANSACTION_FEE`**  
  
Type of identification. Allowed values: "ssn", "drivers_lic", "national_id"  | string  | ssn  |  
|  **`FRAUDNET_TRANSACTION_AGENT_DEPT`**  
  
Department of internal agent  | string  | ITD  |  
| **`FRAUDNET_TRANSACTION_FEE`** |  number  | 12.00  |  
|  **`FRAUDNET_TRANSACTION_GEO`**  
  
point of purchase [lat, lon]. Pattern: ^([-+]?)([\d]{1,2})(((.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((.)(\d+))?)$  | string  | 47.21746, -1.5476425  |  
| **`FRAUDNET_TRANSACTION_REFERENCE`** |  string  | reference  |  
#### Transaction Extra Data related to seller[​](https://documentation.ixopay.com/adapters/external-risk#transaction-extra-data-related-to-seller "Direct link to Transaction Extra Data related to seller")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FRAUDNET_SELLER_ADDRESS1`**  
  
Building number and street address for legal address of the company/seller  | string  | 554 Main Street  |  
|  **`FRAUDNET_SELLER_ADDRESS2`**  
  
Apartment/suite/unit number  | string  | Suite 443  |  
|  **`FRAUDNET_SELLER_CITY`**  
  
Address city  | string  | New York City  |  
|  **`FRAUDNET_SELLER_COMPANY`**  
  
Seller company name  | string  | ACME Inc  |  
|  **`FRAUDNET_SELLER_COUNTRY`**  
  
Two-digit country code , according to ISO 3166-1 alpha 2  | string  | US  |  
|  **`FRAUDNET_SELLER_EMAIL`**  
  
Seller's primary email  | string  | email@gmail.com  |  
|  **`FRAUDNET_SELLER_INDUSTRY`**  
  
Industry in which the seller operates (using your taxonomy, if available)  | string  | Retail  |  
|  **`FRAUDNET_SELLER_MCC_ID`**  
  
Merchant category code  | string  | 125  |  
|  **`FRAUDNET_SELLER_NAME`**  
  
Seller's Name  | string  | Name  |  
|  **`FRAUDNET_SELLER_PHONE`**  
  
Seller's primary phone. If not a US number, precede the number with country and codes codes  | string  | 212-289-1293  |  
|  **`FRAUDNET_SELLER_POSTAL_CODE`**  
  
Zip or postal code  | string  | 10001  |  
|  **`FRAUDNET_SELLER_REGION`**  
  
Two-digit state or province code, according to ISO 3166-1 alpha 2  | string  |   |  
|  **`FRAUDNET_SELLER_SECTOR`**  
  
|  **`FRAUDNET_SELLER_TAX_ID`**  
  
Tax ID for this seller (optional)  | string  | DE12345678911  |  
| **`FRAUDNET_SELLER_ACCOUNT_ID`** |  string  |   |  
| **`FRAUDNET_SELLER_ACCOUNT_TYPE`** |  string  |   |  
#### Transaction Extra Data related to device[​](https://documentation.ixopay.com/adapters/external-risk#transaction-extra-data-related-to-device "Direct link to Transaction Extra Data related to device")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FRAUDNET_DEVICE_RESOLUTION`**  
  
legacy field  | string  | 1024x768  |  
| **`FRAUDNET_DEVICE_USER_AGENT`** |  string  | MOZILLA/5.0 (IPHONE; CPU IPHONE OS 7_1 LIKE MAC OS X) APPLEWEBKIT/537.51.2  |  
|  **`FRAUDNET_DEVICE_SERVICE`**  
  
Allowed values: "fraudnet", "infoscore", "inauth", "none"  | string  | none  |  
| **`FRAUDNET_DEVICE_CLIENT_ID`** |  string  |   |  
| **`FRAUDNET_DEVICE_SESSION_ID`** |  string  | 554 Main Street  |  
| **`FRAUDNET_DEVICE_FINGERPRINT_ID`** |  string  |   |  
|  **`FRAUDNET_DEVICE_IP_TYPE`**  
  
The remote IP address type. If a valid ip_address is supplied, this field's value will be overwritten to indicate the type of ip address sent. Allowed values: "v4", "v6"  | string  | v4  |  
|  **`FRAUDNET_DEVICE_PLUGIN_HASH`**  
  
The hash from the Device Fingerprint for browser plugins  | string  |   |  
| **`FRAUDNET_DEVICE_TIME_ZONE`** |  string  |   |  
| **`FRAUDNET_DEVICE_LANGUAGE`** |  string  | en-GB  |  
|  **`FRAUDNET_DEVICE_IS_PROXY`**  
  
Flag that tells about a used proxy  | boolean  | false  |  
| **`FRAUDNET_DEVICE_HTTP_REFERER`** |  string  |   |  
| **`FRAUDNET_DEVICE_NUM_MIME_TYPES`** |  string  |   |  
| **`FRAUDNET_DEVICE_MIME_TYPES_HASH`** |  string  |   |  
| **`FRAUDNET_DEVICE_NUM_FONTS`** |  integer  |   |  
| **`FRAUDNET_DEVICE_FONTS_HASH`** |  string  |   |  
| **`FRAUDNET_DEVICE_NUM_PLUGINS`** |  integer  |   |  
| **`FRAUDNET_DEVICE_PLUGINS_HASH`** |  string  |   |  
| **`FRAUDNET_DEVICE_COLOR_DEPTH`** |  integer  |   |  
| **`FRAUDNET_DEVICE_FONT_SMOOTHING`** |  boolean  |   |  
| **`FRAUDNET_DEVICE_JAVA_SUPPORT`** |  boolean  |   |  
| **`FRAUDNET_DEVICE_TOUCH_SUPPORT`** |  boolean  |   |  
| **`FRAUDNET_DEVICE_COOKIE_SUPPORT`** |  boolean  |   |  
| **`FRAUDNET_DEVICE_CANVAS_FINGERPRINT_ID`** |  string  |   |  
| **`FRAUDNET_DEVICE_CANVAS_HEIGHT`** |  integer  |   |  
| **`FRAUDNET_DEVICE_CANVAS_WIDTH`** |  integer  |   |  
| **`FRAUDNET_DEVICE_SCREEN_HEIGHT`** |  integer  |   |  
| **`FRAUDNET_DEVICE_SCREEN_WIDTH`** |  integer  |   |  
| **`FRAUDNET_DEVICE_IS_TOR`** |  boolean  |   |  
|  **`FRAUDNET_DEVICE_GEO`**  
  
Device location. Pattern: ^([-+]?)([\d]{1,2})(((.)(\d+)(,)))(\s*)(([-+]?)([\d]{1,3})((.)(\d+))?)$  | string  | 47.21746, -1.5476425  |  
| **`FRAUDNET_DEVICE_CITY`** |  string  |   |  
| **`FRAUDNET_DEVICE_COUNTRY`** |  string  |   |  
| **`FRAUDNET_DEVICE_POSTAL_CODE`** |  string  |   |  
|  **`FRAUDNET_DEVICE_PROXY_TYPE`**  
  
Allowed values: "vpn", "tor", "dch", "pub", "web", "ses"  | string  | vpn  |  
#### Transaction Extra Data related to account[​](https://documentation.ixopay.com/adapters/external-risk#transaction-extra-data-related-to-account "Direct link to Transaction Extra Data related to account")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FRAUDNET_ACCOUNT_CURRENT_BALANCE`**  
  
Account balance at the time of current transaction  | number  | 55  |  
| **`FRAUDNET_ACCOUNT_DAYS_LATE`** |  integer  |   |  
|  **`FRAUDNET_ACCOUNT_DUE_ON`**  
  
Date the next account payment is due by. Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_INC_COUNTRY`**  
  
Country the [business] account was incorporated. Format: <= 2 characters  | string  | US  |  
|  **`FRAUDNET_ACCOUNT_INC_ON`**  
  
Date the [business] account was incorporated on  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_INC_REGION`**  
  
Region or State the [business] account was incorporated on  | string  |   |  
|  **`FRAUDNET_ACCOUNT_LABEL`**  
  
Merchant Specific name of the type of account  | string  |   |  
|  **`FRAUDNET_ACCOUNT_LAST_BALANCE`**  
  
Account balance as of last statement  | string  |   |  
|  **`FRAUDNET_ACCOUNT_LAST_LOGIN`**  
  
Date of the last account login. Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_LAST_MIN_DUE`**  
  
The minimum amount due on last account statement  | string  |   |  
|  **`FRAUDNET_ACCOUNT_LAST_PAYMENT_AMOUNT`**  
  
The last payment amount for the account  | number  |   |  
|  **`FRAUDNET_ACCOUNT_LAST_PAYMENT_ON`**  
  
The date of the last account payment. Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_MIN_DUE`**  
  
Minimum amount due on account at the time of current transaction  | number  |   |  
|  **`FRAUDNET_ACCOUNT_OPENED_UP`**  
  
UTC date and time the transaction placed. Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_TAX_ID`**  
  
Accounts's tax identification number  | string  |   |  
|  **`FRAUDNET_ACCOUNT_TYPE`**  
  
Categorization of the account type  | string  |   |  
|  **`FRAUDNET_ACCOUNT_UNBILLED_CHARGES`**  
  
Fees on account that have not been paid  | number  |   |  
|  **`FRAUDNET_ACCOUNT_EXPOSURE_AMT`**  
  
The total exposure of the account  | number  |   |  
|  **`FRAUDNET_ACCOUNT_AVAILABLE_FUNDS`**  
  
The available funds for the account  | number  |   |  
|  **`FRAUDNET_ACCOUNT_CLOSED_ON`**  
  
The date the account was closed. Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_CREDIT_LIMIT`**  
  
Credit limit for the account  | number  |   |  
|  **`FRAUDNET_ACCOUNT_IS_ACTIVE`**  
  
Is the account active?  | boolean  |   |  
|  **`FRAUDNET_ACCOUNT_IS_FRAUD`**  
  
Was the account closed for fraud reasons?  | boolean  |   |  
|  **`FRAUDNET_ACCOUNT_LATE_STATUS_LABEL`**  
  
Merchant specific status for account delinquency  | string  |   |  
|  **`FRAUDNET_ACCOUNT_STATUS`**  
  
Merchant specific term for account's current status  | string  |   |  
|  **`FRAUDNET_ACCOUNT_PIN_CHANGE_ON`**  
  
Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_EMAIL_CHANGE_ON`**  
  
Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_ADDRESS_CHANGE_ON`**  
  
Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_PASSWORD_CHANGE_ON`**  
  
Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
|  **`FRAUDNET_ACCOUNT_PHONE_CHANGE_ON`**  
  
Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
#### Transaction Extra Data related to credit card[​](https://documentation.ixopay.com/adapters/external-risk#transaction-extra-data-related-to-credit-card "Direct link to Transaction Extra Data related to credit card")  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
|  **`FRAUDNET_PAYMENT_CARD_STATUS`**  
  
The status of the card. Allowed values: "active", "cancelled", "decline", "deleted", "inactive", "lost", "new", "pick-up", "request", "restricted", "stolen", "suspended", "delinquency", "damaged", "expired"  | string  | active  |  
|  **`FRAUDNET_PAYMENT_IS_ACTIVE`**  
  
Is the card for this transaction active?  | boolean  | true  |  
| **`FRAUDNET_PAYMENT_GIFT_CARD_NUMBERS`** |  string  | G4216291  |  
|  **`FRAUDNET_PAYMENT_GIFT_CARDS`**  
  
Single or list of gift card numbers used with order.  | array[string]  |   |  
|  **`FRAUDNET_PAYMENT_INPUT_CAPABILITIES`**  
  
Code indicating card read capabilities.  | string  |   |  
|  **`FRAUDNET_PAYMENT_SERVICE_CODE`**  
  
Service code for the payment.  | string  | 123  |  
|  **`FRAUDNET_PAYMENT_TRANSACTION_LABEL`**  
  
User defined label that categorizes the transaction.  | string  | european_customer  |  
|  **`FRAUDNET_PAYMENT_TRANSACTION_TYPE`**  
  
User defined code specifying the type of Terminal at the Point of transaction.  | string  |   |  
|  **`FRAUDNET_PAYMENT_ACTIVE_ON`**  
  
Format: ISO 8601  | string  | 2022-03-26T18:14:29Z  |  
```

{  

  "customer": {  

    "identification": "c0001",  

    "extraData": {  

      "FORTER_CUSTOMER_LAST_LOGINIP": "203.12.55.12",  

      "FORTER_CUSTOMER_BILLING_ADDRESS_TYPE": "HOME"  

    }  

  }  

}  

```
```

{  

  "customer": {  

    "identification": "c0001",  

    "extraData": {  

      "FORTER_CUSTOMER_LAST_LOGINIP": "203.12.55.12",  

      "FORTER_CUSTOMER_BILLING_ADDRESS_TYPE": "HOME"  

    }  

  }  

}  

```
  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
| **`FORTER_CUSTOMER_PAST_ORDERS_COUNT`** |  optional integer  | 0  |  
| **`FORTER_CUSTOMER_PAST_ORDERS_SUM_USD`** |  optional decmimal  | 0.00  |  
| **`FORTER_CUSTOMER_LAST_LOGINIP`** |  string  | 203.12.55.12  |  
| **`FORTER_CUSTOMER_REGISTRATION_IP`** |  string  | 203.12.55.12  |  
|  **`FORTER_CUSTOMER_ACCOUNT_TYPE`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_BILLING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_BILLING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_BILLING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_BILLING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
|  **`FORTER_CUSTOMER_SHIPPING_EMAIL`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_SHIPPING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_SHIPPING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_SHIPPING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_SHIPPING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
```

{  

  "customer": {  

    "identification": "c0001",  

    "extraData": {  

      "FORTER_CUSTOMER_LAST_LOGINIP": "203.12.55.12",  

      "FORTER_CUSTOMER_BILLING_ADDRESS_TYPE": "HOME"  

    }  

  }  

}  

```
  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
| **`FORTER_CUSTOMER_PAST_ORDERS_COUNT`** |  optional integer  | 0  |  
| **`FORTER_CUSTOMER_PAST_ORDERS_SUM_USD`** |  optional decmimal  | 0.00  |  
| **`FORTER_CUSTOMER_LAST_LOGINIP`** |  string  | 203.12.55.12  |  
| **`FORTER_CUSTOMER_REGISTRATION_IP`** |  string  | 203.12.55.12  |  
|  **`FORTER_CUSTOMER_ACCOUNT_TYPE`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_BILLING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_BILLING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_BILLING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_BILLING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
|  **`FORTER_CUSTOMER_SHIPPING_EMAIL`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_SHIPPING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_SHIPPING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_SHIPPING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_SHIPPING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
```

{  

  "customer": {  

    "identification": "c0001",  

    "extraData": {  

      "FORTER_CUSTOMER_LAST_LOGINIP": "203.12.55.12",  

      "FORTER_CUSTOMER_BILLING_ADDRESS_TYPE": "HOME"  

    }  

  }  

}  

```
```

{  

  "customer": {  

    "identification": "c0001",  

    "extraData": {  

      "FORTER_CUSTOMER_LAST_LOGINIP": "203.12.55.12",  

      "FORTER_CUSTOMER_BILLING_ADDRESS_TYPE": "HOME"  

    }  

  }  

}  

```
  
| Name  | Type  | Example values  |  
| --- | --- | --- |  
| **`FORTER_CUSTOMER_PAST_ORDERS_COUNT`** |  optional integer  | 0  |  
| **`FORTER_CUSTOMER_PAST_ORDERS_SUM_USD`** |  optional decmimal  | 0.00  |  
| **`FORTER_CUSTOMER_LAST_LOGINIP`** |  string  | 203.12.55.12  |  
| **`FORTER_CUSTOMER_REGISTRATION_IP`** |  string  | 203.12.55.12  |  
|  **`FORTER_CUSTOMER_ACCOUNT_TYPE`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_BILLING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_BILLING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_BILLING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_BILLING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_BILLING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |  
|  **`FORTER_CUSTOMER_SHIPPING_EMAIL`**  
  
optional  | string  |   |  
|  **`FORTER_CUSTOMER_SHIPPING_ADDRESS_TYPE`**  
  
conditional Possible values are: "HOME", "BUSINESS", "OTHER"  | string  | HOME  |  
|  **`FORTER_CUSTOMER_SHIPPING_CREATION_TIME`**  
  
conditional Time item was first entered by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448549922  |  
|  **`FORTER_CUSTOMER_SHIPPING_REMOVAL_TIME`**  
  
conditional Time item was removed by customer in seconds since unix epoch (UTC, Jan 1, 1970)  | number  | 1448895522  |  
|  **`FORTER_CUSTOMER_SHIPPING_SUGGESTED_CORRECT_ADDRESS`**  
  
conditional True if customer selected a corrected address suggested by merchant (For example in cases where customer entered wrong zipcode)  | boolean  | 0/1  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_TYPE`**  
  
required ype of document (Passport, ID, Driving license) Maximum length is 35 characters.  | string  | Passport  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_SOURCE`**  
  
required Source of document (e.g. uploaded file, captured by camera, typed in by customer, etc.) Possible values are: "CAMERA_CAPTURED", "UPLOADED_FILE", "TYPED", "OTHER"  | string  | UPLOADED_FILE  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_NATIONALITY`**  
  
conditional Document holder's nationality  | string  | US  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_ISSUING_STATE`**  
  
conditional Document issuing state or region  | string  | NY  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_NUMBER`**  
  
conditional Official document's number (e.g. passport number, driving license number, etc.)  | string  | 20439190  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_FIRSTNAME`**  
  
conditional First name as appears on the document  | string  | John  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_LASTNAME`**  
  
conditional Last name as appears on the document  | string  | Smith  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_DATEOFBIRTH`**  
  
conditional Date of birth as appears on the document. Use YYYY-MM-DD format.  | string  | 1982-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_EXPIRATION`**  
  
conditional Document's exipration date. Use YYYY-MM-DD format.  | string  | 2025-04-23  |  
|  **`FORTER_CUSTOMER_SHIPPING_VERIFICATION_DOCUMENT_PAYLOAD`**  
  
conditional JSON Response payload received from 3rd party document verification  | string JSON  | {}  |