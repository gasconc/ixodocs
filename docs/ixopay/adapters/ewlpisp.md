---
title: EwlPISP
summary: This page provides an overview of the payments methods provided by the EwlPISP
  adapter in the IXOPAY platform. It also includes a full list of all configuration
  options available to you when integrating EwlPISP within your payments landscape,
  as well as an overview of the parameters required when su
tags:
- payment-methods-https-documentation-ixopay-com-adapters-ewlpisp-payment-methods-direct-link-payment-methods
- additional-parameters-https-documentation-ixopay-com-adapters-ewlpisp-additional-parameters-direct-link-additional-parameters
- options-request-https-documentation-ixopay-com-adapters-ewlpisp-options-request-direct-link-options-request
- bank-list-reach-directory-https-documentation-ixopay-com-adapters-ewlpisp-bank-list-reach-directory-direct-link-bank-list-reach-directory
- request-body-https-documentation-ixopay-com-adapters-ewlpisp-request-body-direct-link-request-body
- api
- ixopay
- bank-transfer
- transaction
source_url: https://documentation.ixopay.com/adapters/ewlpisp
portal: ixopay-dev
updated: '2026-05-11'
related: []
---

* EwlPISP

# EwlPISP
This page provides an overview of the payments methods provided by the EwlPISP adapter in the IXOPAY platform. It also includes a full list of all configuration options available to you when integrating EwlPISP within your payments landscape, as well as an overview of the parameters required when submitting a transaction via IXOPAY's API.
The APIs will allow the initiation of a payment from any payment account to another payment account in Europe, held by any reachable ASPSP provided the account holder has given his explicit consent as is stipulated by the Payment Services Directive
## Payment Methods[​](https://documentation.ixopay.com/adapters/ewlpisp#payment-methods "Direct link to Payment Methods")  
| Payment Method  | Transaction Flows  | Transaction Types  |  
| --- | --- | --- |  
| Bank Transfer  | Redirect  | Debit  |  
## Additional Parameters[​](https://documentation.ixopay.com/adapters/ewlpisp#additional-parameters "Direct link to Additional Parameters")  
| Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| extraData.AspspId  | string  | false  | The Id of the ASPSP from bank list.  |  
| extraData.debtorAccount  | string  | false  | (IBAN) Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction..  |  
| customer.shippingAddress1 (Customer)  | string  | false  | The first address line  |  
| customer.shippingAddress2 (Customer)  | string  | false  | The second address line  |  
| customer.shippingCity (Customer)  | string  | false  | The address suburb, town or county  |  
| customer.shippingCountry (Customer)  | string  | false  | The two-character country code  |  
| customer.shippingPostcode (Customer)  | string  | false  | The address postcode  |  
## Options Request[​](https://documentation.ixopay.com/adapters/ewlpisp#options-request "Direct link to Options Request")
### Get Bank List from Reach Directory[​](https://documentation.ixopay.com/adapters/ewlpisp#get-bank-list-from-reach-directory "Direct link to Get Bank List from Reach Directory")
In order to get the bank list from reach directory an Options Request is required.
Please use `getBankList` as an identifier e.g. POST /options/{apiKey}/getBankList.
### Request Body[​](https://documentation.ixopay.com/adapters/ewlpisp#request-body "Direct link to Request Body")
```

{  

  "parameters": {  

    "countryCode": "FR"  

  }  

}  

```You can find more information about the options request here: [Options Request](https://documentation.ixopay.com/api/transaction/options-list)  
| Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| parameters.countryCode  | string  | false  | The two-character country code  |  
```

{  

  "parameters": {  

    "countryCode": "FR"  

  }  

}  

```
```

{  

  "parameters": {  

    "countryCode": "FR"  

  }  

}  

```You can find more information about the options request here: [Options Request](https://documentation.ixopay.com/api/transaction/options-list)  
| Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| parameters.countryCode  | string  | false  | The two-character country code  |  
  * EwlPISP
```

{  

  "parameters": {  

    "countryCode": "FR"  

  }  

}  

```You can find more information about the options request here: [Options Request](https://documentation.ixopay.com/api/transaction/options-list)  
| Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| parameters.countryCode  | string  | false  | The two-character country code  |  
  * [Payment Methods](https://documentation.ixopay.com/adapters/ewlpisp#payment-methods)
  * [Additional Parameters](https://documentation.ixopay.com/adapters/ewlpisp#additional-parameters)
  * [Options Request](https://documentation.ixopay.com/adapters/ewlpisp#options-request)
    * [Get Bank List from Reach Directory](https://documentation.ixopay.com/adapters/ewlpisp#get-bank-list-from-reach-directory)
    * [Request Body](https://documentation.ixopay.com/adapters/ewlpisp#request-body)
```

{  

  "parameters": {  

    "countryCode": "FR"  

  }  

}  

```
```

{  

  "parameters": {  

    "countryCode": "FR"  

  }  

}  

```You can find more information about the options request here: [Options Request](https://documentation.ixopay.com/api/transaction/options-list)  
| Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| parameters.countryCode  | string  | false  | The two-character country code  |