---
title: Gateway Parameters
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  ProcessTransaction
  API  Gateway Parameters'
tags:
- authorize-net-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-gateway-parameters-authorizenet-direct-link-authorize-net
- api
- xml
- ssl
- tokenization
- tokenex
- ixopay
- payment-gateway
- acquirer
- refund
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters
portal: tokenex
updated: '2026-05-18'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * ProcessTransaction API
  * Gateway Parameters

# Gateway Parameters
Supported gateways within the ProcessTransaction API and high-level information about each.
### Authorize.Net[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#authorizenet "Direct link to Authorize.Net")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **AuthorizeNetGateway**  |  
| gateway  | login  | string  | Authorize.Net API Login  |  
| gateway  | password  | string  | Authorize.Net Transaction Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | track_data  | string  | Track 1/Track 2 data  |  
| credit_card  | track_1_data  | string  | Track 1 data  |  
| credit_card  | track_2_data  | string  | track 2 data  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | bank_name  | string  |   |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | account_type  | string  |   |  
| check  | number  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | disable_partial_auth  | string  | Set to 'yes' to enable  |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | fax  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```Capture Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```### Barclaycard Smartpay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#barclaycard-smartpay "Direct link to Barclaycard Smartpay")
**URL:** 
**Default Currency:** EUR
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **BarclaycardSmartpayGateway**  |  
| gateway  | login  | string  | Barclaycard Smartpay API Username. Typical format is ws@Company.NAME  |  
| gateway  | password  | string  | Barclaycard Smartpay password  |  
| gateway  | merchant_id  | string  | Barclaycard Merchant Account  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2020",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```### Beanstream[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#beanstream "Direct link to Beanstream")
**URL:** 
**Developer Documentation:** 
  * A username and password is required for capture, void and refund transactions and can be added to your account under Administration -> Account settings -> Order settings -> Use username/password validation
  * API passcode and hash validation features are not supported and must not be enabled.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **BeanstreamGateway**  |  
| gateway  | login  | string  | Beanstream Merchant ID  |  
| gateway  | user  | string  | Beanstream Username. Required for capture, void, and refund transactions.  |  
| gateway  | password  | string  | Beanstream Password. Required for capture, void, and refund transactions.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  | Customer IP address  |  
| transaction  | description  | string  | Transaction comment  |  
| transaction  | custom  | string  | Gateway field: ref1  |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | phone  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
| shipping_address  | shipping_method  | string  |   |  
| shipping_address  | delivery_estimate  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12.00;PA"  

    }  

  }  

}  

```### BluePay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#bluepay "Direct link to BluePay")
**URL:** 
**Developer Documentation:** 
  * BluePay integeration 'Weblink bp20post' must be enabled
  * 'Hash Type in APIs' setting must be set to MD5

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **BluePayGateway**  |  
| gateway  | login  | string  | BluePay Account ID  |  
| gateway  | password  | string  | BluePay Secret Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | account_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | option_flags  | string  | Maps to the DOC_TYPE field. Valid options are PPD, CCD, TEL, ARC, and WEB (default).  |  
| transaction  | order_id  | string  |   |  
| transaction  | version  | string  | defaults to 1 if not supplied  |  
| transaction  | invoice_number  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111",  

      "amount": 1000  

    }  

  }  

}  

```### Braintree (Blue Platform)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#braintree-blue-platform "Direct link to Braintree \(Blue Platform\)")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **BraintreeBlueGateway**  |  
| gateway  | merchant_id  | string  | Braintree API Merchant ID  |  
| gateway  | public_key  | string  | Braintree API Public Key  |  
| gateway  | private_key  | string  | Braintree API Private Key  |  
| gateway  | acctid  | string  | Optional Braintree Merchant Account ID  |  
| gateway  | channel  | string  |   |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions.  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | descriptor_name  | string  |   |  
| transaction  | descriptor_phone  | string  |   |  
| transaction  | descriptor_url  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```### Braspag[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#braspag "Direct link to Braspag")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **BraspagGateway**  |  
| gateway  | merchant_id  | string  | Braspag API Merchant ID  |  
| gateway  | private_key  | string  | Braspag API Merchant Key  |  
| gateway  | network  | string  | Processor Network to be used (see provider API docs for list)  |  
| gateway  | avs_enabled  | string  | Enable AVS support. Default is false.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | track_data  | string  | Track 1/Track 2 data  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | tax  | string  | Service Tax Amount to be added to the total amount of transaction  |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions.  |  
| transaction  | currency  | string  | Currency Code (see provider API docs for list)  |  
| transaction  | payment_country  | string  | The country code in which the transaction took place  |  
| transaction  | email  | string  | Customer's e-mail address  |  
| transaction  | order_id  | string  | Transaction Order ID  |  
| transaction  | user_data_1  | string  | Customer's CPF, used in performing AVS validation.  |  
| transaction  | recurring_ind  | string  | Indicator for the number of Installments for the transaction (defaults to 1).  |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "network": "XXXXXXXXX",  

      "avs_enabled": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "brand": "Visa"  

    },  

    "transaction": {  

      "amount": 1200,  

      "tax": 0,  

      "currency": "BRL",  

      "payment_country": "BRA",  

      "recurring_ind": 1,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  

    }  

  }  

}  

```### Chase NetConnect[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#chase-netconnect "Direct link to Chase NetConnect")
**URL:** 
**Developer Documentation:** 
  * ChaseNetConnect supports the 'reverse' action which can be used to perform a 'reverse advice' or 'partial authorization reverse' transaction
  * Chase responses containing token data will be returned as multiple params of the format token_XX, where XX is the two letter token code"

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **ChaseNetConnectGateway**  |  
| gateway  | login  | string  | NetConnect Username  |  
| gateway  | password  | string  | NetConnect Password  |  
| gateway  | mid  | string  | The 12-digit Chase Merchant ID  |  
| gateway  | tid  | string  | The 1 to 3 digit Chase Terminal ID  |  
| gateway  | cid  | string  | The 4 digit Chase Client ID  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, partial authoriation reverse, and void transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  | The first 12 characters must be unique. Capture, partial authorization reverse, and reverse advice transaactions must match the orginal transaction order_id  |  
| transaction  | goods_type  | string  | D = Digital goods purchased, P = Physical goods purchased  |  
| transaction  | eci  | string  | Ecommerce Indicator  |  
| transaction  | cavv  | string  | Cardholder authentication value  |  
| transaction  | reverse_reason  | string  | Token RR: Reversal Reason Code  |  
| transaction  | partial_auth_reverse  | string  | Used to indicate the type of reverse transposaction. Set value to '1' to send a 'partial authorization reverse' transaction otherwise a 'reverse advise' transaction is performed.  |  
| transaction  | authorization_type  | string  | Token P8: Authorization Type Requested: Default value '00'  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  | Cardholder Street Address  |  
| billing_address  | address2  | string  | Extended Cardholder Street Address (ChaseNet and Visa only)  |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```### Cobre Bem (Aprova Facil)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#cobre-bem-aprova-facil "Direct link to Cobre Bem \(Aprova Facil\)")
**URL:** 
**Default Currency:** BRL
**Developer Documentation:** Request documentation at 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **CobreBemAprovaFacilGateway**  |  
| gateway  | login  | string  | Aprova Facil Username  |  
| gateway  | avs_enabled  | string  | Optional - Set this field to true to enable  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | brand  | string  | Optional - specify the card brand  |  
| transaction  | processor  | string  | Optional - specify the preferred Acquirer for the transaction  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | Default is BRL  |  
| transaction  | authorization  | string  | Required only for capture, refund and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  | Company Order ID - used in generating the Authorization field  |  
| transaction  | ip  | string  | Optional  |  
| transaction  | user_data_1  | string  | The CPF of the cardholder; only used if avs_enabled is true on Authorize and Purchase transactions.  |  
| billing_address  | address1  | string  | Only used if avs_enabled is true on Authorize and Purchase transactions.  |  
| billing_address  | zip  | string  | Only used if avs_enabled is true on Authorize and Purchase transactions.  |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CobreBemAprovaFacilGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12345678"  

    }  

  }  

}  

```### Credomatic[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#credomatic "Direct link to Credomatic")
**URL:** 
**Developer Documentation:** '
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **CredomaticGateway**  |  
| gateway  | user  | string  | Your Sucursal Electronica Username  |  
| gateway  | public_key  | string  | Your Sucursal Electronica Public Key  |  
| gateway  | private_key  | string  | Your Sucursal Electronica Private Key  |  
| gateway  | avs_enabled  | string  | Optional - Set this field to true to enable  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number. Note: this field is required on Authorize, Purchase and Capture requests.  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | brand  | string  | Optional - specify the card brand  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | order_id  | string  | Merchant Reference ID (max 20 characters)  |  
| transaction  | authorization  | string  | Required only for capture and void transactions. Obtained from authorize or purchase actions.  |  
| transaction  | processor  | string  | Optional - the Terminal which you want to perform the authorization  |  
| billing_address  | address1  | string  | Only used if avs_enabled is true on Authorize and Purchase transactions.  |  
| billing_address  | address2  | string  | Only used if avs_enabled is true on Authorize and Purchase transactions.  |  
| billing_address  | zip  | string  | Only used if avs_enabled is true on Authorize and Purchase transactions.  |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CredomaticGateway",  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "MyOrderId123",  

      "processor": "INET1125",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "name": "CredomaticGateway"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111"  

    },  

    "transaction": {  

      "authorization": "12.00;123456;MyOrderId123",  

      "processor": "INET1125"  

    }  

  }  

}  

```### CyberSource[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#cybersource "Direct link to CyberSource")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** SOAP Toolkit API 
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen
  * eCheck transactions only support Authorize, Purchase, Refund and Void actions

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **CyberSourceGateway**  |  
| gateway  | login  | string  | CyberSource Merchant ID  |  
| gateway  | password  | string  | CyberSource Transaction Security Key (SOAP Toolkit API)  |  
| gateway  | ignore_avs  | string  | Set this field to any value to enable  |  
| gateway  | ignore_cvv  | string  | Set this field to any value to enable  |  
| gateway  | decline_avs_flags  | string  |   |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | account_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | drivers_license_number  | string  |   |  
| transaction  | drivers_license_state  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| transaction  | user_data_1  | string  | Maps to the 'secCode' field under 'check' - Authorization method used for the transaction (PPD, TEL, WEB).  |  
| transaction  | user_data_2  | string  | Maps to the 'paymentInfo' field under 'check' - Additional payment information on the customer's statement.  |  
| billing_address  | company  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | phone  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "null@cybersource.com",  

      "order_id": "12345678",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "12345678;A1B2C39876;987654321098765;authorize;12.00;USD"  

    }  

  }  

}  

```### Doku[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#doku "Direct link to Doku")
**URL:** 
**Default Currency:** 360
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **DokuGateway**  |  
| gateway  | mid  | string  | Doku MALLID  |  
| gateway  | private_key  | string  | Doku API Shared Key  |  
| gateway  | subid  | string  | CHAINMERCHANT  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for void transactions. Obtained from the purchase action  |  
| transaction  | order_id  | string  | TRANSIDMERCHANT  |  
| transaction  | description  | string  | BASKET  |  
| transaction  | email  | string  |   |  
| transaction  | custom  | string  | ADDITIONALDATA  |  
| transaction  | eci  | string  |   |  
| transaction  | xid  | string  |   |  
| transaction  | authentication_id  | string  | AUTHRESRESPONSECODE  |  
| transaction  | authentication_method  | string  | CAVVALGORITHM  |  
| transaction  | authentication_status  | string  | AUTHRESSTATUS  |  
| transaction  | cavv  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "39dj3i8dj2",  

      "eci": "00",  

      "email": "test@doku.com",  

      "description": "testing item,10000.00,1,10000.00",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```### Elavon My Virtual Merchant[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#elavon-my-virtual-merchant "Direct link to Elavon My Virtual Merchant")
**URL:** 
**Developer Documentation:** . com/VirtualMerchantDemo/download/developerGuide.pdf
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **ElavonGateway**  |  
| gateway  | login  | string  | Elavon SSL Merchant ID  |  
| gateway  | user  | string  | Elavon User ID  |  
| gateway  | password  | string  | Elavon PIN  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | tax  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | xid  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;1234"  

    }  

  }  

}  

```### Element Express (Vantiv Integrated Payments)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#element-express-vantiv-integrated-payments "Direct link to Element Express \(Vantiv Integrated Payments\)")
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **ElementGateway**  |  
| gateway  | merchant_id  | string  | Element Acceptor ID  |  
| gateway  | password  | string  | Element AccountToken  |  
| gateway  | acctid  | string  | Element AccountID  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, void, and reverse transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  | Element field Reference Number  |  
| transaction  | ticket  | string  | Element field Ticket Number  |  
| transaction  | market  | string  | Element field Market Code  |  
| transaction  | terminal_id  | string  | Terminal setting for TerminalID (default value "01")  |  
| transaction  | card_present_code  | string  | Terminal setting for CardPresentCode (default value "NotPresent")  |  
| transaction  | cardholder_present_code  | string  | Terminal setting for CardPresentCode (default value "ECommerce")  |  
| transaction  | card_input_code  | string  | Terminal setting for CardInputCode (default value "ManualKeyed")  |  
| transaction  | input_capability  | string  | Terminal setting for TerminalCapabilityCode (default value "KeyEntered")  |  
| transaction  | operating_environment  | string  | Terminal setting for TerminalEnvironmentCode (default value "ECommerce")  |  
| transaction  | moto_ecommerce_ind  | string  | Terminal setting for MotoECICode (default value "NonAuthenticatedSecureECommerceTransaction")  |  
| transaction  | terminal_type  | string  | Terminal setting for TerminalType (default value "ECommerce")  |  
| transaction  | reverse_reason  | string  | Element field ReversalType  |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | email  | string  |   |  
| billing_address  | phone  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|1111",  

      "amount": 1000  

    }  

  }  

}  

```### Electronic Payment Exchange (EPX)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#electronic-payment-exchange-epx "Direct link to Electronic Payment Exchange \(EPX\)")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **EpxGateway**  |  
| gateway  | cid  | string  | EPX Customer Number (CUST_NBR)  |  
| gateway  | mid  | string  | EPX Merchant Number (MERCH_NBR)  |  
| gateway  | subid  | string  | EPX DBA Number (DBA_NBR)  |  
| gateway  | tid  | string  | EPX Terminal Number (TERMINAL_NBR)  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | number  | string  |   |  
| check  | account_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, reverse, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | currency  | string  |   |  
| transaction  | first_name  | string  | Required only for Check payment type  |  
| transaction  | last_name  | string  | Required only for Check payment type  |  
| transaction  | report_group  | string  | EPX Batch ID (BATCH_ID)  |  
| transaction  | transaction_index  | string  | EPX Transaction Number (TRAN_NBR)  |  
| transaction  | card_present_code  | string  | EPX Card ID (CARD_ID)  |  
| transaction  | moto_ecommerce_ind  | string  | Set value to 'MOTO' when performing MOTO transactions  |  
| transaction  | invoice_number  | string  | EPX Invoice Number (INVOICE_NBR)  |  
| transaction  | order_id  | string  | EPX Order Number (ORDER_NBR)  |  
| transaction  | user_data_1  | string  | EPX User Data (USER_DATA_1)  |  
| transaction  | user_data_2  | string  | EPX User Data (USER_DATA_2)  |  
| transaction  | user_data_3  | string  | EPX User Data (USER_DATA_3)  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```### Federated Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#federated-payments "Direct link to Federated Payments")
**Default Currency:** USD
**URL:** 
  * The Federated gateway does not support a test API. You must enable or disable test mode on an account by account basis with Federated Payments.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **FederatedGateway**  |  
| gateway  | login  | string  | Federated Payments Login  |  
| gateway  | password  | string  | Federated Payments Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions.  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | first_name  | string  |   |  
| shipping_address  | last_name  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```### Federated Payments Canada[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#federated-payments-canada "Direct link to Federated Payments Canada")
**Default Currency:** CAD
**URL:** 
  * The Federated Canada gateway does not support a test API. You must enable or disable test mode on an account by account basis with Federated Payments.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **FederatedCanadaGateway**  |  
| gateway  | login  | string  | Federated Payments Canada Login  |  
| gateway  | password  | string  | Federated Payments Canada Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions.  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | first_name  | string  |   |  
| shipping_address  | last_name  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```### FirstData Compass Gateway[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#firstdata-compass-gateway "Direct link to FirstData Compass Gateway")
**URL:** 
**Default Currency:** 840
  * The Compass Gateway supports the 'authorize' and 'reverse' functions only.
  * A zero 'amount' value performs a credit card verify.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **FirstdataCompassGateway**  |  
| gateway  | login  | string  | Username provided by FirstData  |  
| gateway  | password  | string  | Password provided by FirstData  |  
| gateway  | ssl_cert  | string  | Client SSL certification provided by FirstData. The certificate must be in valid PEM format.  |  
| gateway  | ssl_key  | string  | Client SSL key provided by FirstData. The key should must be in valid PEM format.  |  
| gateway  | ssl_key_password  | string  | Optional ssl key encryption password. Must be provided if 'ssl_key' is encrypted.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | Currency is provided as a 3 digit numeric code. Please note that this field should be a string value.  |  
| transaction  | authorization  | string  | Required only for 'reverse' transactions. Value is obtained from the 'authorize' transaction.  |  
| transaction  | order_id  | string  | Required  |  
| transaction  | division_id  | string  | Required  |  
| transaction  | moto_ecommerce_ind  | string  | Defaults to '7'  |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'reverse' transaction.  

  

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 6,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "authorization": "OK885C;150116"  

    }  

  }  

}  

```### FirstData Global Gateway e4[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#firstdata-global-gateway-e4 "Direct link to FirstData Global Gateway e4")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** . com/entries/407571-First-Data-Global-Gateway-e4-Web-Service-API-Reference-Guide
  * Global Gateway e4 supports both open and tagged refunds. TokenEx by default creates a tagged refund. If a credit_card hash object is included in a refund request, then a open refund request is created.
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **FirstdataE4Gateway**  |  
| gateway  | login  | string  | Gateway ID (Found in your administration terminal settings)  |  
| gateway  | password  | string  | The terminal password  |  
| gateway  | user  | string  | Optional user name associated with the transasction  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | currency  | string  |   |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | xid  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;142"  

    }  

  }  

}  

```### Global Cloud Pay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-cloud-pay "Direct link to Global Cloud Pay")
**Default Currency:** USD
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **GlobalCloudPayGateway**  |  
| gateway  | merchant_id  | string  | GlobalCloudPay Merchant Number  |  
| gateway  | acctid  | string  | GlobalCloudPay Gateway Number  |  
| gateway  | password  | string  | GlobalCloudPay Sign Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | card_issue  | string  | Issuing bank  |  
| transaction  | description  | string  |   |  
| transaction  | custom  | string  | Global Cloud Pay 'csid' field  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCloudPayGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "card_issue": "Bank of china",  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```### Global Collect[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-collect "Direct link to Global Collect")
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **GlobalCollectGateway**  |  
| gateway  | merchant_id  | string  | Global Collect Merchant ID  |  
| gateway  | login  | string  | Global Collect API Key ID  |  
| gateway  | private_key  | string  | Global Collect Secret API Key  |  
| gateway  | endpoint  | string  | In TokenEx's TEST environment, this value can be set to 'preprod' to utilize GlobalCollect's PreProd endpoint  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | invoice_number  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | first_name  | string  |   |  
| shipping_address  | last_name  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```### Global One Pay Gateway[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-one-pay-gateway "Direct link to Global One Pay Gateway")
**URL:** 
**Developer Documentation:** 
  * Global One Pay supports both standard and standalone refunds. TokenEx by default creates a standard refund. If a credit_card hash object is included in a refund request, then a standalone refund request is created.
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen
  * An error of "Invalid HASH field" could mean that the private_key value is incorrect

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **GlobalOnePayGateway**  |  
| gateway  | tid  | string  | Global One Pay Termianl ID  |  
| gateway  | private_key  | string  | Global One Pay Shared Secret  |  
| gateway  | region  | string  | Set to "MCP" when using a multi-currency terminal otherwise this is field is optional  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture and standard refund transactions. Obtained from the authorize or purchase actions  |  
| transaction  | currency  | string  |   |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | operator_id  | string  |   |  
| transaction  | reverse_reason  | string  |   |  
| transaction  | terminal_type  | string  |   |  
| transaction  | moto_ecommerce_ind  | string  | Maps to the "TRANSACTIONTYPE" field  |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  | Maps to the "REGION" field  |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "2JNJDN83"  

    }  

  }  

}  

```### Global Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-payments "Direct link to Global Payments")
**URL:** 
**Developer Documentation:** 
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen
  * Global Payments supports the 'reverse' action

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **GlobalPaymentsGateway**  |  
| gateway  | login  | string  | Global Payments Username  |  
| gateway  | password  | string  | Global Payments Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | ISO 4217 3-letter currency codes. Default: USD  |  
| transaction  | authorization  | string  | Required only for capture, refund, reverse, and void transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | cavv  | string  | Cardholder authentication value  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000  

    }  

  }  

}  

```### iATS Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#iats-payments "Direct link to iATS Payments")
**URL:** 
  * This gateway only supports purchase and refund actions

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **IatsPaymentsGateway**  |  
| gateway  | login  | string  | iATS agent code  |  
| gateway  | password  | string  | iATS password  |  
| gateway  | region  | string  | Set to UK to perform transaction against the UK endpoint  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | account_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for refund transactions. Obtained from purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

The iATS Gateway dows not support 'authorize'.  

This example is a 'purchase' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'capture'.  

This example is a 'refund' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|23",  

      "amount": 1000  

    }  

  }  

}  

```### Isbank (NestPay)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#isbank-nestpay "Direct link to Isbank \(NestPay\)")
**URL:** [www.isbank.com.tr](http://www.isbank.com.tr)
**Default Currency:** TRY
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **IsbankGateway**  |  
| gateway  | login  | string  | Isbank API Account Name  |  
| gateway  | password  | string  | Isbank API password  |  
| gateway  | merchant_id  | string  | Isbank Client ID  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | id  | string  |   |  
| transaction  | report_group  | string  | Group ID  |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | xid  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
| shipping_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```### Litle & Co[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#litle--co "Direct link to Litle & Co")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **LitleGateway**  |  
| gateway  | merchant_id  | string  | Litle Merchant ID  |  
| gateway  | login  | string  | Litle User  |  
| gateway  | password  | string  | Litle Password  |  
| gateway  | endpoint  | string  | Set to 'prelive' to set the gateway endpoint to Litle's prelive test environment. Can only be enabled in TokenEx's TEST environment.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | track_data  | string  | Track 1/Track 2 data  |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | number  | string  |   |  
| check  | account_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, reverse, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | report_group  | string  |   |  
| transaction  | order_source  | string  |   |  
| transaction  | reverse_reason  | string  |   |  
| transaction  | merchant_affiliate  | string  |   |  
| transaction  | merchant_campaign  | string  |   |  
| transaction  | merchant_grouping_id  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
| shipping_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```### Lucy[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#lucy "Direct link to Lucy")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **LucyGateway**  |  
| gateway  | login  | string  | Lucy Gateway Login  |  
| gateway  | password  | string  | Lucy Gateway Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | track_data  | string  | Track 1/Track 2 data  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;397"  

    }  

  }  

}  

```### Maxiopago[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#maxiopago "Direct link to Maxiopago")
**URL:** 
**Default Currency:** BRL
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **MaxipagoGateway**  |  
| gateway  | login  | string  | Maxipago Merchant ID  |  
| gateway  | password  | string  | Maxipago Merchant Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | currency  | string  |   |  
| transaction  | order_id  | string  |   |  
| transaction  | processor  | string  | Defaults to "1" in the sandbox environment and "4" in the production environment  |  
| transaction  | ip  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;12345;3632456",  

      "amount": 1000  

    }  

  }  

}  

```### Merchant e-Solutions[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#merchant-e-solutions "Direct link to Merchant e-Solutions")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **MerchantESolutionsGateway**  |  
| gateway  | login  | string  | MerchantESolutionsGateway Profile ID  |  
| gateway  | password  | string  | MerchantESolutionsGateway Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | moto_ecommerce_ind  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```### Merchant Link TV2G Payment Gateway[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#merchant-link-tv2g-payment-gateway "Direct link to Merchant Link TV2G Payment Gateway")
**URL:** 
  * The 'reverse' action can be used to send a CCTimeout message

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **MerchantLinkGateway**  |  
| gateway  | login  | string  | Company Code assigned by Merchant Link  |  
| gateway  | subid  | string  | Site Code assigned by Merchant Link  |  
| gateway  | ssl_cert  | string  | Client SSL certificate provided by Merchant Link. The certificate must be in valid PEM format.  |  
| gateway  | ssl_key  | string  | Client SSL key provided by Merchant Link. The key should must be in valid PEM format.  |  
| gateway  | ssl_key_password  | string  | Optional SSL key encryption password. Must be provided if 'ssl_key' is encrypted.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | track_1_data  | string  | Track 1 data  |  
| credit_card  | track_2_data  | string  | track 2 data  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for 'capture' transactions. Value is obtained from the 'authorize' transaction.  |  
| transaction  | terminal_id  | string  | Terminal ID assigned by Merchant Link  |  
| transaction  | lane_id  | string  | Lane ID assigned by Merchant Link  |  
| transaction  | transaction_index  | string  | POS Transaction Identifer  |  
| transaction  | pos_version  | string  |   |  
| transaction  | posts  | string  |   |  
| transaction  | date  | string  | Local transaction date  |  
| transaction  | time  | string  | Local transaction time  |  
| transaction  | order_id  | string  | The ID or number generated by the POS system that identifies the customer check / ticket / receipt.  |  
| transaction  | moto_ecommerce_ind  | string  | Defaults to '0'  |  
| transaction  | input_method  | string  | Defaults to 'K'  |  
| transaction  | input_capability  | string  | Defaults to 'B'  |  
| transaction  | authentication_method  | string  | Defaults to 'S'  |  
| transaction  | operating_environment  | string  | Defaults to '1'  |  
| transaction  | pin_capability  | string  | Defaults to 'N'  |  
| transaction  | output_capability  | string  | Defaults to 'B'  |  
| transaction  | prior_transaction_index  | string  | Used for 'reverse' transactions  |  
| transaction  | prior_posts  | string  | Used for 'reverse' transactions  |  
| transaction  | prior_tranaction_type  | string  | Used for 'reverse' transactions  |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "MV0008881815;1111",  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234"  

    }  

  }  

}  

```### Moneris eSelect Plus[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#moneris-eselect-plus "Direct link to Moneris eSelect Plus")
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **MonerisGateway**  |  
| gateway  | login  | string  | Moneris Store ID  |  
| gateway  | password  | string  | Moneris API Token  |  
| gateway  | cvv_enabled  | string  | Enable CVV support. Default is false.  |  
| gateway  | avs_enabled  | string  | Enable AVS support. Default is false.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | crypt_type  | string  | Default value is 7  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```### Moneris (US) eSelect Plus[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#moneris-us-eselect-plus "Direct link to Moneris \(US\) eSelect Plus")
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **MonerisUsGateway**  |  
| gateway  | login  | string  | Moneris Store ID  |  
| gateway  | password  | string  | Moneris API Token  |  
| gateway  | cvv_enabled  | string  | Enable CVV support. Default is false.  |  
| gateway  | avs_enabled  | string  | Enable AVS support. Default is false.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | number  | string  |   |  
| check  | account_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | crypt_type  | string  | Default value is 7  |  
| transaction  | order_source  | string  | ACH SEC value. Default to "web"  |  
| transaction  | drivers_license_number  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```### NMI[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#nmi "Direct link to NMI")
**URL:** 
**Default Currency:** USD
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **NmiGateway**  |  
| gateway  | login  | string  | NMI Login  |  
| gateway  | password  | string  | NMI Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | bank_name  | string  |   |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | account_type  | string  |   |  
| check  | number  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | processor  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| transaction  | card_number  | string  | Required only for refund transactions. Last 4 numbers of the credit card  |  
| transaction  | first_name  | string  | Optional for refund transactions  |  
| transaction  | last_name  | string  | Optional for refund transactions  |  
| transaction  | zip  | string  | Optional for refund transactions  |  
| billing_address  | company  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | first_name  | string  |   |  
| shipping_address  | last_name  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | phone  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```### Optimal Payments NETBANX[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#optimal-payments-netbanx "Direct link to Optimal Payments NETBANX")
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **OptimalPaymentNetbanxGateway**  |  
| gateway  | acctid  | string  | Optimal Payments Account Number  |  
| gateway  | password  | string  | Optimal Payments API Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "c95ad35b-3d39-451f-8d82-46e1f9033e20"  

    }  

  }  

}  

```### Orbital[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#orbital "Direct link to Orbital")
**URL:** 
**Default Currency:** CAD
**Developer Documentation:** 
  * AVS is only supported for countries: US CA UK GB
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **OrbitalGateway**  |  
| gateway  | merchant_id  | string  | Orbital Merchant ID  |  
| gateway  | login  | string  | Orbital User  |  
| gateway  | password  | string  | Orbital Password  |  
| gateway  | bin  | string  | Default (salem) is 000001 otherwise 000002 is used  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | account_type  | string  |   |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | Default value is used if this value is not set. Format ISO alpha code  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | terminal_id  | string  | Default 001  |  
| transaction  | industry_type  | string  |   |  
| transaction  | comments  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | xid  | string  |   |  
| transaction  | aav  | string  |   |  
| transaction  | recurring_ind  | string  |   |  
| transaction  | transaction_index  | string  | Void requests only; TxRefIdx  |  
| transaction  | reversal_retry_number  | string  | Void requests only; ReversalRetryNumber  |  
| transaction  | online_reversal_ind  | string  | Void requests only; OnlineReversalInd  |  
| transaction  | card_indicators  | string  |   |  
| transaction  | dwwalletid  | string  |   |  
| transaction  | dwsli  | string  |   |  
| transaction  | dwincentiveind  | string  |   |  
| transaction  | digitalwallettype  | string  |   |  
| transaction  | processor  | string  | Check payments only, ECPAuthMethod  |  
| transaction  | authentication_method  | string  | Check payments only, BankPmtDelv, Default value is 'B'  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  | To enable AVS, this value mut be a supported country value: US CA UK GB  |  
| billing_address  | phone  | string  |   |  
| billing_address  | dest_address1  | string  |   |  
| billing_address  | dest_address2  | string  |   |  
| billing_address  | dest_city  | string  |   |  
| billing_address  | dest_state  | string  |   |  
| billing_address  | dest_zip  | string  |   |  
| billing_address  | dest_country  | string  |   |  
| billing_address  | dest_phone  | string  |   |  
| billing_address  | dest_name  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;2345"  

    }  

  }  

}  

```### Pay Dollar[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#pay-dollar "Direct link to Pay Dollar")
**Default Currency:** 702
**URL:** 
  * You must whitelist the TokenEx production IPs with PayDollar to use this integeration in the production environment
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PayDollarGateway**  |  
| gateway  | merchant_id  | string  | PayDollar Merchant Number  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | first_name  | string  |   |  
| billing_address  | last_name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayDollarGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```### PayPal Payflow Pro[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#paypal-payflow-pro "Direct link to PayPal Payflow Pro")
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PayflowGateway**  |  
| gateway  | login  | string  | Payflow Login  |  
| gateway  | password  | string  | Payflow Password  |  
| gateway  | partner  | string  | Default value is 'Paypal'  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions.  |  
| transaction  | currency  | string  | ISO 4217 3-letter currency codes. Default: USD  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  | Customer IP address  |  
| transaction  | customer  | string  |   |  
| transaction  | po_number  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | comment  | string  |   |  
| transaction  | comment2  | string  |   |  
| transaction  | taxamt  | string  |   |  
| transaction  | freightamt  | string  |   |  
| transaction  | dutyamt  | string  |   |  
| transaction  | discountamt  | string  |   |  
| transaction  | authentication_status  | string  |   |  
| transaction  | authentication_id  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | xid  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | phone  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "A70A6D372173"  

    }  

  }  

}  

```### Payment Brands[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#payment-brands "Direct link to Payment Brands")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PaymentBrandsGateway**  |  
| gateway  | login  | string  | Payment Brands Login  |  
| gateway  | password  | string  | Payment Brands Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | description  | string  | transactionDescription  |  
| transaction  | ip  | string  |   |  
| transaction  | order_id  | string  | customerOrderId  |  
| transaction  | customer  | string  | customerReference  |  
| transaction  | invoice_number  | string  | invoiceReferenceNumber  |  
| transaction  | date  | string  | orderDate  |  
| transaction  | email  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | first_name  | string  |   |  
| billing_address  | last_name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2018",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 100,  

      "billing_address": {  

        "first_name": "Bob",  

        "last_name": "Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```### Payment Express[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#payment-express "Direct link to Payment Express")
**URL:** 
**Developer Documentation:** . com/technical_resources/ecommerce_nonhosted/pxpost.html
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PaymentExpressGateway**  |  
| gateway  | login  | string  | Payment Express PXPOST Username  |  
| gateway  | password  | string  | Payment Express PXPOST Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for captureand refund transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | currency  | string  |   |  
| transaction  | moto_ecommerce_ind  | string  | Can be used to set Payment Express field ClientType  |  
| transaction  | user_data_1  | string  | Can be used to set Payment Express field TxnData1  |  
| transaction  | user_data_2  | string  | Can be used to set Payment Express field TxnData2  |  
| transaction  | user_data_3  | string  | Can be used to set Payment Express field TxnData3  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency", "AUD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```### Paymill[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#paymill "Direct link to Paymill")
**Default Currency:** EUR
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PaymillGateway**  |  
| gateway  | public_key  | string  | Paymill API Public Key  |  
| gateway  | private_key  | string  | Paymill API Private Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions.  |  
| transaction  | description  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564;234234234"  

    }  

  }  

}  

```### PayTrace[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#paytrace "Direct link to PayTrace")
**URL:** 
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PayTraceGateway**  |  
| gateway  | login  | string  | PayTrace Login ID  |  
| gateway  | password  | string  | PayTrace Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```### PayULatam[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#payulatam "Direct link to PayULatam")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PayuLatamGateway**  |  
| gateway  | merchant_id  | string  | PayU Merchant ID  |  
| gateway  | acctid  | string  | PayU Account ID  |  
| gateway  | login  | string  | PayU API Login  |  
| gateway  | private_key  | string  | PayU API Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2021  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | Currency type. Default is USD.  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from authorize or purchase actions  |  
| transaction  | order_id  | string  | Required for authorize and purchase actions  |  
| transaction  | description  | string  | Transaction description  |  
| transaction  | payment_country  | string  | Country from which the payment originates  |  
| transaction  | user_data_1  | string  | Maps to the Buyer DNI Number field  |  
| transaction  | user_data_2  | string  | Maps to the Payer DNI Number field  |  
| transaction  | user_data_3  | string  | Maps to the Payer DNI Type field (see PayU docs for acceptable values)  |  
| transaction  | user_data_4  | string  | Maps to the Payer Birthdate field  |  
| transaction  | user_data_5  | string  | Maps to the Months field within the Months Without Interest area  |  
| transaction  | user_data_6  | string  | Maps to the Bank field within the Months Without Interest area  |  
| transaction  | session_id  | string  | Maps to the Device Session ID field  |  
| transaction  | ip  | string  | Maps to the IP Address field  |  
| transaction  | metadata  | string  | Maps to the Cookie field  |  
| transaction  | installments_number  | string  | The number of installments to schedule (optional, default is 1)  |  
| transaction  | additional_data  | string  | Maps to the UserAgent field  |  
| transaction  | billing_address  | hash  | Information pertaining to the Payer (see individual fields below)  |  
| transaction  | shipping_address  | hash  | Information pertaining to the Buyer (see individual fields below)  |  
| billing_address  | name  | string  |   |  
| billing_address  | email  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | email  | string  |   |  
| shipping_address  | phone  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

	  "currency":"USD",  

	  "order_id":"testPanama1",  

	  "description":"Transaction description 12345",  

	  "installments_number":"1",  

	  "payment_country": "PA",  

	  "ip":"127.0.0.1",  

	  "metadata":"optional_cookie_information",  

	  "additional_data":"User Agent Info",  

	  "user_data_1":"123456789",  

	  "user_data_2":"987654321",  

	  "user_data_3":"IDC",  

	  "user_data_4":"1/1/1900",  

	  "user_data_5":"12",  

	  "user_data_6":"Santander",  

	  "shipping_address": {  

	    "name": "APPROVED",  

		"address1": "Calle 93 B 17 - 25",  

		"city": "Panama",  

		"state": "Panama",  

		"zip": "000000",  

		"country": "PA",  

		"phone": "5582254",  

		"email":"test@payulatam.com"  

	  },  

	  "billing_address": {  

	    "name": "APPROVED",  

		"email":"test@payulatam.com"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019|12.00"  

    }  

  }  

}  

```### PesoPay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#pesopay "Direct link to PesoPay")
**Default Currency:** 702
**URL:** 
  * You must whitelist the TokenEx production IPs with PesoPay to use this integeration in the production environment
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PesoPayGateway**  |  
| gateway  | merchant_id  | string  | PesoPay Merchant Number  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | order_id  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | first_name  | string  |   |  
| billing_address  | last_name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PesoPayGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```### PromisePay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#promisepay "Direct link to PromisePay")
**URL:** 
**Developer Documentation:** 
  * The PromisePay integeratsion only supports the 'purchase' action

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **PromisePayGateway**  |  
| gateway  | login  | string  | PromisePay Login  |  
| gateway  | private_key  | string  | PromisePay API Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| check  | name  | string  | Name under which the account is maintained at the bank  |  
| check  | routing_number  | string  |   |  
| check  | account_number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| check  | account_type  | string  |   |  
| check  | bank_name  | string  |   |  
| check  | account_type  | string  |   |  
| check  | account_holder_type  | string  |   |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PromisePayGateway",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Integeration does not support capture  

```### QuickBooks Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#quickbooks-payments "Direct link to QuickBooks Payments")
**URL:** 
**Developer Documentation:** 
  * In order to access the TokenEx integration for QuickBooks, you must create an Intuit account and login to the following URLs to generate your Access Tokens
    * [Intuit Account](https://accounts.intuit.com/signup.html)

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **QuickbooksGateway**  |  
| gateway  | cid  | string  | Maps to **client_id**  |  
| gateway  | password  | string  | Maps to **client_secret**  |  
| gateway  | merchant_id  | string  | Maps to **access_token**  |  
| gateway  | merchantpin  | string  | Maps to **refresh_token** - Supply this value to refresh the Access Token  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | 3-letter currency code  |  
| transaction  | order_id  | string  | Maps to **commercialCardCode** - Used to set an optional Transaction ID for tracking corporate expenses  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Here St",  

        "city": "Anywhere",  

        "state": "OH",  

        "country": "US",  

        "zip": "12345"  

      },  

      "order_id": "1234567890"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "ABCDEFGHI123|1234567890abcdef1234567890abcdef"  

    }  

  }  

}  

```### Qvalent (Westpac/PayWay)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#qvalent-westpacpayway "Direct link to Qvalent \(Westpac/PayWay\)")
**URL:** 
**Default Currency:** AUD
**Developer Documentation:** 
  * You must add the TokenEx TEST and PROD environment IP addresses to your account

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **QvalentGateway**  |  
| gateway  | login  | string  | PayWay API Username  |  
| gateway  | password  | string  | PayWay API Password  |  
| gateway  | merchant_id  | string  | PayWay Merchant ID  |  
| gateway  | ssl_cert  | string  | Client SSL certification provided by PayWay. The certificate must be in valid PEM format.  |  
| gateway  | ssl_key  | string  | Client SSL key provided by PayWay. The key should must be in valid PEM format.  |  
| gateway  | ssl_key_password  | string  | Optional ssl key encryption password. Must be provided if 'ssl_key' is encrypted.  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | xid  | string  |   |  
| transaction  | eci  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "1234512345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```### Realex[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#realex "Direct link to Realex")
**URL:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **RealexGateway**  |  
| gateway  | login  | string  | Realex API Merchant ID  |  
| gateway  | password  | string  | Realex API Shared Secret  |  
| gateway  | acctid  | string  | Realex Merchant Sub-Account (defaults to 'internet')  |  
| gateway  | merchantpin  | string  | Realex API Rebate Password (used only on **Refund** transactions)  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2020  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  | Currency Code (see provider API docs for list)  |  
| transaction  | description  | string  | Transaction description (displayed in RealControl)  |  
| transaction  | order_id  | string  | Unique Order ID associated with the transaction.  |  
| transaction  | moto_ecommerce_ind  | string  | Transaction channel indicator. Valid values are 'MOTO' and 'ECOM'.  |  
| transaction  | customer  | string  | Customer Number  |  
| transaction  | invoice_id  | string  | Product ID  |  
| transaction  | ip  | string  | Customer IP  |  
| transaction  | authorization  | string  | Required only for Capture, Refund, and Void transactions. Obtained from the Authorize or Purchase actions.  |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "6",  

      "year": "2020",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "description": "Sample Authorize Transaction",  

      "order_id": "XXXXXXXXXXX",  

      "moto_ecommerce_ind": "ECOM",  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      },  

      "shipping_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXX;XXXXX"  

    }  

  }  

}  

```### Sage Payments[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#sage-payments "Direct link to Sage Payments")
**URL:** 
**Developer Documentation:** 
  * The Sage gateway does not support a test API. You must enable or disable test mode on an account by account basis with Sage.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **SageGateway**  |  
| gateway  | login  | string  | Sage Username  |  
| gateway  | password  | string  | Sage Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture and void transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | fax  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;bankcard\"",  

      "amount": 1000  

    }  

  }  

}  

```### SagePay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#sagepay "Direct link to SagePay")
**URL:** 
**Default Currency:** GBP
**Developer Documentation:** 
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **SagePayGateway**  |  
| gateway  | login  | string  | SagePay Vendor ID  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
| shipping_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "name": "Bob Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;1111;2342",  

      "amount": 1000  

    }  

  }  

}  

```### Secure Net[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#secure-net "Direct link to Secure Net")
**URL:** 
**Developer Documentation:** . com/files/Gateway_Implementation_Guide_4_1_5_Final.pdf
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **SecureNetGateway**  |  
| gateway  | login  | string  | SecureNet ID  |  
| gateway  | password  | string  | SecureNet SecureKey  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | invoice_number  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | goods_type  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| shipping_address  | first_name  | string  |   |  
| shipping_address  | last_name  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "114187038|10.00|1111",  

      "amount": 1000  

    }  

  }  

}  

```### Six Payment Services (3CWeb2Pay)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#six-payment-services-3cweb2pay "Direct link to Six Payment Services \(3CWeb2Pay\)")
**URL:** 
**Default Currency:** USD
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **SixGateway**  |  
| gateway  | login  | string  | Six Payment Services Merchant ID  |  
| gateway  | password  | string  | Six Payment Services Validation Code  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | url  | string  |   |  
| transaction  | card_issue  | string  | CardIssueYYMM  |  
| transaction  | card_issue_no  | string  |   |  
| transaction  | user_data_1  | string  |   |  
| transaction  | user_data_2  | string  |   |  
| transaction  | user_data_3  | string  |   |  
| transaction  | user_data_4  | string  |   |  
| transaction  | user_data_5  | string  |   |  
| transaction  | option_flags  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;3435\"",  

      "amount": 1000  

    }  

  }  

}  

```### Stripe[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#stripe "Direct link to Stripe")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** 
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **StripeGateway**  |  
| gateway  | login  | string  | Stripe Secret API Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | track_data  | string  | Track 1/Track 2 data  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | idempotency_key  | string  |   |  
| transaction  | metadata  | string  | Pipe delimited key value pairs. Ex: key1=value1|key2=value2|key3=value3  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```### Transaction Network Services (TNS)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#transaction-network-services-tns "Direct link to Transaction Network Services \(TNS\)")
**URL:** 
**Default Currency:** USD
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **TnsGateway**  |  
| gateway  | merchant_id  | string  | TNS Merchant ID  |  
| gateway  | password  | string  | TNS API Password  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | currency  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| shipping_address  | name  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```### TransFirst[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#transfirst "Direct link to TransFirst")
**URL:** 
  * The TransFirst classic gateway does not support the 'authorize' or 'capture' actions.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **TransFirstGateway**  |  
| gateway  | login  | string  | TransFirst Merchant ID  |  
| gateway  | password  | string  | TransFirst RegKey  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for refund and void transactions. Obtained from the purchase action.  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

Note: This gateway does not support the 'authorize' action.  

This example is a 'purchase' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'void' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 5,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111"  

    }  

  }  

}  

```### TSYS[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#tsys "Direct link to TSYS")
**URL:** 
**Developer Documentation:**  (TransITAPI3.0FileSpec)
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **TsysGateway**  |  
| gateway  | login  | string  | TSYS Device ID  |  
| gateway  | password  | string  | TSYS Transaction Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | order_id  | string  |   |  
| transaction  | order_source  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | zip  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "03847424452"  

    }  

  }  

}  

```### USA ePay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#usa-epay "Direct link to USA ePay")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** 
**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **UsaEpayTransactionGateway**  |  
| gateway  | login  | string  | USAePay Source Key  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | invoice_number  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | cavv  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | user_data_1  | string  |   |  
| transaction  | user_data_2  | string  |   |  
| transaction  | user_data_3  | string  |   |  
| transaction  | user_data_4  | string  |   |  
| transaction  | user_data_5  | string  |   |  
| transaction  | split_2_key  | string  | Split payment account #2  |  
| transaction  | split_3_key  | string  | Split payment account #3  |  
| transaction  | split_2_amount  | integer  | Split payment amount #2. Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | split_3_amount  | integer  | Split payment amount #3. Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | split_2_description  | string  | Split payment description #2  |  
| transaction  | split_3_description  | string  | Split payment description #3  |  
| transaction  | split_on_error  | string  | Action to take upon error when utilizing split payments  |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | first_name  | string  |   |  
| billing_address  | last_name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| shipping_address  | company  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
| shipping_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```### Vantiv Online Systems (610 Interface)[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#vantiv-online-systems-610-interface "Direct link to Vantiv Online Systems \(610 Interface\)")
**URL:** 
**Developer Documentation:** 
  * To use a low value token instead of a credit card, put the token into the credit card number field and also send a the token format value in the 'token_id' field per Vantiv's documentation. This is suported for any transaction type.
  * To perform a Vantiv Token Conversion only, set the "authorization_type" field to a value of "token_convert". This is only supported on an authorize transaction call.
  * The 'reverse' transaction type maps to "2.2.1. 9 Credit Card Full/Partial Authorization Reversal Request"
  * The 'void' transaction type maps to "2.4.1.3 Credit Card Reversal (Void) Request)"

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **VantivOnlineSystemsGateway**  |  
| gateway  | login  | string  | Vantiv SSL Username  |  
| gateway  | password  | string  | Vantiv SSL Username  |  
| gateway  | mid  | string  | The 12 digit Vantiv Merchant ID  |  
| gateway  | tid  | string  | The 1 to 3 digit Vantiv Terminal ID  |  
| gateway  | bid  | string  | The 1 to 4 digit Vanitv Bank ID  |  
| gateway  | network  | string  | Vantiv Network Routing  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for refund, reverse, and void transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | stan  | string  | System Trace Audit Number  |  
| transaction  | date  | string  | Local Transaction Date MMDDYY  |  
| transaction  | time  | string  | Local Transaction Time hhmmss  |  
| transaction  | pos_entry_mode  | string  | Point-of-Service Entry Mode  |  
| transaction  | pos_condition_code  | string  | Point-of-Service Condition Code  |  
| transaction  | lane_id  | string  |   |  
| transaction  | additional_data  | string  | Additional Data (Last Retrieval Reference Number)  |  
| transaction  | original_rrn  | string  | Original Retrieval Reference Number  |  
| transaction  | input_capability  | string  | Point-of-Service Device Capability Code  |  
| transaction  | customer  | string  | P.O. Number/Customer Code  |  
| transaction  | merchant_name  | string  | Merchant Name  |  
| transaction  | merchant_city  | string  | Merchant City  |  
| transaction  | merchant_state  | string  | Merchant State  |  
| transaction  | customer_id  | string  | Customer ID  |  
| transaction  | tax  | string  |   |  
| transaction  | trace  | string  | Trace Data 1 (Echo Data)  |  
| transaction  | order_id  | string  | Merchant Reference Number  |  
| transaction  | avv  | string  | Group 003 UCAF Collection Indicator + Accountholder Authentication Value  |  
| transaction  | pos_data_code  | string  |   |  
| transaction  | processing_indicators  | string  | Optional Processing Indicators  |  
| transaction  | token_id  | string  | Token ID Value (When this value is set, the PAN data is treated as a token using Group 028)  |  
| transaction  | cavv  | string  |   |  
| transaction  | ip  | string  | IP Address  |  
| transaction  | xid  | string  |   |  
| transaction  | eci  | string  |   |  
| transaction  | clerk  | string  |   |  
| transaction  | token_time  | string  |   |  
| transaction  | token_date  | string  |   |  
| transaction  | api_transaction_id  | string  | API Transaction ID  |  
| transaction  | web_session_id  | string  | Customer Web Session (Browser) ID  |  
| transaction  | authorization_type  | string  | Set this field to 'token_convert' to perform a Vantiv Token Convert function. This is only supported on an 'authorize' transaction call.  |  
| transaction  | user_data_1  | string  | Group 045 Synchrony Promo value (One BER-TLV data object)  |  
| transaction  | reverse_amount  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  | Address 1  |  
| billing_address  | address2  | string  | Address 2  |  
| billing_address  | zip  | string  | Zip Code  |  
| billing_address  | city  | string  | City  |  
| billing_address  | state  | string  | State  |  
| billing_address  | country  | string  | Country  |  
| billing_address  | phone  | string  | Phone  |  
| billing_address  | email  | string  | Email Address  |  
| billing_address  | country  | string  | Country  |  
| shipping_address  | address1  | string  | Address 1  |  
| shipping_address  | address2  | string  | Address 2  |  
| shipping_address  | zip  | string  | Zip Code  |  
| shipping_address  | city  | string  | City  |  
| shipping_address  | state  | string  | State  |  
| shipping_address  | country  | string  | Country  |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345678901234",  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "0002000600",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "00100037;238704; Z;A;180650201010430;BKTY",  

      "amount": 1000,  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "4002000300",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN"  

    }  

  }  

}  

```### WePay[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#wepay "Direct link to WePay")
**URL:** 
**Developer Documentation:** 
**Default Currency:** USD
  * The WePay account must have the tokenization feature enabled. Please enable this feature before using the integration.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **WepayGateway**  |  
| gateway  | login  | string  | WePay Client ID  |  
| gateway  | password  | string  | WePay Access Token  |  
| gateway  | acctid  | string  | WePay Account ID  |  
| gateway  | private_key  | string  | WePay Client Secret  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | authorization  | string  | Required only for capture, refund, and void transactions. Obtained from the authorize or purchase actions  |  
| transaction  | email  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | order_source  | string  | WePay original_device  |  
| transaction  | description  | string  | WePay short_description  |  
| transaction  | comment  | string  | WePay long_description  |  
| transaction  | goods_type  | string  | WePay type (Default is 'goods')  |  
| transaction  | url  | string  | WePay callback_uri  |  
| transaction  | order_id  | string  | WePay reference_id  |  
| transaction  | invoice_number  | string  | WePay unique_id  |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WepayGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "transaction": {  

      "amount": 0,  

      "authorization": "10000019|2332"  

    }  

  }  

}  

```### Worldpay Corporate[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#worldpay-corporate "Direct link to Worldpay Corporate")
**URL:** 
**Default Currency:** GBP
**Developer Documentation:** 
  * When a non-fractional currency is supplied, 'amount' should be specified with an explicit 2 decimal places. Example for JPY currency: amount of 3000 = 30 Yen

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **WorldpayGateway**  |  
| gateway  | login  | string  | Worldpay XMl Login  |  
| gateway  | password  | string  | Worldpay XML Password  |  
| gateway  | merchant_id  | string  | Worldpay Merchant Code  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| credit_card  | brand  | string  | Card brand  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | description  | string  |   |  
| transaction  | ip  | string  |   |  
| transaction  | email  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| billing_address  | name  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```### Worldpay US[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#worldpay-us "Direct link to Worldpay US")
**URL:** 
**Default Currency:** USD
**Developer Documentation:** 
  * The Worldpay US gateway does not support a dedicated test API endpoint. Test cards provided by Worldpay can be used for testing.

**Supported Parameters**  
| Parent  | Field Name  | Type  | Notes  |  
| --- | --- | --- | --- |  
| gateway  | name  | string  | **WorldpayUsGateway**  |  
| gateway  | acctid  | string  | Worldpay Account ID  |  
| gateway  | subid  | string  | Worldpay Sub ID  |  
| gateway  | merchantpin  | string  | Worldpay Merchant PIN  |  
| credit_card  | number  | string  | This is your TokenEx Token - Tokenex will replace the Token with the Detokenized number  |  
| credit_card  | month  | string  | 1 or 2 digit value. Example: 11  |  
| credit_card  | year  | string  | 4 digit value. Example: 2017  |  
| credit_card  | verification_value  | string  | CVV/CSC  |  
| credit_card  | first_name  | string  | Cardholder first name  |  
| credit_card  | last_name  | string  | Cardholder last name  |  
| transaction  | amount  | integer  | Transaction amount in cents. Example: $10.00 should be sent as 1000  |  
| transaction  | currency  | string  |   |  
| transaction  | authorization  | string  | Required only for capture, void, and refund transactions. Obtained from the authorize or purchase transactions  |  
| transaction  | order_id  | string  |   |  
| transaction  | customer  | string  |   |  
| transaction  | billing_address  | hash  |   |  
| transaction  | shipping_address  | hash  |   |  
| billing_address  | company  | string  |   |  
| billing_address  | address1  | string  |   |  
| billing_address  | address2  | string  |   |  
| billing_address  | city  | string  |   |  
| billing_address  | state  | string  |   |  
| billing_address  | zip  | string  |   |  
| billing_address  | country  | string  |   |  
| billing_address  | phone  | string  |   |  
| billing_address  | email  | string  |   |  
| billing_address  | ip  | string  |   |  
| shipping_address  | address1  | string  |   |  
| shipping_address  | address2  | string  |   |  
| shipping_address  | city  | string  |   |  
| shipping_address  | state  | string  |   |  
| shipping_address  | zip  | string  |   |  
| shipping_address  | country  | string  |   |  
Authorize Sample
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|257140011",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2020",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12.00;PA"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "network": "XXXXXXXXX",  

      "avs_enabled": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "brand": "Visa"  

    },  

    "transaction": {  

      "amount": 1200,  

      "tax": 0,  

      "currency": "BRL",  

      "payment_country": "BRA",  

      "recurring_ind": 1,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CobreBemAprovaFacilGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12345678"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CredomaticGateway",  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "MyOrderId123",  

      "processor": "INET1125",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "name": "CredomaticGateway"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111"  

    },  

    "transaction": {  

      "authorization": "12.00;123456;MyOrderId123",  

      "processor": "INET1125"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "null@cybersource.com",  

      "order_id": "12345678",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "12345678;A1B2C39876;987654321098765;authorize;12.00;USD"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "39dj3i8dj2",  

      "eci": "00",  

      "email": "test@doku.com",  

      "description": "testing item,10000.00,1,10000.00",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;1234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'reverse' transaction.  

  

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 6,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "authorization": "OK885C;150116"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;142"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCloudPayGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "card_issue": "Bank of china",  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "2JNJDN83"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'authorize'.  

This example is a 'purchase' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'capture'.  

This example is a 'refund' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|23",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;397"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;12345;3632456",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "MV0008881815;1111",  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "c95ad35b-3d39-451f-8d82-46e1f9033e20"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;2345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayDollarGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "A70A6D372173"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2018",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 100,  

      "billing_address": {  

        "first_name": "Bob",  

        "last_name": "Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency", "AUD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564;234234234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

	  "currency":"USD",  

	  "order_id":"testPanama1",  

	  "description":"Transaction description 12345",  

	  "installments_number":"1",  

	  "payment_country": "PA",  

	  "ip":"127.0.0.1",  

	  "metadata":"optional_cookie_information",  

	  "additional_data":"User Agent Info",  

	  "user_data_1":"123456789",  

	  "user_data_2":"987654321",  

	  "user_data_3":"IDC",  

	  "user_data_4":"1/1/1900",  

	  "user_data_5":"12",  

	  "user_data_6":"Santander",  

	  "shipping_address": {  

	    "name": "APPROVED",  

		"address1": "Calle 93 B 17 - 25",  

		"city": "Panama",  

		"state": "Panama",  

		"zip": "000000",  

		"country": "PA",  

		"phone": "5582254",  

		"email":"test@payulatam.com"  

	  },  

	  "billing_address": {  

	    "name": "APPROVED",  

		"email":"test@payulatam.com"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019|12.00"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PesoPayGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PromisePayGateway",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Integeration does not support capture  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Here St",  

        "city": "Anywhere",  

        "state": "OH",  

        "country": "US",  

        "zip": "12345"  

      },  

      "order_id": "1234567890"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "ABCDEFGHI123|1234567890abcdef1234567890abcdef"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "1234512345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "6",  

      "year": "2020",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "description": "Sample Authorize Transaction",  

      "order_id": "XXXXXXXXXXX",  

      "moto_ecommerce_ind": "ECOM",  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      },  

      "shipping_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXX;XXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;bankcard\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "name": "Bob Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;1111;2342",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "114187038|10.00|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;3435\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'authorize' action.  

This example is a 'purchase' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'void' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 5,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "03847424452"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345678901234",  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "0002000600",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "00100037;238704; Z;A;180650201010430;BKTY",  

      "amount": 1000,  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "4002000300",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WepayGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "transaction": {  

      "amount": 0,  

      "authorization": "10000019|2332"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|257140011",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2020",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12.00;PA"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "network": "XXXXXXXXX",  

      "avs_enabled": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "brand": "Visa"  

    },  

    "transaction": {  

      "amount": 1200,  

      "tax": 0,  

      "currency": "BRL",  

      "payment_country": "BRA",  

      "recurring_ind": 1,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CobreBemAprovaFacilGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12345678"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CredomaticGateway",  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "MyOrderId123",  

      "processor": "INET1125",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "name": "CredomaticGateway"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111"  

    },  

    "transaction": {  

      "authorization": "12.00;123456;MyOrderId123",  

      "processor": "INET1125"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "null@cybersource.com",  

      "order_id": "12345678",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "12345678;A1B2C39876;987654321098765;authorize;12.00;USD"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "39dj3i8dj2",  

      "eci": "00",  

      "email": "test@doku.com",  

      "description": "testing item,10000.00,1,10000.00",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;1234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'reverse' transaction.  

  

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 6,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "authorization": "OK885C;150116"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;142"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCloudPayGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "card_issue": "Bank of china",  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "2JNJDN83"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'authorize'.  

This example is a 'purchase' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'capture'.  

This example is a 'refund' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|23",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;397"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;12345;3632456",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "MV0008881815;1111",  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "c95ad35b-3d39-451f-8d82-46e1f9033e20"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;2345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayDollarGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "A70A6D372173"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2018",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 100,  

      "billing_address": {  

        "first_name": "Bob",  

        "last_name": "Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency", "AUD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564;234234234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

	  "currency":"USD",  

	  "order_id":"testPanama1",  

	  "description":"Transaction description 12345",  

	  "installments_number":"1",  

	  "payment_country": "PA",  

	  "ip":"127.0.0.1",  

	  "metadata":"optional_cookie_information",  

	  "additional_data":"User Agent Info",  

	  "user_data_1":"123456789",  

	  "user_data_2":"987654321",  

	  "user_data_3":"IDC",  

	  "user_data_4":"1/1/1900",  

	  "user_data_5":"12",  

	  "user_data_6":"Santander",  

	  "shipping_address": {  

	    "name": "APPROVED",  

		"address1": "Calle 93 B 17 - 25",  

		"city": "Panama",  

		"state": "Panama",  

		"zip": "000000",  

		"country": "PA",  

		"phone": "5582254",  

		"email":"test@payulatam.com"  

	  },  

	  "billing_address": {  

	    "name": "APPROVED",  

		"email":"test@payulatam.com"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019|12.00"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PesoPayGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PromisePayGateway",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Integeration does not support capture  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Here St",  

        "city": "Anywhere",  

        "state": "OH",  

        "country": "US",  

        "zip": "12345"  

      },  

      "order_id": "1234567890"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "ABCDEFGHI123|1234567890abcdef1234567890abcdef"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "1234512345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "6",  

      "year": "2020",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "description": "Sample Authorize Transaction",  

      "order_id": "XXXXXXXXXXX",  

      "moto_ecommerce_ind": "ECOM",  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      },  

      "shipping_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXX;XXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;bankcard\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "name": "Bob Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;1111;2342",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "114187038|10.00|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;3435\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'authorize' action.  

This example is a 'purchase' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'void' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 5,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "03847424452"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345678901234",  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "0002000600",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "00100037;238704; Z;A;180650201010430;BKTY",  

      "amount": 1000,  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "4002000300",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WepayGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "transaction": {  

      "amount": 0,  

      "authorization": "10000019|2332"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|257140011",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2020",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12.00;PA"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "network": "XXXXXXXXX",  

      "avs_enabled": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "brand": "Visa"  

    },  

    "transaction": {  

      "amount": 1200,  

      "tax": 0,  

      "currency": "BRL",  

      "payment_country": "BRA",  

      "recurring_ind": 1,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CobreBemAprovaFacilGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12345678"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CredomaticGateway",  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "MyOrderId123",  

      "processor": "INET1125",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "name": "CredomaticGateway"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111"  

    },  

    "transaction": {  

      "authorization": "12.00;123456;MyOrderId123",  

      "processor": "INET1125"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "null@cybersource.com",  

      "order_id": "12345678",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "12345678;A1B2C39876;987654321098765;authorize;12.00;USD"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "39dj3i8dj2",  

      "eci": "00",  

      "email": "test@doku.com",  

      "description": "testing item,10000.00,1,10000.00",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;1234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'reverse' transaction.  

  

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 6,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "authorization": "OK885C;150116"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;142"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCloudPayGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "card_issue": "Bank of china",  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "2JNJDN83"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'authorize'.  

This example is a 'purchase' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'capture'.  

This example is a 'refund' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|23",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;397"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;12345;3632456",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "MV0008881815;1111",  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "c95ad35b-3d39-451f-8d82-46e1f9033e20"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;2345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayDollarGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "A70A6D372173"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2018",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 100,  

      "billing_address": {  

        "first_name": "Bob",  

        "last_name": "Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency", "AUD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564;234234234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

	  "currency":"USD",  

	  "order_id":"testPanama1",  

	  "description":"Transaction description 12345",  

	  "installments_number":"1",  

	  "payment_country": "PA",  

	  "ip":"127.0.0.1",  

	  "metadata":"optional_cookie_information",  

	  "additional_data":"User Agent Info",  

	  "user_data_1":"123456789",  

	  "user_data_2":"987654321",  

	  "user_data_3":"IDC",  

	  "user_data_4":"1/1/1900",  

	  "user_data_5":"12",  

	  "user_data_6":"Santander",  

	  "shipping_address": {  

	    "name": "APPROVED",  

		"address1": "Calle 93 B 17 - 25",  

		"city": "Panama",  

		"state": "Panama",  

		"zip": "000000",  

		"country": "PA",  

		"phone": "5582254",  

		"email":"test@payulatam.com"  

	  },  

	  "billing_address": {  

	    "name": "APPROVED",  

		"email":"test@payulatam.com"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019|12.00"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PesoPayGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PromisePayGateway",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Integeration does not support capture  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Here St",  

        "city": "Anywhere",  

        "state": "OH",  

        "country": "US",  

        "zip": "12345"  

      },  

      "order_id": "1234567890"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "ABCDEFGHI123|1234567890abcdef1234567890abcdef"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "1234512345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "6",  

      "year": "2020",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "description": "Sample Authorize Transaction",  

      "order_id": "XXXXXXXXXXX",  

      "moto_ecommerce_ind": "ECOM",  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      },  

      "shipping_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXX;XXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;bankcard\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "name": "Bob Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;1111;2342",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "114187038|10.00|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;3435\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'authorize' action.  

This example is a 'purchase' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'void' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 5,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "03847424452"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345678901234",  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "0002000600",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "00100037;238704; Z;A;180650201010430;BKTY",  

      "amount": 1000,  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "4002000300",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WepayGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "transaction": {  

      "amount": 0,  

      "authorization": "10000019|2332"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|257140011",  

      "amount": 1000  

    }  

  }  

}  

```  * [Authorize.Net](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#authorizenet)
  * [Barclaycard Smartpay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#barclaycard-smartpay)
  * [Beanstream](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#beanstream)
  * [BluePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#bluepay)
  * [Braintree (Blue Platform)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#braintree-blue-platform)
  * [Braspag](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#braspag)
  * [Chase NetConnect](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#chase-netconnect)
  * [Cobre Bem (Aprova Facil)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#cobre-bem-aprova-facil)
  * [Credomatic](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#credomatic)
  * [CyberSource](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#cybersource)
  * [Doku](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#doku)
  * [Elavon My Virtual Merchant](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#elavon-my-virtual-merchant)
  * [Element Express (Vantiv Integrated Payments)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#element-express-vantiv-integrated-payments)
  * [Electronic Payment Exchange (EPX)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#electronic-payment-exchange-epx)
  * [Federated Payments](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#federated-payments)
  * [Federated Payments Canada](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#federated-payments-canada)
  * [FirstData Compass Gateway](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#firstdata-compass-gateway)
  * [FirstData Global Gateway e4](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#firstdata-global-gateway-e4)
  * [Global Cloud Pay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-cloud-pay)
  * [Global Collect](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-collect)
  * [Global One Pay Gateway](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-one-pay-gateway)
  * [Global Payments](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#global-payments)
  * [iATS Payments](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#iats-payments)
  * [Isbank (NestPay)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#isbank-nestpay)
  * [Litle & Co](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#litle--co)
  * [Lucy](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#lucy)
  * [Maxiopago](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#maxiopago)
  * [Merchant e-Solutions](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#merchant-e-solutions)
  * [Merchant Link TV2G Payment Gateway](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#merchant-link-tv2g-payment-gateway)
  * [Moneris eSelect Plus](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#moneris-eselect-plus)
  * [Moneris (US) eSelect Plus](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#moneris-us-eselect-plus)
  * [NMI](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#nmi)
  * [Optimal Payments NETBANX](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#optimal-payments-netbanx)
  * [Orbital](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#orbital)
  * [Pay Dollar](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#pay-dollar)
  * [PayPal Payflow Pro](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#paypal-payflow-pro)
  * [Payment Brands](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#payment-brands)
  * [Payment Express](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#payment-express)
  * [Paymill](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#paymill)
  * [PayTrace](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#paytrace)
  * [PayULatam](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#payulatam)
  * [PesoPay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#pesopay)
  * [PromisePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#promisepay)
  * [QuickBooks Payments](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#quickbooks-payments)
  * [Qvalent (Westpac/PayWay)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#qvalent-westpacpayway)
  * [Realex](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#realex)
  * [Sage Payments](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#sage-payments)
  * [SagePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#sagepay)
  * [Secure Net](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#secure-net)
  * [Six Payment Services (3CWeb2Pay)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#six-payment-services-3cweb2pay)
  * [Stripe](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#stripe)
  * [Transaction Network Services (TNS)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#transaction-network-services-tns)
  * [TransFirst](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#transfirst)
  * [TSYS](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#tsys)
  * [USA ePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#usa-epay)
  * [Vantiv Online Systems (610 Interface)](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#vantiv-online-systems-610-interface)
  * [WePay](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#wepay)
  * [Worldpay Corporate](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#worldpay-corporate)
  * [Worldpay US](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters#worldpay-us)
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2020",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12.00;PA"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "network": "XXXXXXXXX",  

      "avs_enabled": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "brand": "Visa"  

    },  

    "transaction": {  

      "amount": 1200,  

      "tax": 0,  

      "currency": "BRL",  

      "payment_country": "BRA",  

      "recurring_ind": 1,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CobreBemAprovaFacilGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12345678"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CredomaticGateway",  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "MyOrderId123",  

      "processor": "INET1125",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "name": "CredomaticGateway"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111"  

    },  

    "transaction": {  

      "authorization": "12.00;123456;MyOrderId123",  

      "processor": "INET1125"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "null@cybersource.com",  

      "order_id": "12345678",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "12345678;A1B2C39876;987654321098765;authorize;12.00;USD"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "39dj3i8dj2",  

      "eci": "00",  

      "email": "test@doku.com",  

      "description": "testing item,10000.00,1,10000.00",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;1234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'reverse' transaction.  

  

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 6,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "authorization": "OK885C;150116"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;142"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCloudPayGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "card_issue": "Bank of china",  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "2JNJDN83"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'authorize'.  

This example is a 'purchase' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'capture'.  

This example is a 'refund' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|23",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;397"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;12345;3632456",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "MV0008881815;1111",  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "c95ad35b-3d39-451f-8d82-46e1f9033e20"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;2345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayDollarGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "A70A6D372173"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2018",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 100,  

      "billing_address": {  

        "first_name": "Bob",  

        "last_name": "Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency", "AUD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564;234234234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

	  "currency":"USD",  

	  "order_id":"testPanama1",  

	  "description":"Transaction description 12345",  

	  "installments_number":"1",  

	  "payment_country": "PA",  

	  "ip":"127.0.0.1",  

	  "metadata":"optional_cookie_information",  

	  "additional_data":"User Agent Info",  

	  "user_data_1":"123456789",  

	  "user_data_2":"987654321",  

	  "user_data_3":"IDC",  

	  "user_data_4":"1/1/1900",  

	  "user_data_5":"12",  

	  "user_data_6":"Santander",  

	  "shipping_address": {  

	    "name": "APPROVED",  

		"address1": "Calle 93 B 17 - 25",  

		"city": "Panama",  

		"state": "Panama",  

		"zip": "000000",  

		"country": "PA",  

		"phone": "5582254",  

		"email":"test@payulatam.com"  

	  },  

	  "billing_address": {  

	    "name": "APPROVED",  

		"email":"test@payulatam.com"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019|12.00"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PesoPayGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PromisePayGateway",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Integeration does not support capture  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Here St",  

        "city": "Anywhere",  

        "state": "OH",  

        "country": "US",  

        "zip": "12345"  

      },  

      "order_id": "1234567890"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "ABCDEFGHI123|1234567890abcdef1234567890abcdef"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "1234512345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "6",  

      "year": "2020",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "description": "Sample Authorize Transaction",  

      "order_id": "XXXXXXXXXXX",  

      "moto_ecommerce_ind": "ECOM",  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      },  

      "shipping_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXX;XXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;bankcard\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "name": "Bob Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;1111;2342",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "114187038|10.00|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;3435\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'authorize' action.  

This example is a 'purchase' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'void' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 5,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "03847424452"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345678901234",  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "0002000600",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "00100037;238704; Z;A;180650201010430;BKTY",  

      "amount": 1000,  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "4002000300",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WepayGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "transaction": {  

      "amount": 0,  

      "authorization": "10000019|2332"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|257140011",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "AuthorizeNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2020",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BarclaycardSmartpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BeanstreamGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12.00;PA"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BluePayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraintreeBlueGateway",  

      "merchant_id": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "network": "XXXXXXXXX",  

      "avs_enabled": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "brand": "Visa"  

    },  

    "transaction": {  

      "amount": 1200,  

      "tax": 0,  

      "currency": "BRL",  

      "payment_country": "BRA",  

      "recurring_ind": 1,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "BraspagGateway",  

      "merchant_id": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ChaseNetConnectGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "cid": "0001"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000,  

      "order_id": "123456789012",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CobreBemAprovaFacilGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12345678"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CredomaticGateway",  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "MyOrderId123",  

      "processor": "INET1125",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "user": "XXXXXXXXX",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX",  

      "name": "CredomaticGateway"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111"  

    },  

    "transaction": {  

      "authorization": "12.00;123456;MyOrderId123",  

      "processor": "INET1125"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "null@cybersource.com",  

      "order_id": "12345678",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "CyberSourceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "12345678;A1B2C39876;987654321098765;authorize;12.00;USD"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "order_id": "39dj3i8dj2",  

      "eci": "00",  

      "email": "test@doku.com",  

      "description": "testing item,10000.00,1,10000.00",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "DokuGateway",  

      "mid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElavonGateway",  

      "login": "XXXXXXXXX",  

      "user": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;1234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "ElementGateway",  

      "merchant_id": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "EpxGateway",  

      "cid": "XXXXXXXXX",  

      "mid": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "tid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "report_group": "20170101",  

      "transaction_index": "1",  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FederatedCanadaGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'reverse' transaction.  

  

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 6,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataCompassGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "amount": 1200,  

      "division_id": "XXXXXXXXX",  

      "order_id": "1212",  

      "authorization": "OK885C;150116"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "FirstdataE4Gateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;142"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCloudPayGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "card_issue": "Bank of china",  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalCollectGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalOnePayGateway",  

      "tid": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "2JNJDN83"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency": "USD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "GlobalPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "099579;00000003",  

      "amount": 1000  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'authorize'.  

This example is a 'purchase' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

The iATS Gateway dows not support 'capture'.  

This example is a 'refund' request.  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IatsPaymentsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|23",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "IsbankGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX"  

    },  

    "transaction": {  

      "authorization": "359308705#1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LitleGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "LucyGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;397"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MaxipagoGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;12345;3632456",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantESolutionsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4012000033330026",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MerchantLinkGateway",  

      "login": "XXXXXXXXX",  

      "subid": "XXXXXXXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "MV0008881815;1111",  

      "amount": 1200,  

      "terminal_id": "1",  

      "lane_id": "01",  

      "transaction_index": "916637035224",  

      "pos_version": "v1.0",  

      "date": "150706",  

      "time": "225439",  

      "posts": "2015-07-07T03:54:39.620Z",  

      "order_id": "12128127161234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "avs_enabled": "true"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "MonerisUsGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;12"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "NmiGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OptimalPaymentNetbanxGateway",  

      "acctid": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "c95ad35b-3d39-451f-8d82-46e1f9033e20"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "OrbitalGateway",  

      "merchant_id": "XXXXXXXXX",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;2345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayDollarGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayflowGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "A70A6D372173"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2018",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 100,  

      "billing_address": {  

        "first_name": "Bob",  

        "last_name": "Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentBrandsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "currency", "AUD",  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymentExpressGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 1200  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PaymillGateway",  

      "public_key": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "1561516564;234234234"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "411111XXXXXX1111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

	  "currency":"USD",  

	  "order_id":"testPanama1",  

	  "description":"Transaction description 12345",  

	  "installments_number":"1",  

	  "payment_country": "PA",  

	  "ip":"127.0.0.1",  

	  "metadata":"optional_cookie_information",  

	  "additional_data":"User Agent Info",  

	  "user_data_1":"123456789",  

	  "user_data_2":"987654321",  

	  "user_data_3":"IDC",  

	  "user_data_4":"1/1/1900",  

	  "user_data_5":"12",  

	  "user_data_6":"Santander",  

	  "shipping_address": {  

	    "name": "APPROVED",  

		"address1": "Calle 93 B 17 - 25",  

		"city": "Panama",  

		"state": "Panama",  

		"zip": "000000",  

		"country": "PA",  

		"phone": "5582254",  

		"email":"test@payulatam.com"  

	  },  

	  "billing_address": {  

	    "name": "APPROVED",  

		"email":"test@payulatam.com"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayuLatamGateway",  

      "merchant_id": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019|12.00"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PesoPayGateway",  

      "merchant_id": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "example@tokenex.com",  

      "ip": "127.0.0.1",  

      "order_id": "1",  

      "currency": "702",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

This gateway implementation does not support the 'capture' method  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PromisePayGateway",  

      "login": "XXXXXXXXX",  

      "private_key": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

Integeration does not support capture  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "billing_address": {  

        "address1": "123 Here St",  

        "city": "Anywhere",  

        "state": "OH",  

        "country": "US",  

        "zip": "12345"  

      },  

      "order_id": "1234567890"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QuickbooksGateway",  

      "cid": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "merchant_id": "XXXXXXXXX",  

      "merchantpin": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "ABCDEFGHI123|1234567890abcdef1234567890abcdef"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "1234512345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "QvalentGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "merchant_id": "XXXX",  

      "ssl_cert": "CLIENT SSL CERTIFICATE (PEM FORMAT)",  

      "ssl_key": "CLIENT SSL KEY (PEM FORMAT)"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "6",  

      "year": "2020",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "description": "Sample Authorize Transaction",  

      "order_id": "XXXXXXXXXXX",  

      "moto_ecommerce_ind": "ECOM",  

      "billing_address": {  

        "zip": "74119",  

        "country": "US"  

      },  

      "shipping_address": {  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "RealexGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "currency": "USD",  

      "authorization": "XXXXXXXXXXXXXXXXXXX;XXXXXXXXXXXXXX;XXXXX"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SageGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;bankcard\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "name": "Bob Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "name": "Bob Smith",  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SagePayGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705;1111;2342",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SecureNetGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "114187038|10.00|1111",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "SixGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "F9CELQPXq0;3435\"",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "first_name": "Bob",  

      "last_name": "Smith",  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "StripeGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TnsGateway",  

      "merchant_id": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "10000019;sale"  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'authorize' action.  

This example is a 'purchase' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 3,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

Note: This gateway does not support the 'capture' action.  

This example is a 'void' transaction.  

  

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 5,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TransFirstGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "3593087051111"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4030006537191234",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "123",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "TsysGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX"  

    },  

    "transaction": {  

      "amount": 1200,  

      "authorization": "03847424452"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "UsaEpayTransactionGateway",  

      "login": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345678901234",  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "0002000600",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "VantivOnlineSystemsGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX",  

      "mid": "XXXXXXXXXX",  

      "tid": "001",  

      "bid": "0001",  

      "network", "M90000"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111"  

    },  

    "transaction": {  

      "authorization": "00100037;238704; Z;A;180650201010430;BKTY",  

      "amount": 1000,  

      "stan": "343434",  

      "date": "011318",  

      "time": "070707",  

      "pos_entry_mode": "009",  

      "pos_condition_code": "4002000300",  

      "lane_id": "001",  

      "input_capability": "0 ",  

      "processing_indicators": "000NNYN"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WepayGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4012881888818888",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "999",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1200,  

      "email": "test@example.com"  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119",  

        "country": "US"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXX",  

  "TokenExID": "XXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "PayTraceGateway",  

      "login": "XXXXXXXXX",  

      "password": "XXXXXXXXX",  

      "acctid": "XXXXXXXX"  

    },  

    "transaction": {  

      "amount": 0,  

      "authorization": "10000019|2332"  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayGateway",  

      "login": "XXXXXXXXXX",  

      "password": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705",  

      "amount": 1000  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "credit_card": {  

      "number": "4111114356431111",  

      "month": "4",  

      "year": "2016",  

      "verification_value": "111",  

      "first_name": "Bob",  

      "last_name": "Smith"  

    },  

    "transaction": {  

      "amount": 1000,  

      "order_id": "12345",  

      "billing_address": {  

        "address1": "123 Maple Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```
```

{  

  "APIKey": "XXXXXXXXXX",  

  "TokenExID": "XXXXXXXXXX",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "WorldpayUsGateway",  

      "acctid": "XXXXXXXXXX",  

      "subid": "XXXXXXXXXX",  

      "merchantpin": "XXXXXXXXXX"  

    },  

    "transaction": {  

      "authorization": "359308705|257140011",  

      "amount": 1000  

    }  

  }  

}  

```