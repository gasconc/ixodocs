  * [](https://documentation.ixopay.com/)
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Reconciliation API
  * Reconciliation
  * Retrieve


# Retrieve

```
POST 
## https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey

```

Retrieves a list of transactions between `from` and `to` along with the fees associated with them.
Request parameters
If both a request body and GET parameters are specified, the GET parameters take precedence.
## Request[​](https://documentation.ixopay.com/api/reconciliation/retrieve#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.


### Query Parameters
**retrieve** object
**Example:**`{"from":"2019-04-01 00:00:00","to":"2019-04-30 23:59:59","page":1}`


  * application/x-www-form-urlencoded


### Bodyrequired
**from** string<date-time>required
Date range start, must be before `to` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03T 04:05:06`
**to** string<date-time>required
Date range end, must be after `from` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03 04:05:06`
**page** integer<int64>required
Page number.
**Possible values:** `>= 1`
**Example:**`1`


## Responses[​](https://documentation.ixopay.com/api/reconciliation/retrieve#responses "Direct link to Responses")
  * 200


A paged response of reconciled transactions.
:::info[Pagination] Each request will return a maximum of 100 data sets. In order to fetch the next page, simply indicate this using the `page` property. The response has the `next_page_exists` field that indicates if more data needs to be retrieved. :::
  * application/json


  * Schema
  * Example (auto)


**Schema**
**total_entry_count** integer<int64>
Total number of entries.
**Possible values:** `>= 0`
**page_count** integer<int64>
Total number of pages.
**Possible values:** `>= 0`
**current_page** integer<int64>
Current page of data set.
**Possible values:** `>= 0`
**current_page_entry_count** integer<int64>
Entry count of current page.
**Possible values:** `>= 0` and `<= 100`
**next_page_exists** boolean
Whether there is a next page.
**transactions** object[]
List of transactions on the current page (maximum `100`).
  * Array [
**uuid** stringrequired
Transaction ID.
**Example:**`20230315-6d432fb7217843388847`
**merchantTransactionId** stringnullable
Transaction's merchant ID.
**Default value:**`null`
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** stringnullable
ID of an initial transaction if it exists, e.g. a refund.
**Default value:**`null`
**Example:**`20230315-6d432fb7217843388847`
**type** stringnullable
Transaction type.
**Possible values:** [`debit`, `capture`, `deregister`, `preauthorize`, `refund`, `register`, `void`, `chargeback`, `payout`, `cb-reversal`, `prepare-debit`, `prepare-preauthorize`, `inc-auth`]
**Default value:**`null`
**Example:**`debit`
**status** stringnullable
**Default value:**`null`
**Example:**`success`
**createdAt** string<date-time>nullable
Transaction creation date.
**Default value:**`null`
**Example:**`2001-02-03T04:05:06+02:00`
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**withRegister** boolean
Was a `debit` transaction performed with registering the payment instrument.
**Default value:**`false`
**description** stringnullable
Transaction description.
**Default value:**`null`
**errors** object[]nullable
Errors of a transaction.
  * Array [
**message** stringnullable
Error message.
**Default value:**`null`
**Example:**`Transaction declined.`
**code** stringnullable
Error code.
**Default value:**`null`
**Example:**`3002`
**adapter_message** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`Do not honour`
**adapter_code** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`5`
**property name*** any
  * ]
**fees** object[]nullable
Transaction fees.
  * Array [
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**entity_type** FeeEntityType (string)
Type of fee.
**Possible values:** [`normal`, `markup`, `interchange`, `scheme`, `scheme-2`, `scheme-3`, `conversion`, `gateway`, `commission`, `merchant-normal`, `merchant-markup`, `merchant-interchange`, `merchant-scheme`, `merchant-conversion`, `surcharge`]
**property name*** any
  * ]
**property name*** any
Transaction information.
  * ]
**property name*** any



```
{  
  "total_entry_count": 0,  
  "page_count": 0,  
  "current_page": 0,  
  "current_page_entry_count": 0,  
  "next_page_exists": true,  
  "transactions": [  
    {  
      "uuid": "20230315-6d432fb7217843388847",  
      "merchantTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
      "referenceUuid": "20230315-6d432fb7217843388847",  
      "type": "debit",  
      "status": "success",  
      "createdAt": "2001-02-03T04:05:06+02:00",  
      "amount": "9.99",  
      "currency": "EUR",  
      "withRegister": false,  
      "description": null,  
      "errors": [  
        {  
          "message": "Transaction declined.",  
          "code": 3002,  
          "adapter_message": "Do not honour",  
          "adapter_code": 5  
        }  
      ],  
      "fees": [  
        {  
          "amount": 0.5,  
          "currency": "EUR"  
        }  
      ]  
    }  
  ]  
}  

```

#### Authorization: http

```
**name:** basicAuth[](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L -X POST 'https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/reconciliation
Auth
Username
Password
Parameters
apiKey — pathrequired
Show optional parameters
retrieve — query
Body required
Content-Type
application/x-www-form-urlencoded text/plain
fromrequired
torequired
pagerequired
Last updated on **Apr 10, 2026**
# Retrieve

```
POST 
## https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey

```

Retrieves a list of transactions between `from` and `to` along with the fees associated with them.
Request parameters
If both a request body and GET parameters are specified, the GET parameters take precedence.
## Request[​](https://documentation.ixopay.com/api/reconciliation/retrieve#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.


### Query Parameters
**retrieve** object
**Example:**`{"from":"2019-04-01 00:00:00","to":"2019-04-30 23:59:59","page":1}`


  * application/x-www-form-urlencoded


### Bodyrequired
**from** string<date-time>required
Date range start, must be before `to` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03T 04:05:06`
**to** string<date-time>required
Date range end, must be after `from` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03 04:05:06`
**page** integer<int64>required
Page number.
**Possible values:** `>= 1`
**Example:**`1`


## Responses[​](https://documentation.ixopay.com/api/reconciliation/retrieve#responses "Direct link to Responses")
  * 200


A paged response of reconciled transactions.
:::info[Pagination] Each request will return a maximum of 100 data sets. In order to fetch the next page, simply indicate this using the `page` property. The response has the `next_page_exists` field that indicates if more data needs to be retrieved. :::
  * application/json


  * Schema
  * Example (auto)


**Schema**
**total_entry_count** integer<int64>
Total number of entries.
**Possible values:** `>= 0`
**page_count** integer<int64>
Total number of pages.
**Possible values:** `>= 0`
**current_page** integer<int64>
Current page of data set.
**Possible values:** `>= 0`
**current_page_entry_count** integer<int64>
Entry count of current page.
**Possible values:** `>= 0` and `<= 100`
**next_page_exists** boolean
Whether there is a next page.
**transactions** object[]
List of transactions on the current page (maximum `100`).
  * Array [
**uuid** stringrequired
Transaction ID.
**Example:**`20230315-6d432fb7217843388847`
**merchantTransactionId** stringnullable
Transaction's merchant ID.
**Default value:**`null`
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** stringnullable
ID of an initial transaction if it exists, e.g. a refund.
**Default value:**`null`
**Example:**`20230315-6d432fb7217843388847`
**type** stringnullable
Transaction type.
**Possible values:** [`debit`, `capture`, `deregister`, `preauthorize`, `refund`, `register`, `void`, `chargeback`, `payout`, `cb-reversal`, `prepare-debit`, `prepare-preauthorize`, `inc-auth`]
**Default value:**`null`
**Example:**`debit`
**status** stringnullable
**Default value:**`null`
**Example:**`success`
**createdAt** string<date-time>nullable
Transaction creation date.
**Default value:**`null`
**Example:**`2001-02-03T04:05:06+02:00`
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**withRegister** boolean
Was a `debit` transaction performed with registering the payment instrument.
**Default value:**`false`
**description** stringnullable
Transaction description.
**Default value:**`null`
**errors** object[]nullable
Errors of a transaction.
  * Array [
**message** stringnullable
Error message.
**Default value:**`null`
**Example:**`Transaction declined.`
**code** stringnullable
Error code.
**Default value:**`null`
**Example:**`3002`
**adapter_message** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`Do not honour`
**adapter_code** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`5`
**property name*** any
  * ]
**fees** object[]nullable
Transaction fees.
  * Array [
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**entity_type** FeeEntityType (string)
Type of fee.
**Possible values:** [`normal`, `markup`, `interchange`, `scheme`, `scheme-2`, `scheme-3`, `conversion`, `gateway`, `commission`, `merchant-normal`, `merchant-markup`, `merchant-interchange`, `merchant-scheme`, `merchant-conversion`, `surcharge`]
**property name*** any
  * ]
**property name*** any
Transaction information.
  * ]
**property name*** any



```
{  
  "total_entry_count": 0,  
  "page_count": 0,  
  "current_page": 0,  
  "current_page_entry_count": 0,  
  "next_page_exists": true,  
  "transactions": [  
    {  
      "uuid": "20230315-6d432fb7217843388847",  
      "merchantTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
      "referenceUuid": "20230315-6d432fb7217843388847",  
      "type": "debit",  
      "status": "success",  
      "createdAt": "2001-02-03T04:05:06+02:00",  
      "amount": "9.99",  
      "currency": "EUR",  
      "withRegister": false,  
      "description": null,  
      "errors": [  
        {  
          "message": "Transaction declined.",  
          "code": 3002,  
          "adapter_message": "Do not honour",  
          "adapter_code": 5  
        }  
      ],  
      "fees": [  
        {  
          "amount": 0.5,  
          "currency": "EUR"  
        }  
      ]  
    }  
  ]  
}  

```

#### Authorization: http

```
**name:** basicAuth[](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L -X POST 'https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/reconciliation
Auth
Username
Password
Parameters
apiKey — pathrequired
Show optional parameters
retrieve — query
Body required
Content-Type
application/x-www-form-urlencoded text/plain
fromrequired
torequired
pagerequired
# Retrieve

```
POST 
## https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey

```

Retrieves a list of transactions between `from` and `to` along with the fees associated with them.
Request parameters
If both a request body and GET parameters are specified, the GET parameters take precedence.
## Request[​](https://documentation.ixopay.com/api/reconciliation/retrieve#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.


### Query Parameters
**retrieve** object
**Example:**`{"from":"2019-04-01 00:00:00","to":"2019-04-30 23:59:59","page":1}`


  * application/x-www-form-urlencoded


### Bodyrequired
**from** string<date-time>required
Date range start, must be before `to` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03T 04:05:06`
**to** string<date-time>required
Date range end, must be after `from` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03 04:05:06`
**page** integer<int64>required
Page number.
**Possible values:** `>= 1`
**Example:**`1`


## Responses[​](https://documentation.ixopay.com/api/reconciliation/retrieve#responses "Direct link to Responses")
  * 200


A paged response of reconciled transactions.
:::info[Pagination] Each request will return a maximum of 100 data sets. In order to fetch the next page, simply indicate this using the `page` property. The response has the `next_page_exists` field that indicates if more data needs to be retrieved. :::
  * application/json


  * Schema
  * Example (auto)


**Schema**
**total_entry_count** integer<int64>
Total number of entries.
**Possible values:** `>= 0`
**page_count** integer<int64>
Total number of pages.
**Possible values:** `>= 0`
**current_page** integer<int64>
Current page of data set.
**Possible values:** `>= 0`
**current_page_entry_count** integer<int64>
Entry count of current page.
**Possible values:** `>= 0` and `<= 100`
**next_page_exists** boolean
Whether there is a next page.
**transactions** object[]
List of transactions on the current page (maximum `100`).
  * Array [
**uuid** stringrequired
Transaction ID.
**Example:**`20230315-6d432fb7217843388847`
**merchantTransactionId** stringnullable
Transaction's merchant ID.
**Default value:**`null`
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** stringnullable
ID of an initial transaction if it exists, e.g. a refund.
**Default value:**`null`
**Example:**`20230315-6d432fb7217843388847`
**type** stringnullable
Transaction type.
**Possible values:** [`debit`, `capture`, `deregister`, `preauthorize`, `refund`, `register`, `void`, `chargeback`, `payout`, `cb-reversal`, `prepare-debit`, `prepare-preauthorize`, `inc-auth`]
**Default value:**`null`
**Example:**`debit`
**status** stringnullable
**Default value:**`null`
**Example:**`success`
**createdAt** string<date-time>nullable
Transaction creation date.
**Default value:**`null`
**Example:**`2001-02-03T04:05:06+02:00`
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**withRegister** boolean
Was a `debit` transaction performed with registering the payment instrument.
**Default value:**`false`
**description** stringnullable
Transaction description.
**Default value:**`null`
**errors** object[]nullable
Errors of a transaction.
  * Array [
**message** stringnullable
Error message.
**Default value:**`null`
**Example:**`Transaction declined.`
**code** stringnullable
Error code.
**Default value:**`null`
**Example:**`3002`
**adapter_message** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`Do not honour`
**adapter_code** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`5`
**property name*** any
  * ]
**fees** object[]nullable
Transaction fees.
  * Array [
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**entity_type** FeeEntityType (string)
Type of fee.
**Possible values:** [`normal`, `markup`, `interchange`, `scheme`, `scheme-2`, `scheme-3`, `conversion`, `gateway`, `commission`, `merchant-normal`, `merchant-markup`, `merchant-interchange`, `merchant-scheme`, `merchant-conversion`, `surcharge`]
**property name*** any
  * ]
**property name*** any
Transaction information.
  * ]
**property name*** any



```
{  
  "total_entry_count": 0,  
  "page_count": 0,  
  "current_page": 0,  
  "current_page_entry_count": 0,  
  "next_page_exists": true,  
  "transactions": [  
    {  
      "uuid": "20230315-6d432fb7217843388847",  
      "merchantTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
      "referenceUuid": "20230315-6d432fb7217843388847",  
      "type": "debit",  
      "status": "success",  
      "createdAt": "2001-02-03T04:05:06+02:00",  
      "amount": "9.99",  
      "currency": "EUR",  
      "withRegister": false,  
      "description": null,  
      "errors": [  
        {  
          "message": "Transaction declined.",  
          "code": 3002,  
          "adapter_message": "Do not honour",  
          "adapter_code": 5  
        }  
      ],  
      "fees": [  
        {  
          "amount": 0.5,  
          "currency": "EUR"  
        }  
      ]  
    }  
  ]  
}  

```

#### Authorization: http

```
**name:** basicAuth[](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L -X POST 'https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/reconciliation
Auth
Username
Password
Parameters
apiKey — pathrequired
Show optional parameters
retrieve — query
Body required
Content-Type
application/x-www-form-urlencoded text/plain
fromrequired
torequired
pagerequired
  * [](https://documentation.ixopay.com/)
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Reconciliation API
  * Reconciliation
  * Retrieve


# Retrieve

```
POST 
## https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey

```

Retrieves a list of transactions between `from` and `to` along with the fees associated with them.
Request parameters
If both a request body and GET parameters are specified, the GET parameters take precedence.
## Request[​](https://documentation.ixopay.com/api/reconciliation/retrieve#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.


### Query Parameters
**retrieve** object
**Example:**`{"from":"2019-04-01 00:00:00","to":"2019-04-30 23:59:59","page":1}`


  * application/x-www-form-urlencoded


### Bodyrequired
**from** string<date-time>required
Date range start, must be before `to` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03T 04:05:06`
**to** string<date-time>required
Date range end, must be after `from` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03 04:05:06`
**page** integer<int64>required
Page number.
**Possible values:** `>= 1`
**Example:**`1`


## Responses[​](https://documentation.ixopay.com/api/reconciliation/retrieve#responses "Direct link to Responses")
  * 200


A paged response of reconciled transactions.
:::info[Pagination] Each request will return a maximum of 100 data sets. In order to fetch the next page, simply indicate this using the `page` property. The response has the `next_page_exists` field that indicates if more data needs to be retrieved. :::
  * application/json


  * Schema
  * Example (auto)


**Schema**
**total_entry_count** integer<int64>
Total number of entries.
**Possible values:** `>= 0`
**page_count** integer<int64>
Total number of pages.
**Possible values:** `>= 0`
**current_page** integer<int64>
Current page of data set.
**Possible values:** `>= 0`
**current_page_entry_count** integer<int64>
Entry count of current page.
**Possible values:** `>= 0` and `<= 100`
**next_page_exists** boolean
Whether there is a next page.
**transactions** object[]
List of transactions on the current page (maximum `100`).
  * Array [
**uuid** stringrequired
Transaction ID.
**Example:**`20230315-6d432fb7217843388847`
**merchantTransactionId** stringnullable
Transaction's merchant ID.
**Default value:**`null`
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** stringnullable
ID of an initial transaction if it exists, e.g. a refund.
**Default value:**`null`
**Example:**`20230315-6d432fb7217843388847`
**type** stringnullable
Transaction type.
**Possible values:** [`debit`, `capture`, `deregister`, `preauthorize`, `refund`, `register`, `void`, `chargeback`, `payout`, `cb-reversal`, `prepare-debit`, `prepare-preauthorize`, `inc-auth`]
**Default value:**`null`
**Example:**`debit`
**status** stringnullable
**Default value:**`null`
**Example:**`success`
**createdAt** string<date-time>nullable
Transaction creation date.
**Default value:**`null`
**Example:**`2001-02-03T04:05:06+02:00`
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**withRegister** boolean
Was a `debit` transaction performed with registering the payment instrument.
**Default value:**`false`
**description** stringnullable
Transaction description.
**Default value:**`null`
**errors** object[]nullable
Errors of a transaction.
  * Array [
**message** stringnullable
Error message.
**Default value:**`null`
**Example:**`Transaction declined.`
**code** stringnullable
Error code.
**Default value:**`null`
**Example:**`3002`
**adapter_message** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`Do not honour`
**adapter_code** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`5`
**property name*** any
  * ]
**fees** object[]nullable
Transaction fees.
  * Array [
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**entity_type** FeeEntityType (string)
Type of fee.
**Possible values:** [`normal`, `markup`, `interchange`, `scheme`, `scheme-2`, `scheme-3`, `conversion`, `gateway`, `commission`, `merchant-normal`, `merchant-markup`, `merchant-interchange`, `merchant-scheme`, `merchant-conversion`, `surcharge`]
**property name*** any
  * ]
**property name*** any
Transaction information.
  * ]
**property name*** any



```
{  
  "total_entry_count": 0,  
  "page_count": 0,  
  "current_page": 0,  
  "current_page_entry_count": 0,  
  "next_page_exists": true,  
  "transactions": [  
    {  
      "uuid": "20230315-6d432fb7217843388847",  
      "merchantTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
      "referenceUuid": "20230315-6d432fb7217843388847",  
      "type": "debit",  
      "status": "success",  
      "createdAt": "2001-02-03T04:05:06+02:00",  
      "amount": "9.99",  
      "currency": "EUR",  
      "withRegister": false,  
      "description": null,  
      "errors": [  
        {  
          "message": "Transaction declined.",  
          "code": 3002,  
          "adapter_message": "Do not honour",  
          "adapter_code": 5  
        }  
      ],  
      "fees": [  
        {  
          "amount": 0.5,  
          "currency": "EUR"  
        }  
      ]  
    }  
  ]  
}  

```

#### Authorization: http

```
**name:** basicAuth[](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L -X POST 'https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/reconciliation
Auth
Username
Password
Parameters
apiKey — pathrequired
Show optional parameters
retrieve — query
Body required
Content-Type
application/x-www-form-urlencoded text/plain
fromrequired
torequired
pagerequired
Last updated on **Apr 10, 2026**
[Previous Introduction](https://documentation.ixopay.com/api/reconciliation/reconciliation-api)[Next Introduction](https://documentation.ixopay.com/api/settlement/settlement-api)
  * [](https://documentation.ixopay.com/)
  * [Enterprise](https://documentation.ixopay.com/api/enterprise)
  * Reconciliation API
  * Reconciliation
  * Retrieve


# Retrieve

```
POST 
## https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey

```

Retrieves a list of transactions between `from` and `to` along with the fees associated with them.
Request parameters
If both a request body and GET parameters are specified, the GET parameters take precedence.
## Request[​](https://documentation.ixopay.com/api/reconciliation/retrieve#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.


### Query Parameters
**retrieve** object
**Example:**`{"from":"2019-04-01 00:00:00","to":"2019-04-30 23:59:59","page":1}`


  * application/x-www-form-urlencoded


### Bodyrequired
**from** string<date-time>required
Date range start, must be before `to` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03T 04:05:06`
**to** string<date-time>required
Date range end, must be after `from` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03 04:05:06`
**page** integer<int64>required
Page number.
**Possible values:** `>= 1`
**Example:**`1`


## Responses[​](https://documentation.ixopay.com/api/reconciliation/retrieve#responses "Direct link to Responses")
  * 200


A paged response of reconciled transactions.
:::info[Pagination] Each request will return a maximum of 100 data sets. In order to fetch the next page, simply indicate this using the `page` property. The response has the `next_page_exists` field that indicates if more data needs to be retrieved. :::
  * application/json


  * Schema
  * Example (auto)


**Schema**
**total_entry_count** integer<int64>
Total number of entries.
**Possible values:** `>= 0`
**page_count** integer<int64>
Total number of pages.
**Possible values:** `>= 0`
**current_page** integer<int64>
Current page of data set.
**Possible values:** `>= 0`
**current_page_entry_count** integer<int64>
Entry count of current page.
**Possible values:** `>= 0` and `<= 100`
**next_page_exists** boolean
Whether there is a next page.
**transactions** object[]
List of transactions on the current page (maximum `100`).
  * Array [
**uuid** stringrequired
Transaction ID.
**Example:**`20230315-6d432fb7217843388847`
**merchantTransactionId** stringnullable
Transaction's merchant ID.
**Default value:**`null`
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** stringnullable
ID of an initial transaction if it exists, e.g. a refund.
**Default value:**`null`
**Example:**`20230315-6d432fb7217843388847`
**type** stringnullable
Transaction type.
**Possible values:** [`debit`, `capture`, `deregister`, `preauthorize`, `refund`, `register`, `void`, `chargeback`, `payout`, `cb-reversal`, `prepare-debit`, `prepare-preauthorize`, `inc-auth`]
**Default value:**`null`
**Example:**`debit`
**status** stringnullable
**Default value:**`null`
**Example:**`success`
**createdAt** string<date-time>nullable
Transaction creation date.
**Default value:**`null`
**Example:**`2001-02-03T04:05:06+02:00`
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**withRegister** boolean
Was a `debit` transaction performed with registering the payment instrument.
**Default value:**`false`
**description** stringnullable
Transaction description.
**Default value:**`null`
**errors** object[]nullable
Errors of a transaction.
  * Array [
**message** stringnullable
Error message.
**Default value:**`null`
**Example:**`Transaction declined.`
**code** stringnullable
Error code.
**Default value:**`null`
**Example:**`3002`
**adapter_message** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`Do not honour`
**adapter_code** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`5`
**property name*** any
  * ]
**fees** object[]nullable
Transaction fees.
  * Array [
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**entity_type** FeeEntityType (string)
Type of fee.
**Possible values:** [`normal`, `markup`, `interchange`, `scheme`, `scheme-2`, `scheme-3`, `conversion`, `gateway`, `commission`, `merchant-normal`, `merchant-markup`, `merchant-interchange`, `merchant-scheme`, `merchant-conversion`, `surcharge`]
**property name*** any
  * ]
**property name*** any
Transaction information.
  * ]
**property name*** any



```
{  
  "total_entry_count": 0,  
  "page_count": 0,  
  "current_page": 0,  
  "current_page_entry_count": 0,  
  "next_page_exists": true,  
  "transactions": [  
    {  
      "uuid": "20230315-6d432fb7217843388847",  
      "merchantTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
      "referenceUuid": "20230315-6d432fb7217843388847",  
      "type": "debit",  
      "status": "success",  
      "createdAt": "2001-02-03T04:05:06+02:00",  
      "amount": "9.99",  
      "currency": "EUR",  
      "withRegister": false,  
      "description": null,  
      "errors": [  
        {  
          "message": "Transaction declined.",  
          "code": 3002,  
          "adapter_message": "Do not honour",  
          "adapter_code": 5  
        }  
      ],  
      "fees": [  
        {  
          "amount": 0.5,  
          "currency": "EUR"  
        }  
      ]  
    }  
  ]  
}  

```

#### Authorization: http

```
**name:** basicAuth[](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L -X POST 'https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/reconciliation
Auth
Username
Password
Parameters
apiKey — pathrequired
Show optional parameters
retrieve — query
Body required
Content-Type
application/x-www-form-urlencoded text/plain
fromrequired
torequired
pagerequired
Last updated on **Apr 10, 2026**
# Retrieve

```
POST 
## https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey

```

Retrieves a list of transactions between `from` and `to` along with the fees associated with them.
Request parameters
If both a request body and GET parameters are specified, the GET parameters take precedence.
## Request[​](https://documentation.ixopay.com/api/reconciliation/retrieve#request "Direct link to request")
### Path Parameters
**apiKey** stringrequired
**Possible values:** `<= 50 characters`
API key of connector.


### Query Parameters
**retrieve** object
**Example:**`{"from":"2019-04-01 00:00:00","to":"2019-04-30 23:59:59","page":1}`


  * application/x-www-form-urlencoded


### Bodyrequired
**from** string<date-time>required
Date range start, must be before `to` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03T 04:05:06`
**to** string<date-time>required
Date range end, must be after `from` and the duration between `from`—`to` cannot be more than 30 days.
Use the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) `date-time` format, but replace `"T"` with a space (`" "`) and exclude the timezone.
**Example:**`2001-02-03 04:05:06`
**page** integer<int64>required
Page number.
**Possible values:** `>= 1`
**Example:**`1`


## Responses[​](https://documentation.ixopay.com/api/reconciliation/retrieve#responses "Direct link to Responses")
  * 200


A paged response of reconciled transactions.
:::info[Pagination] Each request will return a maximum of 100 data sets. In order to fetch the next page, simply indicate this using the `page` property. The response has the `next_page_exists` field that indicates if more data needs to be retrieved. :::
  * application/json


  * Schema
  * Example (auto)


**Schema**
**total_entry_count** integer<int64>
Total number of entries.
**Possible values:** `>= 0`
**page_count** integer<int64>
Total number of pages.
**Possible values:** `>= 0`
**current_page** integer<int64>
Current page of data set.
**Possible values:** `>= 0`
**current_page_entry_count** integer<int64>
Entry count of current page.
**Possible values:** `>= 0` and `<= 100`
**next_page_exists** boolean
Whether there is a next page.
**transactions** object[]
List of transactions on the current page (maximum `100`).
  * Array [
**uuid** stringrequired
Transaction ID.
**Example:**`20230315-6d432fb7217843388847`
**merchantTransactionId** stringnullable
Transaction's merchant ID.
**Default value:**`null`
**Example:**`ed0687ad-a876-42fd-bfc2-ce7c91d9700d`
**referenceUuid** stringnullable
ID of an initial transaction if it exists, e.g. a refund.
**Default value:**`null`
**Example:**`20230315-6d432fb7217843388847`
**type** stringnullable
Transaction type.
**Possible values:** [`debit`, `capture`, `deregister`, `preauthorize`, `refund`, `register`, `void`, `chargeback`, `payout`, `cb-reversal`, `prepare-debit`, `prepare-preauthorize`, `inc-auth`]
**Default value:**`null`
**Example:**`debit`
**status** stringnullable
**Default value:**`null`
**Example:**`success`
**createdAt** string<date-time>nullable
Transaction creation date.
**Default value:**`null`
**Example:**`2001-02-03T04:05:06+02:00`
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**withRegister** boolean
Was a `debit` transaction performed with registering the payment instrument.
**Default value:**`false`
**description** stringnullable
Transaction description.
**Default value:**`null`
**errors** object[]nullable
Errors of a transaction.
  * Array [
**message** stringnullable
Error message.
**Default value:**`null`
**Example:**`Transaction declined.`
**code** stringnullable
Error code.
**Default value:**`null`
**Example:**`3002`
**adapter_message** stringnullable
Adapter specific error message, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`Do not honour`
**adapter_code** stringnullable
Adapter specific error code, passed verbatim from the upstream Adapter.
**Default value:**`null`
**Example:**`5`
**property name*** any
  * ]
**fees** object[]nullable
Transaction fees.
  * Array [
**amount** Amount (string)nullable
Decimal amount separated by `.`, maximum of 3 decimals.
**Possible values:** Value must match regular expression `^(([0-9]+)|([0-9]+\.[0-9]{1,3}))$`
**Default value:**`null`
**Example:**`9.99`
**currency** Currency (string)nullable
[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) three-letter currency code.
**Possible values:** Value must match regular expression `^[A-Z]{3}$`
**Default value:**`null`
**Example:**`EUR`
**entity_type** FeeEntityType (string)
Type of fee.
**Possible values:** [`normal`, `markup`, `interchange`, `scheme`, `scheme-2`, `scheme-3`, `conversion`, `gateway`, `commission`, `merchant-normal`, `merchant-markup`, `merchant-interchange`, `merchant-scheme`, `merchant-conversion`, `surcharge`]
**property name*** any
  * ]
**property name*** any
Transaction information.
  * ]
**property name*** any



```
{  
  "total_entry_count": 0,  
  "page_count": 0,  
  "current_page": 0,  
  "current_page_entry_count": 0,  
  "next_page_exists": true,  
  "transactions": [  
    {  
      "uuid": "20230315-6d432fb7217843388847",  
      "merchantTransactionId": "ed0687ad-a876-42fd-bfc2-ce7c91d9700d",  
      "referenceUuid": "20230315-6d432fb7217843388847",  
      "type": "debit",  
      "status": "success",  
      "createdAt": "2001-02-03T04:05:06+02:00",  
      "amount": "9.99",  
      "currency": "EUR",  
      "withRegister": false,  
      "description": null,  
      "errors": [  
        {  
          "message": "Transaction declined.",  
          "code": 3002,  
          "adapter_message": "Do not honour",  
          "adapter_code": 5  
        }  
      ],  
      "fees": [  
        {  
          "amount": 0.5,  
          "currency": "EUR"  
        }  
      ]  
    }  
  ]  
}  

```

#### Authorization: http

```
**name:** basicAuth[](https://documentation.ixopay.com/api/reconciliation/reconciliation-api#authentication)**type:** http**scheme: **basic**description: **To authenticate API requests, the API username and password must be sent as BASIC Authentication in the `Authorization` header,
as defined in [RFC 7617](https://www.rfc-editor.org/rfc/rfc7617).
To achieve this, the username and password are first concatenated with a `:` (colon) separator,
and the resulting string is then Base64 encoded. Here is an example of how this process works:

1. Suppose the API username is `anyApiUser` and the password is `myPassword`.
2. Concatenate the username and password with a `:` separator: `anyApiUser:myPassword`.
3. Base64 encode the concatenated string: `YW55QXBpVXNlcjpteVBhc3N3b3Jk`.
4. Finally, include the `Authorization` header in the API request with the Base64 encoded string, like so: `Authorization: Basic YW55QXBpVXNlcjpteVBhc3N3b3Jk`.

:::tip
Many programming frameworks will automatically handle the BASIC Authentication process for you once you provide the username and password to the appropriate request object.
:::

```

  * curl
  * python
  * go
  * nodejs
  * php
  * java


  * CURL



```
curl -L -X POST 'https://gateway.ixopay.com/api/reconciliation/retrieve/:apiKey' \  
-H 'Content-Type: application/x-www-form-urlencoded' \  
-H 'Accept: application/json' \  
-H 'Authorization: Basic PHVzZXJuYW1lPjo8cGFzc3dvcmQ+'  

```

RequestCollapse all
Base URL
Edit
https://gateway.ixopay.com/api/reconciliation
Auth
Username
Password
Parameters
apiKey — pathrequired
Show optional parameters
retrieve — query
Body required
Content-Type
application/x-www-form-urlencoded text/plain
fromrequired
torequired
pagerequired
