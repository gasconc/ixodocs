---
title: Response handling
summary: ' Response handling'
tags:
- callback-url-restrictions-https-documentation-ixopay-com-docs-reference-integration-callbacks-response-handling-callback-url-restrictions-direct-link-callback-url-restrictions
- handling-callbacks-https-documentation-ixopay-com-docs-reference-integration-callbacks-response-handling-handling-callbacks-direct-link-handling-callbacks
- acknowledging-callback-receipt-https-documentation-ixopay-com-docs-reference-integration-callbacks-response-handling-acknowledging-callback-receipt-direct-link-acknowledging-callback-receipt
- signature-verification-https-documentation-ixopay-com-docs-reference-integration-callbacks-response-handling-signature-verification-direct-link-signature-verification
- notification-delivery-times-https-documentation-ixopay-com-docs-reference-integration-callbacks-response-handling-notification-delivery-times-direct-link-notification-delivery-times
- processing-callback-data-https-documentation-ixopay-com-docs-reference-integration-callbacks-response-handling-processing-callback-data-direct-link-processing-callback-data
- api
- ixopay
- transaction
- merchant
source_url: https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling
portal: ixopay-dev
updated: '2026-07-01'
related: []
---

* [Integration](https://documentation.ixopay.com/docs/reference/integration)
  * [Callbacks](https://documentation.ixopay.com/docs/reference/integration/callbacks)
  * Response handling

# Response handling
Response handling is an important aspect of processing callbacks in the [IXOPAY platform](https://www.ixopay.com) payment processing workflow. Ensuring that your system responds with the appropriate status code and content not only acknowledges the receipt of the notification but also helps avoid potential delays or duplicate notifications.
To further enhance your understanding of callback handling in IXOPAY platform, explore the following articles:
  * [Callback data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data): Detailed information on the structure and format of callback data.
  * [Notification types](https://documentation.ixopay.com/docs/reference/integration/callbacks/notification-types): Learn about the different types of notifications sent by IXOPAY platform.

## Callback URL restrictions[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#callback-url-restrictions "Direct link to Callback URL restrictions")
To ensure successful callback processing, adhere to the following technical restrictions for callback URLs:
  * The callback URL must conform to the URI format defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986).
  * The _scheme_ part of the URI must be either `http` or `https`.
  * The _host_ part of the URL must not be empty.
    * If the _host_ is a hostname, it must resolve to a valid IPv4 address (via a DNS `A` record).
  * The (resolved) IPv4 address of the _host_ part must not be
    * a private IP address ([RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918): `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`), or
    * a reserved IP address ([RFC 3232](https://datatracker.ietf.org/doc/html/rfc3232): `240.0.0.0/4`, [RFC 3927](https://datatracker.ietf.org/doc/html/rfc3927): `169.254.0.0/16`, [RFC 6890](https://datatracker.ietf.org/doc/html/rfc6890): `0.0.0.0/8`, `127.0.0.0/8`, `192.0.0.0/24`, `255.255.255.255/32`).
  * The _port_ part of the URI must be either `80` or `443`.

Allow-listing other ports
If your system architecture requires a port other than the standard HTTP or HTTPS ports, please contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) to request an exception to this rule. Please provide both the host [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation) and the ports you want to allow-list.
## Handling callbacks[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#handling-callbacks "Direct link to Handling callbacks")
To handle callbacks effectively, follow these general steps:
  * Implement a callback endpoint in your system to receive notifications from IXOPAY platform.
  * Ensure that a `callbackUrl` field is set on the transaction to specify the callback endpoint where notifications should be sent. Alternatively, you can enable callbacks on the connector settings.
  * Optionally, validate the authenticity of the received notification using the provided request signature.
  * Process the received notification data according to your business logic.
  * Acknowledge the receipt of the callback.

For detailed step-by-step instructions on implementing callback handling, refer to the [Guides: Callbacks](https://documentation.ixopay.com/docs/guides/getting-started/callbacks) article in the Guides section. It provides comprehensive guidance on setting up and implementing callbacks in your integration.
## Acknowledging callback receipt[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#acknowledging-callback-receipt "Direct link to Acknowledging callback receipt")
When your system receives a callback from IXOPAY platform, it is essential to acknowledge the receipt of the notification by responding with an HTTP status code `200` and a response body of `OK`:
```

HTTP/1.1 200 OK  

Server: api.example.org  

Content-Type: text/plain; charset=UTF-8  

  

OK  

```The initial callback from [IXOPAY](https://www.ixopay.com) has a _timeout of 10 seconds_ , which means your system's response should not take longer than this. Subsequent callbacks have a _timeout of 30 seconds_. Please note that these timeout durations might change in the future, and this page will be updated if that happens.
If your system does not provide a confirmation response with an HTTP status code `200` and content `OK`, IXOPAY will continue to retry sending the notification at increasing intervals according to the following schedule:  
| Retry Number  | Interval  |  
| --- | --- |  
| First retry  | 1 minute  |  
| Second retry  | 5 minutes  |  
| Third retry  | 15 minutes  |  
| Fourth retry  | 1 hour  |  
| Fifth retry  | 2 hours  |  
| Sixth retry  | 3 hours  |  
| Seventh retry  | 12 hours  |  
| Final retry  | Once every 24 hours for 7 days  |  
During these retries, IXOPAY platform will continue attempting to send the notification to your callback endpoint. It is important to ensure that your system responds with the appropriate status code and content to acknowledge the receipt of the notification and avoid any potential delays or duplicate notifications.
## Signature verification[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#signature-verification "Direct link to Signature verification")
The IXOPAY platform signs every callback request it sends to the merchant, providing an additional layer of security and ensuring the authenticity of the data. While signature verification is optional, it is highly recommended to verify the signature for enhanced security.
To verify the signature of a callback request, follow these steps:
  1. Compute the signature on your system using the provided shared secret and the appropriate hashing algorithm.
  2. Compare the computed signature with the signature included in the callback request.
  3. If the signatures match, you can trust the authenticity of the data.

For more detailed instructions on how to compute and validate signatures, refer to the [Guides: Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security) article. The article provides comprehensive information on signature computation, validation, and other security measures you can implement.
## Notification delivery times[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#notification-delivery-times "Direct link to Notification delivery times")
Upon reaching a final status (either successful or erroneous), the IXOPAY platform promptly sends a notification to the callback URL specified in the transaction request. However, delivery times for these notifications may vary depending on the payment method used. In some cases, the notification may be instantaneous, while in others, it may take several days.
## Processing callback data[​](https://documentation.ixopay.com/docs/reference/integration/callbacks/response-handling#processing-callback-data "Direct link to Processing callback data")
The callback data received from the IXOPAY platform contains important information about the transaction's status and other relevant details. Ensure that your system processes this data according to your business logic.
Refer to the [Callback Data](https://documentation.ixopay.com/docs/reference/integration/callbacks/callback-data) article for detailed information on the structure of callback data, including how to include additional data and verify its authenticity.
```

HTTP/1.1 200 OK  

Server: api.example.org  

Content-Type: text/plain; charset=UTF-8  

  

OK  

```
```

HTTP/1.1 200 OK  

Server: api.example.org  

Content-Type: text/plain; charset=UTF-8  

  

OK  

```For more detailed instructions on how to compute and validate signatures, refer to the [Guides: Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security) article. The article provides comprehensive information on signature computation, validation, and other security measures you can implement.
```

HTTP/1.1 200 OK  

Server: api.example.org  

Content-Type: text/plain; charset=UTF-8  

  

OK  

```For more detailed instructions on how to compute and validate signatures, refer to the [Guides: Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security) article. The article provides comprehensive information on signature computation, validation, and other security measures you can implement.
```

HTTP/1.1 200 OK  

Server: api.example.org  

Content-Type: text/plain; charset=UTF-8  

  

OK  

```
```

HTTP/1.1 200 OK  

Server: api.example.org  

Content-Type: text/plain; charset=UTF-8  

  

OK  

```For more detailed instructions on how to compute and validate signatures, refer to the [Guides: Additional security](https://documentation.ixopay.com/docs/guides/production/additional-security) article. The article provides comprehensive information on signature computation, validation, and other security measures you can implement.