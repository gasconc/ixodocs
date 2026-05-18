---
title: The Basics
summary: ' Payment Serviceshttps://documentation.ixopay.com/modules/docs/tokenex/payment-services  ProcessTransaction
  API  The Basics'
tags:
- overview-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-overview-direct-link-overview
- works-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-works-direct-link-works
- endpoints-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-endpoints-direct-link-endpoints
- authentication-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-authentication-direct-link-authentication
- transaction-types-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-transaction-types-direct-link-transaction-types
- request-structure-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-request-structure-direct-link-request-structure
- response-structure-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-response-structure-direct-link-response-structure
- understanding-success-transactionresult-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-understanding-success-transactionresult-direct-link-understanding-success-transactionresult
- cvv-injection-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-cvv-injection-direct-link-cvv-injection
- common-transaction-flows-https-documentation-ixopay-com-modules-docs-tokenex-payment-services-payment-services-basics-common-transaction-flows-direct-link-common-transaction-flows
source_url: https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics
portal: ixopay-modules
updated: '2026-05-18'
related: []
---

* [Payment Services](https://documentation.ixopay.com/modules/docs/tokenex/payment-services)
  * ProcessTransaction API
  * The Basics

# The Basics
The ProcessTransaction API is the recommended way to process payments through Payment Services. It provides access to a wide range of payment gateways with a normalized response format, making it easier to handle transactions consistently across different processors.
## Overview[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#overview "Direct link to Overview")
The ProcessTransaction API offers several advantages for payment processing:
  * **Gateway flexibility** — Switch or add payment processors without changing your integration
  * **Normalized responses** — Receive consistent response structures with pre-parsed AVS and CVV results
  * **Token portability** — Use the same tokens across any supported gateway
  * **Flexible tokenization** — Use existing tokens or tokenize new cards during the transaction
  * **CVV injection** — Include previously collected CVV values without storing them yourself

:::note Why ProcessTransaction API? For most integrations, the ProcessTransaction API provides the best balance of gateway coverage, ease of integration, and response consistency. Choose the [Card/Check/Wallet API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics) only if you need access to complete, raw gateway responses. :::
## How It Works[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#how-it-works "Direct link to How It Works")
When you send a transaction request, Payment Services:
  1. **Receives your request** with the TokenEx token and gateway-specific parameters
  2. **Detokenizes** the token to retrieve the original PAN
  3. **Formats the request** according to your gateway's requirements
  4. **Sends the transaction** to the payment processor
  5. **Parses the response** and returns a normalized result with AVS/CVV details

## Endpoints[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#endpoints "Direct link to Endpoints")  
| Endpoint  | Path  | When to Use  |  
| --- | --- | --- |  
| `ProcessTransaction`  | `/PaymentServices.svc/REST/ProcessTransaction`  | Use with existing TokenEx tokens: recurring billing, follow-up transactions (capture, refund, void)  |  
| `ProcessTransactionAndTokenize`  | `/PaymentServices.svc/REST/ProcessTransactionAndTokenize`  | Use with PANs or encrypted PANs: first-time transactions, guest checkout, card data migration  |  
:::tip Choosing between endpoints If you're using TokenEx iFrame or mobile SDK, cards are typically tokenized during collection—use `ProcessTransaction`. If you're receiving PANs directly (from a migration or encrypted source), use `ProcessTransactionAndTokenize` to tokenize and transact in one call. :::
## Authentication[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#authentication "Direct link to Authentication")
Both endpoints use request body authentication. Include your credentials in every request:  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| `APIKey`  | string  | Yes  | Your TokenEx API key  |  
| `TokenExID`  | string  | Yes  | Your TokenEx account ID  |  
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    // ... gateway and transaction parameters  

  }  

}  

```:::warning Keep credentials secure Never expose your `APIKey` in client-side code. All Payment Services requests should originate from your server. :::
## Transaction Types[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#transaction-types "Direct link to Transaction Types")
Specify the type of transaction using the `TransactionType` parameter:  
| Value  | Type  | Description  | When to Use  |  
| --- | --- | --- | --- |  
| `1`  | Authorize  | Verifies funds and places a hold without capturing  | Use for orders that ship later; capture when fulfilling  |  
| `2`  | Capture  | Captures a previously authorized transaction  | Use after authorization when ready to collect payment  |  
| `3`  | Purchase  | Authorizes and captures in a single request  | Use for immediate fulfillment (digital goods, in-store)  |  
| `4`  | Refund  | Returns funds to the customer  | Use to return money for completed transactions  |  
| `5`  | Void  | Cancels a transaction before settlement  | Use to cancel authorizations or same-day transactions  |  
| `6`  | Reverse  | Attempts void, falls back to refund if settled  | Use when unsure if transaction has settled  |  
:::info Authorize vs Purchase Use **Authorize** (1) followed by **Capture** (2) when there's a delay between order placement and fulfillment—this is common for physical goods. Use **Purchase** (3) for immediate transactions like digital downloads or in-person sales. :::
## Request Structure[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#request-structure "Direct link to Request Structure")
Both endpoints use the same request format. The `TransactionRequest` object contains nested objects for gateway credentials, card data, and transaction details.
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345",  

      "billing_address": {  

        "name": "Alex Smith",  

        "address1": "123 Main Street",  

        "city": "Tulsa",  

        "state": "OK",  

        "zip": "74119"  

      }  

    }  

  }  

}  

```**Request Parameters:**  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| `APIKey`  | string  | Yes  | Your TokenEx API key  |  
| `TokenExID`  | string  | Yes  | Your TokenEx account ID  |  
| `TransactionType`  | integer  | Yes  | Transaction type (1-6, see table above)  |  
| `TransactionRequest`  | object  | Yes  | Contains `gateway`, `credit_card`, and `transaction` objects  |  
**Additional parameters for ProcessTransactionAndTokenize:**  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| `TokenScheme`  | string  | Yes  | The token format to generate. See [Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes)  |  
| `Encrypted`  | boolean  | No  | Set to `true` if the PAN is encrypted. Default: `false`  |  
:::tip Token vs PAN Use `ProcessTransaction` when `credit_card.number` contains a TokenEx token. Use `ProcessTransactionAndTokenize` when it contains a PAN (or encrypted PAN) that needs tokenization. :::
The exact fields within each nested object vary by gateway. See [Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters) for the specific structure required by your payment processor.
## Response Structure[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#response-structure "Direct link to Response Structure")
Both endpoints return the same response structure:
```

{  

  "Success": true,  

  "TransactionResult": true,  

  "ReferenceNumber": "15102913382030662954",  

  "Authorization": "123456;A",  

  "Message": "Transaction Approved",  

  "Error": "",  

  "AVS_Result": {  

    "Code": "Y",  

    "Message": "Street address and postal code match",  

    "PostalMatch": "Y",  

    "StreetMatch": "Y"  

  },  

  "CVV_Result": {  

    "Code": "M",  

    "Message": "CVV matches"  

  },  

  "Params": [  

    {  

      "Key": "AuthorizationCode",  

      "Value": "A12345"  

    },  

    {  

      "Key": "TransactionID",  

      "Value": "7891011121314"  

    }  

  ],  

  "Token": "411111XXXXXX1111",  

  "Test": false  

}  

```**Response Parameters:**  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| `Success`  | boolean  |  `true` if TokenEx successfully communicated with the gateway. `false` indicates a connectivity or configuration issue—check `Error` for details.  |  
| `TransactionResult`  | boolean  |  `true` if the gateway approved the transaction. `false` typically means declined—check `Message` and `Params` for details.  |  
| `ReferenceNumber`  | string  | TokenEx reference number for this transaction. Use this for support inquiries.  |  
| `Authorization`  | string  | Combined authorization data from the gateway. Use this value for follow-up transactions (capture, void, refund).  |  
| `Message`  | string  | Human-readable message from the gateway (e.g., "Transaction Approved", "Insufficient Funds").  |  
| `Error`  | string  | Error details if `Success` is `false`. Empty string on success.  |  
| `AVS_Result`  | object  | Address Verification System results with `Code`, `Message`, `PostalMatch`, and `StreetMatch`.  |  
| `CVV_Result`  | object  | Card Verification Value results with `Code` and `Message`.  |  
| `Params`  | array  | Key-value pairs containing additional gateway-specific response data. Contents vary by gateway.  |  
| `Token`  | string  |  _(ProcessTransactionAndTokenize only)_ The newly created TokenEx token for the card.  |  
| `Test`  | boolean  |  `true` if this was a test/sandbox transaction.  |  
## Understanding Success vs TransactionResult[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#understanding-success-vs-transactionresult "Direct link to Understanding Success vs TransactionResult")
The response contains two boolean fields that indicate different things:  
| Field  | Meaning  |  
| --- | --- |  
| `Success`  | Did TokenEx successfully send the request to the gateway and receive a response?  |  
| `TransactionResult`  | Did the gateway approve the transaction?  |  
**Common scenarios:**  
| Success  | TransactionResult  | Meaning  |  
| --- | --- | --- |  
| `true`  | `true`  | Transaction approved  |  
| `true`  | `false`  | Transaction declined by gateway (check `Message`)  |  
| `false`  | `false`  | Communication error with gateway (check `Error`)  |  
:::warning Always save the Authorization When `TransactionResult` is `true`, save the `Authorization` value. You'll need it for any follow-up transactions like captures, voids, or refunds. :::
## CVV Injection[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#cvv-injection "Direct link to CVV Injection")
If you collected the CVV separately using TokenEx (for example, through the iFrame with CVV-only collection), you can inject it into the transaction without handling the value directly.
To use CVV injection, set the `verification_value` field to the literal string `"cvv"`:
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```Payment Services will replace `"cvv"` with the actual CVV value associated with the token before sending to the gateway.
:::info CVV storage duration CVV values are stored temporarily and associated with the token during collection. Check with TokenEx support for CVV retention policies in your configuration. :::
## Common Transaction Flows[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#common-transaction-flows "Direct link to Common Transaction Flows")
### Authorize Then Capture[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#authorize-then-capture "Direct link to Authorize Then Capture")
For orders where fulfillment is delayed (e.g., physical goods):
**Step 1: Authorize**
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 9999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```**Step 2: Capture** (when ready to ship)
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 9999  

    }  

  }  

}  

```### Purchase with New Card[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#purchase-with-new-card "Direct link to Purchase with New Card")
For immediate transactions with a new card (tokenize and purchase together):
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 3,  

  "TokenScheme": "sixTOKENfour",  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```The response includes both the transaction result and a `Token` for future use.
### Refund a Transaction[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#refund-a-transaction "Direct link to Refund a Transaction")
To return funds after settlement:
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 999  

    }  

  }  

}  

```## Testing[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#testing "Direct link to Testing")
Use your gateway's test/sandbox environment during development:
  1. Configure your Payment Services request for the test environment
  2. Use test card numbers and any specific values provided by your gateway

:::tip Test mode indicator When processing test transactions, the response will include `"Test": true`. Always verify this field is `false` before going live. :::
## Next Steps[​](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#next-steps "Direct link to Next Steps")
  * **[Gateway Parameters](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/gateway-parameters)** — Find the specific parameters required for your payment processor
  * **[Token Schemes](https://documentation.ixopay.com/modules/docs/tokenex/universal-token-schemes)** — Learn about available token formats for ProcessTransactionAndTokenize
  * **[API Authentication](https://documentation.ixopay.com/modules/docs/tokenex/the-basics-1#authentication-and-authorization)** — Detailed authentication documentation
  * **[Card/Check/Wallet API](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-v2-the-basics)** — Alternative API for raw gateway responses
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    // ... gateway and transaction parameters  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345",  

      "billing_address": {  

        "name": "Alex Smith",  

        "address1": "123 Main Street",  

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

  "Success": true,  

  "TransactionResult": true,  

  "ReferenceNumber": "15102913382030662954",  

  "Authorization": "123456;A",  

  "Message": "Transaction Approved",  

  "Error": "",  

  "AVS_Result": {  

    "Code": "Y",  

    "Message": "Street address and postal code match",  

    "PostalMatch": "Y",  

    "StreetMatch": "Y"  

  },  

  "CVV_Result": {  

    "Code": "M",  

    "Message": "CVV matches"  

  },  

  "Params": [  

    {  

      "Key": "AuthorizationCode",  

      "Value": "A12345"  

    },  

    {  

      "Key": "TransactionID",  

      "Value": "7891011121314"  

    }  

  ],  

  "Token": "411111XXXXXX1111",  

  "Test": false  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 9999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 9999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 3,  

  "TokenScheme": "sixTOKENfour",  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    // ... gateway and transaction parameters  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345",  

      "billing_address": {  

        "name": "Alex Smith",  

        "address1": "123 Main Street",  

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

  "Success": true,  

  "TransactionResult": true,  

  "ReferenceNumber": "15102913382030662954",  

  "Authorization": "123456;A",  

  "Message": "Transaction Approved",  

  "Error": "",  

  "AVS_Result": {  

    "Code": "Y",  

    "Message": "Street address and postal code match",  

    "PostalMatch": "Y",  

    "StreetMatch": "Y"  

  },  

  "CVV_Result": {  

    "Code": "M",  

    "Message": "CVV matches"  

  },  

  "Params": [  

    {  

      "Key": "AuthorizationCode",  

      "Value": "A12345"  

    },  

    {  

      "Key": "TransactionID",  

      "Value": "7891011121314"  

    }  

  ],  

  "Token": "411111XXXXXX1111",  

  "Test": false  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 9999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 9999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 3,  

  "TokenScheme": "sixTOKENfour",  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    // ... gateway and transaction parameters  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345",  

      "billing_address": {  

        "name": "Alex Smith",  

        "address1": "123 Main Street",  

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

  "Success": true,  

  "TransactionResult": true,  

  "ReferenceNumber": "15102913382030662954",  

  "Authorization": "123456;A",  

  "Message": "Transaction Approved",  

  "Error": "",  

  "AVS_Result": {  

    "Code": "Y",  

    "Message": "Street address and postal code match",  

    "PostalMatch": "Y",  

    "StreetMatch": "Y"  

  },  

  "CVV_Result": {  

    "Code": "M",  

    "Message": "CVV matches"  

  },  

  "Params": [  

    {  

      "Key": "AuthorizationCode",  

      "Value": "A12345"  

    },  

    {  

      "Key": "TransactionID",  

      "Value": "7891011121314"  

    }  

  ],  

  "Token": "411111XXXXXX1111",  

  "Test": false  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 9999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 9999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 3,  

  "TokenScheme": "sixTOKENfour",  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 999  

    }  

  }  

}  

```  * [Overview](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#overview)
  * [How It Works](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#how-it-works)
  * [Endpoints](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#endpoints)
  * [Authentication](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#authentication)
  * [Transaction Types](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#transaction-types)
  * [Request Structure](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#request-structure)
  * [Response Structure](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#response-structure)
  * [Understanding Success vs TransactionResult](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#understanding-success-vs-transactionresult)
  * [CVV Injection](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#cvv-injection)
  * [Common Transaction Flows](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#common-transaction-flows)
    * [Authorize Then Capture](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#authorize-then-capture)
    * [Purchase with New Card](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#purchase-with-new-card)
    * [Refund a Transaction](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#refund-a-transaction)
  * [Testing](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#testing)
  * [Next Steps](https://documentation.ixopay.com/modules/docs/tokenex/payment-services/payment-services-the-basics#next-steps)
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    // ... gateway and transaction parameters  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345",  

      "billing_address": {  

        "name": "Alex Smith",  

        "address1": "123 Main Street",  

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

  "Success": true,  

  "TransactionResult": true,  

  "ReferenceNumber": "15102913382030662954",  

  "Authorization": "123456;A",  

  "Message": "Transaction Approved",  

  "Error": "",  

  "AVS_Result": {  

    "Code": "Y",  

    "Message": "Street address and postal code match",  

    "PostalMatch": "Y",  

    "StreetMatch": "Y"  

  },  

  "CVV_Result": {  

    "Code": "M",  

    "Message": "CVV matches"  

  },  

  "Params": [  

    {  

      "Key": "AuthorizationCode",  

      "Value": "A12345"  

    },  

    {  

      "Key": "TransactionID",  

      "Value": "7891011121314"  

    }  

  ],  

  "Token": "411111XXXXXX1111",  

  "Test": false  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 9999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 9999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 3,  

  "TokenScheme": "sixTOKENfour",  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    // ... gateway and transaction parameters  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345",  

      "billing_address": {  

        "name": "Alex Smith",  

        "address1": "123 Main Street",  

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

  "Success": true,  

  "TransactionResult": true,  

  "ReferenceNumber": "15102913382030662954",  

  "Authorization": "123456;A",  

  "Message": "Transaction Approved",  

  "Error": "",  

  "AVS_Result": {  

    "Code": "Y",  

    "Message": "Street address and postal code match",  

    "PostalMatch": "Y",  

    "StreetMatch": "Y"  

  },  

  "CVV_Result": {  

    "Code": "M",  

    "Message": "CVV matches"  

  },  

  "Params": [  

    {  

      "Key": "AuthorizationCode",  

      "Value": "A12345"  

    },  

    {  

      "Key": "TransactionID",  

      "Value": "7891011121314"  

    }  

  ],  

  "Token": "411111XXXXXX1111",  

  "Test": false  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 1,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "your-tokenex-token",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "cvv"  

    },  

    "transaction": {  

      "amount": 9999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 2,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 9999  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 3,  

  "TokenScheme": "sixTOKENfour",  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "credit_card": {  

      "number": "4111111111111111",  

      "month": "12",  

      "year": "2029",  

      "verification_value": "123"  

    },  

    "transaction": {  

      "amount": 999,  

      "order_id": "order-12345"  

    }  

  }  

}  

```
```

{  

  "APIKey": "your-api-key",  

  "TokenExID": "your-tokenex-id",  

  "TransactionType": 4,  

  "TransactionRequest": {  

    "gateway": {  

      "name": "YourGatewayName",  

      "login": "your-gateway-login",  

      "password": "your-gateway-password"  

    },  

    "transaction": {  

      "authorization": "123456;A",  

      "amount": 999  

    }  

  }  

}  

```