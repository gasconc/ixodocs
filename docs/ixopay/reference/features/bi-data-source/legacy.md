---
title: BI data source v1 — ElasticSearch
summary: ' BI data sourcehttps://documentation.ixopay.com/docs/reference/features/bi-data-source  Version
  1'
tags:
- connectivity-authentication-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-connectivity-authentication-direct-link-connectivity-authentication
- querying-data-source-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-querying-data-source-direct-link-querying-data-source
- queries-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-queries-direct-link-queries
- finding-specific-transaction-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-finding-specific-transaction-direct-link-finding-specific-transaction
- count-transactions-status-last-hours-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-count-transactions-status-last-hours-direct-link-count-transactions-status-last-hours
- volume-transactions-per-method-currency-last-month-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-volume-transactions-per-method-currency-last-month-direct-link-volume-transactions-per-method-currency-last-month
- elasticsearch-schema-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-elasticsearch-schema-direct-link-elasticsearch-schema
- forward-compatibility-https-documentation-ixopay-com-docs-reference-features-data-source-legacy-forward-compatibility-direct-link-forward-compatibility
- api
- json
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [BI data source](https://documentation.ixopay.com/docs/reference/features/bi-data-source)
  * Version 1

# BI data source v1 — ElasticSearch
Deprecation notice
We're announcing the deprecation of BI Data Source API v1, effective after July 31st, 2024. This means v1 will no longer be actively supported in future updates and will be suspended by October 31st, 2024. In its place, we're introducing [BI Data Source API v2](https://documentation.ixopay.com/docs/reference/features/bi-data-source), built on OpenSearch for improved functionality and performance.
BI data source API v2 offers a [high degree of compatibility](https://opensearch.org/faq/#q1.8) with v1. Due to the potential impact of the change, we are releasing this as a non-backward compatible change, and provide clients the possibility to perform integration testing against the new v2 endpoint until October 31st, 2024.
To ensure a smooth transition, we highly recommend verifying your current integration with v1. The new v2 API is already available for use.
##### Here's what you need to do[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#heres-what-you-need-to-do "Direct link to Here's what you need to do")
The initial released BI data source API v1 is marked as deprecated after July 31st 2024, and we are releasing v2, which is based on OpenSearch.
  * Review the [BI Data Source API v2 documentation](https://documentation.ixopay.com/docs/reference/features/bi-data-source).
  * Change your API endpoints from `/query/transactions` to `/query/transactions/v2`
    * _Your current API key will continue to work with the new API version._
  * Test your integration with the new API.
  * Make any necessary adjustments to your code.

##### What will happen if I do nothing?[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#what-will-happen-if-i-do-nothing "Direct link to What will happen if I do nothing?")
By the end of the deprecation period, we will switch the current API endpoint to the OpenSearch API. This means the current endpoint `/query/transactions` will start serving the same responses as the `/query/transactions/v2`. However, `/query/transactions/v2` will still be available after the switch.
Please see [BI data source v2](https://documentation.ixopay.com/docs/reference/features/bi-data-source) for further information.
## Connectivity and authentication[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#connectivity-and-authentication "Direct link to Connectivity and authentication")
You can access the BI data source through these endpoints:
  * For production: `https://bds.ixopay.com/query/transactions`
  * For sandbox: `https://sandboxbds.ixopay.com/query/transactions`

Each request to the BI data source must be authenticated using BASIC Authentication credentials. Here, the username is the API Key, and the password is the API Key's password. You can refer to the [API Key section of our user manual](https://docs.ixopay.com/en/platform-user-administration-manual/system-setup/api-keys) for more information on creating an API Key.
## Querying the BI data source[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#querying-the-bi-data-source "Direct link to Querying the BI data source")
The BI data source is built on ElasticSearch 7.10 service, providing robust querying and search operations. It enables you to perform powerful data analysis on the stored transaction information.
You can use a wide range of query and search operations as described in the ElasticSearch 7.10 documentation. Here are some useful resources:
ElasticSearch:
  * [ElasticSearch Search APIs](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search.html)
  * [ElasticSearch Aggregation](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/search-aggregations.html)
  * [ElasticSearch Query DSL](https://www.elastic.co/guide/en/elasticsearch/reference/7.10/query-dsl.html)

For a more granular understanding of how to query the BI data source, please refer to the [Example Queries](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-queries) and [ElasticSearch Schema](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#elasticsearch-schema) sections. These resources contain detailed examples and the specific ElasticSearch schema used by the [IXOPAY platform](https://www.ixopay.com), which will guide you on how to effectively use this feature.
## Example queries[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-queries "Direct link to Example queries")
Below, you'll find a set of example queries you can execute on the BI data source to serve various use cases:
### Example 1: Finding a specific transaction[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-1-finding-a-specific-transaction "Direct link to Example 1: Finding a specific transaction")
Retrieve a particular transaction using its UUID:```
curl --request GET \  
     --url 'https://bds.ixopay.com/query/transactions?q=uuid:12345678901234567890' \  
     --user '$BI_API_KEY:$BI_PASSWORD'  

```

### Example 2: Count transactions by status (in the last 24 hours)[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-2-count-transactions-by-status-in-the-last-24-hours "Direct link to Example 2: Count transactions by status \(in the last 24 hours\)")
Aggregate transactions based on their status within the past 24 hours:```
curl --request POST \  
     --url 'https://bds.ixopay.com/query/Transactions' \  
     --header 'Content-Type: application/json; utf-8' \  
     --user '$BI_API_KEY:$BI_PASSWORD' \  
     --data '  
{  
  "aggs": {  
    "status_aggregation": {  
      "terms": {  
        "field": "status",  
        "min_doc_count": 1,  
        "order": {  
          "_term": "asc"  
        },  
        "size": 500  
      }  
    }  
  },  
  "query": {  
    "bool": {  
      "filter": [  
        {  
          "range": {  
            "created_at": {  
              "format": "epoch_millis",  
              "gte": "now-24h",  
              "lte": "now"  
            }  
          }  
        }  
      ]  
    }  
  },  
  "size": 0  
}'  

### Example 3: Volume of transactions per method & currency (in the last month)[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-3-volume-of-transactions-per-method--currency-in-the-last-month "Direct link to Example 3: Volume of transactions per method & currency \(in the last month\)")
Determine the total volume of transactions per payment method and currency over the previous month:
```
curl --request POST \  
     --url 'https://bds.ixopay.com/query/Transactions' \  
     --header 'Content-Type: application/json; utf-8' \  
     --user '$BI_API_KEY:$BI_PASSWORD' \  
     --data '  
{  
  "aggs": {  
    "method_aggregation": {  
      "terms": {  
        "field": "method",  
        "min_doc_count": 1,  
        "order": {  
          "_term": "asc"  
        },  
        "size": 100  
      },  
      "aggs": {  
        "currencies": {  
          "terms": {  
            "field": "currency",  
            "min_doc_count": 1,  
            "size": 100  
          },  
          "aggs": {  
            "volume": {  
              "sum": {  
                "field": "amount"  
              }  
            }  
          }  
        }  
      }  
    }  
  },  
  "query": {  
    "bool": {  
      "filter": [  
        {  
          "range": {  
            "created_at": {  
              "format": "epoch_millis",  
              "gte": "now-1M",  
              "lte": "now"  
            }  
          }  
        }  
      ]  
    }  
  },  
  "size": 0  
}'  

These examples illustrate the power and flexibility of querying the BI data source on [IXOPAY](https://www.ixopay.com). Using these queries, you can retrieve, aggregate, and analyze your transaction data effectively.
## ElasticSearch Schema[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#elasticsearch-schema "Direct link to ElasticSearch Schema")
The BI data source uses a specific ElasticSearch schema. You can download the description here: [bi-elements-legacy.json5](https://documentation.ixopay.com/assets/files/bi-elements-legacy-b214097fff5a69e6c0c95c3a71b8df22.json5).
ElasticSearch Schema
```
"tenant_guid": { "type": "keyword" }, // GUID of the (sub-)tenant  
"tenant_name": { "type": "keyword" }, // Name of the (sub-)tenant  
"master_tenant": { "type": "keyword" }, // GUID of the main tenant  
"merchant_guid": { "type": "keyword" }, // GUID of the merchant  
"merchant_name": { "type": "keyword" }, // Name of the merchant  
"connector_guid": { "type": "keyword" }, // GUID of the connector  
"connector_name": { "type": "keyword" }, // Name of the connector  
"provider_guid": { "type": "keyword" }, // GUID of the provider  
"provider_name": { "type": "keyword" }, // Name of the provider  
  
"uuid": { "type": "keyword" }, // Transaction's UUID  
"purchase_id": { "type": "text" }, // Transaction's purchase ID  
"test_mode": { "type": "boolean" }, // Test-mode enabled or disabled  
  
//  
// Routing  
//  
  
"related_id": { "type": "keyword" }, // UUID of the related transaction (e.g., pre-authorization in case of capture)  
"broker_id": { "type": "keyword" }, // UUID of the main transaction in case of routing  
"meta_connector_guid": { "type": "keyword" }, // GUID of the meta-connector  
"meta_connector_name": { "type": "keyword" }, // Name of the meta-connector  
  
//  
// Base data  
//  
  
"adapter": { "type": "keyword" }, // Adapter name  
"method": { "type": "keyword" }, // Payment-method name  
// Transaction type: "debit", "capture", "deregister", "preauthorize", "refund", "register", "void", "chargeback",  
// "payout", "cb-reversal", "inc-auth", "deregister-pan", "deregister-nt", "register-nt"  
"type": { "type": "keyword" },  
"status": { "type": "keyword" }, // Current status of the transaction  
"first_error_code": { "type": "keyword" }, // Code of first error (see "errors" element below)  
"first_error_message": { "type": "keyword" }, // Message of first error (see "errors" element below)  
"first_adapter_error_code": { "type": "keyword" }, // Adapter code of first error (see "errors" element below)  
"first_adapter_error_message": { "type": "keyword" }, // Adapter message of first error (see "errors" element below)  
"api_call_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Timestamp of the incoming API call  
"received_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Timestamp when we received the transaction  
"created_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Creation date  
"modified_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Last modified date  
// Who initiated the transaction: "merchant", "provider", "vt-merchant", "vt-tenant", "scheduler",  
// "transaction-batch-file", "user", "push", "reconciliation", "settlement", "postback", "import",  
// "register-nt-initial", "register-nt-batch"  
"initiated_by": { "type": "keyword" },  
"merchant_txid": { "type": "text" }, // Transaction ID from merchant  
"adapter_txid": { "type": "text" }, // Transaction ID from payment provider  
"adapter_token": { "type": "text" }, // Payment token from payment provider  
"adapter_processor_txid": { "type": "text" }, // Optional transaction ID from processor behind the payment provider  
"additional_id1": { "type": "text" }, // Additional ID 1 sent by merchant  
"additional_id2": { "type": "text" }, // Additional ID 2 sent by merchant  
"arn": { "type": "keyword" }, // Acquirer reference number  
"auth_code": { "type": "keyword" }, // Auth code  
"reporting_identifier": { "type": "keyword" }, // Reporting identifier  
"rrn": { "type": "keyword" }, // Retrieval reference number  
"stan": { "type": "keyword" }, // System trace audit number  
"amount": { "type" : "scaled_float", "scaling_factor": 100 }, // Amount  
"currency": { "type": "keyword" }, // Currency  
"base_amount": { "type" : "scaled_float", "scaling_factor": 100 }, // Amount in base currency of tenant  
"base_currency": { "type": "keyword" }, // Base currency of tenant  
"description": { "type": "text" }, // Description (sent by merchant)  
"statement_descriptor": { "type": "text" }, // Descriptor on customer's statement  
"buyer_country": { "type": "keyword" }, // Country of customer (if provided by the provider)  
"buyer_country_geopoint": { "type": "geo_point" }, // Geo-point for this country  
"3d_secure": { "type": "keyword" }, // 3D-Secure flag: "mandatory", "optional", "off"  
// Transaction indicator: "SINGLE", "INITIAL", "RECURRING", "FIRST-CARDONFILE", "CARDONFILE", "CARDONFILE_MERCHANT",  
// "MOTO"  
"transaction_indicator": { "type": "keyword" },  
// source of the transaction:  
// - "2": created via the deprecated XML API  
// - "3": created via the JSON API  
// - "direct-2": created via the deprecated direct PCI XML API  
// - "direct-3": created via the direct PCI JSON API  
// - "batch-api: created via the Batch API  
// - "push-api: created via the Push API  
// - "ui: Created in the admin UI  
// - "scheduler: Created by the scheduler  
// - "psp: Created by a callback, a settlement, or a reconciliation  
"api_version": { "type": "keyword" },  
  
"incoming_settlement_state": {"type": "keyword"}, // Current settlement state from the provider to tenant/merchant  
"outgoing_settlement_state": {"type": "keyword"}, // Current settlement state from tenant to merchant  
  
//  
// Extra data  
//  
  
// Extra data sent by the merchant, contains only entries that are whitelisted to be indexed  
"extra_data": { "type": "object" },  
// Extra data returned by the provider, contains only entries that are whitelisted to be indexed  
"result_extra_data": { "type": "object" },  
// Legacy callback extra data, contains only entries that are whitelisted to be indexed  
"callback_extra_data": { "type": "object" },  
// Extra data sent by the merchant, contains all entries but not indexed for search  
"extra_data_keyvalue": {  
  "type": "nested",  
  "properties": {  
    "value": { "type": "keyword" },  
    "key": { "type": "keyword" }  
  }  
},  
// Extra data returned by the provider, contains all entries but not indexed for search  
"result_extra_data_keyvalue": {  
  "type": "nested",  
  "properties": {  
    "value": { "type": "keyword" },  
    "key": { "type": "keyword" }  
  }  
},  
// Legacy callback extra data, contains all entries but not indexed for search  
"callback_extra_data_keyvalue": {  
  "type": "nested",  
  "properties": {  
    "value": { "type": "keyword" },  
    "key": { "type": "keyword" }  
  }  
},  
  
//  
// Custom data  
//  
  
"return_data": { "type": "object" }, // Additional transaction data (varies by method)  
  
// Items sent by Merchant  
"items": {  
  "type": "nested",  
  "properties": {  
    "identification": { "type": "text" }, // ID of the item  
    "name": { "type": "text" }, // Name of the item  
    "price": { "type" : "scaled_float", "scaling_factor": 100 }, // Price of the item  
    "currency": { "type": "keyword" }, // Currency of the price  
    "quantity": { "type" : "scaled_float", "scaling_factor": 100 }, // Quantity of items sold  
    "description": { "type": "text" } // Description of the item  
  }  
},  
  
// Split transaction  
"transaction_splits": {  
  "type": "nested",  
  "properties": {  
    "amount": { "scaling_factor": 100, "type": "scaled_float" },  
    "currency": { "type": "keyword" },  
    "base_amount": { "scaling_factor": 100, "type": "scaled_float" },  
    "transaction_internal_id": { "type": "keyword" },  
    "merchant_guid": { "type": "keyword" }  
  }  
},  
  
//  
// Attributes computed by follow-up transaction  
//  
  
"is_recurring": { "type": "boolean" },  
"registered_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_chargedback": { "type": "boolean" },  
"chargedback_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_charged_reversed": { "type": "boolean" },  
"chargeback_reversed_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_deregistered": { "type": "boolean" },  
"deregistered_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_refunded": { "type": "boolean" },  
"refunded_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_fully_refunded": { "type": "boolean" },  
"is_captured": { "type": "boolean" },  
"captured_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_voided": { "type": "boolean" },  
"voided_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" },  
"is_with_register": { "type": "boolean" },  
// In the case of automatic failover through a meta-connector, this identifies the attempt number  
"attempt": { "type": "integer" },  
"is_in_manual_review": { "type": "boolean" }, // Whether this transaction is currently in the manual review list  
  
// Statistical data  
"is_postback_delivered": { "type": "boolean" }, // Is the postback successfully acknowledged by the merchant's system?  
  
//  
// Tags of the transaction  
//  
  
"tags": {  
  "type": "nested",  
  "properties": {  
    "name": { "type": "keyword" }, // Name of the tag  
    "createdAt": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Tag creation date  
    "createdBy": { "type": "keyword" } // Tag created by  
  }  
},  
  
// Fee data  
"fees": {  
  "type": "nested",  
  "properties": {  
    "amount": { "type": "scaled_float", "scaling_factor": 1000 }, // Fee amount  
    "currency": { "type": "keyword" }, // Fee currency  
    "deducts_payout": { "type": "boolean" }, // Does this fee affect the payout amount?  
    "description": { "type": "text" }, // Description  
    "date": { "type": "date", "format": "yyyy-MM-dd" }, // Effective date for fees  
    "created_by": { "type": "keyword" }, // User ID if manually created  
    "entity": { "type": "text", "fields": { "raw": { "type": "keyword" } } }, // Fee entity name  
    "entity_id": { "type": "keyword" }, // Fee entity ID  
    // Type of entity:  
    // - Provider side Mapping: normal, markup, interchange, scheme, conversion, gateway  
    // - Merchant side Mapping: merchant-normal, merchant-markup, merchant-interchange, merchant-scheme,  
    //   merchant-conversion  
    "entity_type": { "type": "keyword" },  
    "base_currency": { "type": "keyword" }, // Base currency configured for the tenant  
    "base_amount": { "type": "scaled_float", "scaling_factor": 1000 } // Amount converted to base currency of tenant  
  }  
},  
  
// Customer data  
"customer": {  
  "type": "object",  
  "properties": {  
    "identification": { "type": "text" },  
    "first_name": { "type": "text" },  
    "last_name": { "type": "text" },  
    "birth_date": { "type": "text" },  
    "billing_address1": { "type": "text" },  
    "billing_address2": { "type": "text" },  
    "billing_city": { "type": "text" },  
    "billing_postcode": { "type": "text" },  
    "billing_state": { "type": "text" },  
    "billing_country": { "type": "text" },  
    "billing_country_geopoint": { "type": "geo_point" },  
    "billing_phone": { "type": "text" },  
    "shipping_firstname": { "type": "text" },  
    "shipping_lastname": { "type": "text" },  
    "shipping_company": { "type": "text" },  
    "shipping_address1": { "type": "text" },  
    "shipping_address2": { "type": "text" },  
    "shipping_city": { "type": "text" },  
    "shipping_postcode": { "type": "text" },  
    "shipping_state": { "type": "text" },  
    "shipping_country": { "type": "text" },  
    "shipping_country_geopoint": { "type": "geo_point" },  
    "shipping_phone": { "type": "text" },  
    "company": { "type": "text" },  
    "email": { "type": "text", "fields": { "raw": { "type": "text", "analyzer": "email"} } },  
    "email_verified": { "type": "boolean" },  
    "ip_address": { "type": "ip" },  
    "national_id": { "type": "text" },  
    "iban": { "type": "text" },  
    "bic": { "type": "text" },  
    "gender": { "type": "text" },  
    // Extra data supplied on a customer, contains only entries that are whitelisted to be indexed  
    "extra_data": { "type": "object" },  
    // Extra data supplied on a customer, contains all entries but not indexed for search  
    "extra_data_keyvalue": {  
      "type": "nested",  
      "properties": {  
        "value": { "type": "keyword" },  
        "key": { "type": "keyword" }  
      }  
    }  
  }  
},  
  
// Creditcard information  
"creditcard": {  
  "type": "object",  
  "properties": {  
    "type": { "type": "keyword" }, // Card Type  
    "card_holder": { "type": "text" }, // Card holder  
    "country": { "type": "keyword" }, // BIN country of card  
    "expiry_month": { "type": "byte" },  
    "expiry_year": { "type": "short" },  
    "first_six_digits": { "type": "text" },  
    "last_four_digits": { "type": "text" },  
    "xid": { "type": "text" }, // XID of 3D-Secure authentication process  
    "3ds_status": { "type": "keyword" }, // Authentication result of 3D-Secure process: "off", "attempted", "authenticated"  
    "enrolled": { "type": "keyword" }, // Is the cardholder 3D-Secure enrolled?  
    "eci": { "type": "keyword" }, // ECI Flag  
    "cavv": { "type": "text" }, // CAVV result value of 3D-Secure authentication  
    "merchant_fingerprint": { "type": "text" }, // Fingerprint of card (merchant-specific)  
    "global_fingerprint": { "type": "text" }, // Fingerprint of card (system-wide)  
    "card_region": { "type": "keyword" }, // Card region  
    "bin_brand": { "type": "keyword" }, // BIN brand of card  
    "bin_digits": { "type": "keyword" }, // BIN digits of card  
    "bin_bank": { "type": "keyword" }, // BIN bank of card  
    "bin_country": { "type": "keyword" }, // BIN country of card  
    "bin_country_geopoint": { "type": "geo_point" }, // Geo-point of BIN country  
    "bin_type": { "type": "keyword" }, // BIN type: Consumer, Business, etc.  
    "bin_level": { "type": "keyword" }, // BIN level: Standard, Gold, Platinum  
    "3ds_version":  { "type": "keyword"}, // 3D Secure version applied  
    "3ds_env": { "type": "keyword"}, // 3D Secure environment used: "inhouse" or "provider"  
    "3ds_dsTransId":  { "type": "keyword"}, // Directory server transaction ID for 3D Secure 2.x authentication  
    "3ds_serverTransId": { "type": "keyword"}, // Directory server transaction ID for 3D Secure 2.x authentication  
    "3ds_challenged":  { "type": "boolean"}, // Was the challenge flow triggered?  
    "3ds_challenge_completed": { "type": "boolean"}, // Was the challenge flow completed?  
    "3ds_trans_status":  { "type": "keyword"}, // 3DS transaction status  
    "3ds_method_fingerprinted": { "type": "boolean"}, // Was the method flow triggered  
    "token_type": { "type": "keyword"}, // Type of token used, if any, e.g., ApplePay, GooglePay, etc.  
    "data_from_ref_transaction": { "type": "boolean" } // Creditcard data was fetched from a related transaction  
  }  
},  
  
// Transaction errors  
"errors": {  
  "type": "nested",  
  "properties": {  
    "message": { "type": "text" }, // Error message of gateway  
    "code": { "type": "text" }, // Error code of gateway  
    "adapter_message": { "type": "text" }, // Error message from provider  
    "adapter_code": { "type": "text" }, // Error code from provider  
    "created_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" } // Creation date  
  }  
},  
  
// Status history  
"status_history": {  
  "type": "nested",  
  "properties": {  
    "status_field": { "type": "keyword" },  
    "from_status": { "type": "keyword" },  
    "to_status": { "type": "keyword" },  
    "created_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }  
  }  
},  
  
// Risk evaluation data  
"risk_data": {  
  "type": "object",  
  "properties": {  
    "risk_profile_id": { "type": "integer" }, // ID of the executed risk profile  
    "risk_profile_name": { "type": "text", "fields": { "raw": { "type": "keyword" } } }, // Name of the risk profile  
    "risk_check_performed_on": { "type": "keyword" }, // Datetime when the risk check was performed  
    "final_score": { "type": "integer" }, // Total score  
    "final_action": { "type": "keyword" }, // Final action  
    "alert": { "type": "boolean" }, // Alert notification triggered  
    "3d_secure": { "type": "keyword" } // Resulting 3D-Secure flagging  
  }  
},  
  
// Individual risk check results  
"risk_checks": {  
  "type": "nested",  
  "properties": {  
    "check_type": { "type": "text", "fields": { "raw": { "type": "keyword" } } }, // ID of the executed risk check  
    "rule_id": { "type": "integer" }, // ID of the risk rule  
    "hit": { "type": "boolean" }, // Did this check hit?  
    "action": {"type": "keyword" }, // Executed action  
    "score_added": { "type": "integer" }, // Score added to total score  
    "alert": { "type": "boolean" }, // Alert notification triggered  
    "manual_review": { "type": "boolean" }, // Manual review triggered  
    "3d_secure": { "type": "keyword" } // Resulted 3D-Secure flagging  
  }  
},  
  
// Post-processing data  
"invoiceable": { "type": "boolean" }, // Is this transaction invoice-able?  
"reconciliation_state": {"type": "keyword"}, // Reconciliation state: "none", "matched", "mismatch"  
"settlement_amount": { "type" : "scaled_float", "scaling_factor": 100 }, // The settled amount from the provider  
"settlement_currency": { "type": "keyword" }, // Settlement currency from the provider  
"settlement_date": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Settlement date from the provider  
// Exchange rate for settlement amount if applicable  
"settlement_exchange_rate": { "type" : "scaled_float", "scaling_factor": 100 },  
"outgoing_settlement_amount": { "type" : "scaled_float", "scaling_factor": 100 }, // Outgoing settlement amount  
"outgoing_settlement_currency": { "type": "keyword" }, // Outgoing settlement currency  
"outgoing_settlement_date": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Outgoing settlement date  
  
// Further post-processing data  
"postprocessing": {  
  "type": "object",  
  "properties": {  
    "reconciliation_conflicts": { // Exists if reconciliation conflicts occurred  
      "type": "nested",  
      "properties": {  
        "resolved": { "type": "boolean" }, // Is the conflict resolved?  
        "resolution": { "type": "keyword" } // Resolution option  
      }  
    },  
    "provider_settlement": { // Exists if a provider settlement batch was created  
      "type": "object",  
      "properties": {  
        "settlement_status": {"type": "keyword"}, // Status of provider settlement batch  
        "settlement_number": {"type": "text"}, // Settlement batch number from the provider  
        "payment_ref": {"type": "text"}, // Payment reference  
        "settlement_date":{ "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Date of settlement  
        "funds_received_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" } // Date when funds were received  
      }  
    },  
    "jobs": { // All post-processing jobs this transaction appears in  
      "type": "nested",  
      "properties": {  
        "job_type_id": {"type": "keyword" }, // ID of the job type  
        "job_type_name": {"type": "keyword" }, // Name of the job type  
        "created_by": {"type": "keyword" }, // If manually created, this contains the User ID  
        "created_at": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Datetime of the job creation  
        "status": {"type": "keyword" }, // Status of the job  
        "conflicted": { "type": "boolean" }, // Is the job in a conflicted state?  
        "external_id": {"type": "text" }, // External ID of the job  
        "period_from": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Job period from  
        "period_to": { "type": "date", "format": "yyyy-MM-dd HH:mm:ss" }, // Job period to  
        "job_data": { "type": "object" } // Additional job data  
      }  
    }  
  }  
}  

### Forward compatibility[​](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#forward-compatibility "Direct link to Forward compatibility")
note
The information provided in this section is for informational purposes only. The exact terms and conditions governing the IXOPAY platform BI data source are defined in the applicable contract. For any clarifications or questions regarding specific terms and conditions, please refer to the signed contract.
  * **API compatibility:** We maintain compatibility with one of the currently supported ElasticSearch versions to ensure ongoing integration with your existing systems.
  * **Changes:**
    * _Non-backward compatible changes:_ When significant changes to the data model necessitate non-backward compatibility (for example, modifications to existing data fields, structure, or API semantics), we will introduce a new API version. The previous API version will be phased out two months following the announcement of the new version to allow ample time for integrators to migrate.
    * _Backward compatible changes:_ Changes that maintain backward compatibility (for example, addition of new optional fields) will be implemented without the need for a new API version and will not require any notifications or specific action from integrators.
  * **Data integrity:** Data provided through the IXOPAY platform BI data source is intended for use as a query and data source for BI systems, but absolute data consistency is not guaranteed. This means that there may be occasional discrepancies between the data provided by the API and the underlying data sources.
  * **Data latency:** Data is not provided in real time but generally within 24 hours. This is due to data processing and validation requirements.
  * **Data changeability:** Data provided through the API is subject to change due to factors such as chargebacks, settlements, and updates from underlying systems. Integrators should account for this potential for data changes in their applications.

  * [Connectivity and authentication](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#connectivity-and-authentication)
  * [Querying the BI data source](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#querying-the-bi-data-source)
  * [Example queries](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-queries)
    * [Example 1: Finding a specific transaction](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-1-finding-a-specific-transaction)
    * [Example 2: Count transactions by status (in the last 24 hours)](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-2-count-transactions-by-status-in-the-last-24-hours)
    * [Example 3: Volume of transactions per method & currency (in the last month)](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#example-3-volume-of-transactions-per-method--currency-in-the-last-month)
  * [ElasticSearch Schema](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#elasticsearch-schema)
    * [Forward compatibility](https://documentation.ixopay.com/docs/reference/features/bi-data-source/legacy#forward-compatibility)