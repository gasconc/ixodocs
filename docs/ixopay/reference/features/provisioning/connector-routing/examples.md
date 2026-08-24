---
title: Routing examples
summary: ' Connector routinghttps://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing  Routing
  examples'
tags:
- calling-api-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-examples-calling-api-direct-link-calling-api
- uses-provisioning-api-credentials
- fetch-current-routing-document
- modify-document-submit
- modify-document
- submit
- currency-split-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-examples-currency-split-direct-link-currency-split
- combining-conditions-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-examples-combining-conditions-direct-link-combining-conditions
- multi-method-disabling-one-method-https-documentation-ixopay-com-docs-reference-features-provisioning-connector-routing-examples-multi-method-disabling-one-method-direct-link-multi-method-disabling-one-method
- api
source_url: https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples
portal: ixopay-dev
updated: '2026-08-24'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [Provisioning](https://documentation.ixopay.com/docs/reference/features/provisioning)
  * [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing)
  * Routing examples

# Routing examples
Complete, ready-to-adapt routing documents for the most common setups. The concepts behind the document format are explained in the [Connector routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing) reference; field-level details are part of the [API reference](https://documentation.ixopay.com/api/provisioning/set-connector-routing).
All examples use placeholder connector GUIDs (`CO-…`) — replace them with the GUIDs of your own connectors, for example from [Connector – List](https://documentation.ixopay.com/api/provisioning/list-connectors).
## Calling the API[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#calling-the-api "Direct link to Calling the API")
Routing endpoints use the same BASIC authentication as the rest of the [Provisioning API](https://documentation.ixopay.com/api/provisioning/provisioning-api#authentication). A typical edit is a read–modify–write cycle:
  * curl
  * Python
  * PHP
  * Java
```

## Uses Provisioning API credentials  

AUTH=$(echo -n "$PROVISIONING_API_KEY:$PROVISIONING_API_PASSWORD" | base64)  

  

## 1. Fetch the current routing document  

curl --url "https://gateway.ixopay.com/api/provisioning/getConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH"  

  

## 2. Modify the document, then submit it  

curl --request POST \  

  --url "https://gateway.ixopay.com/api/provisioning/setConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH" \  

  --header "Content-Type: application/json" \  

  --data @routing-document.json  

```
```

import requests  

import base64  

import os  

  

## Uses Provisioning API credentials  

api_key = os.environ["PROVISIONING_API_KEY"]  

api_password = os.environ["PROVISIONING_API_PASSWORD"]  

auth = base64.b64encode(f"{api_key}:{api_password}".encode()).decode()  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": f"Basic {auth}",  

}  

  

base = "https://gateway.ixopay.com/api/provisioning"  

connector = "CO-1111-2222-3333-4444-5555-6666"  

  

## 1. Fetch the current routing document  

document = requests.get(f"{base}/getConnectorRouting/{connector}", headers=headers).json()["routing"]  

  

## 2. Modify the document ...  

document["rerouteRecurring"] = True  

  

## 3. ... and submit it  

response = requests.post(f"{base}/setConnectorRouting/{connector}", headers=headers, json=document)  

```
```

<?php  

// Uses Provisioning API credentials  

$apiKey = getenv("PROVISIONING_API_KEY");  

$apiPassword = getenv("PROVISIONING_API_PASSWORD");  

  

$base = "https://gateway.ixopay.com/api/provisioning";  

$connector = "CO-1111-2222-3333-4444-5555-6666";  

  

$context = fn (string $method, ?string $body) => stream_context_create(["http" => [  

    "method" => $method,  

    "header" => implode("\r\n", [  

        "Authorization: Basic " . base64_encode("$apiKey:$apiPassword"),  

        "Content-Type: application/json",  

        "Accept: application/json",  

    ]),  

    "content" => $body,  

]]);  

  

// 1. Fetch the current routing document  

$current = json_decode(file_get_contents(  

    "$base/getConnectorRouting/$connector", false, $context("GET", null)  

), true);  

$document = $current["routing"];  

  

// 2. Modify the document ...  

$document["rerouteRecurring"] = true;  

  

// 3. ... and submit it  

$response = file_get_contents(  

    "$base/setConnectorRouting/$connector", false, $context("POST", json_encode($document))  

);  

```
```

import java.net.URI;  

import java.net.http.HttpClient;  

import java.net.http.HttpRequest;  

import java.net.http.HttpResponse;  

import java.util.Base64;  

  

// Uses Provisioning API credentials  

String apiKey = System.getenv("PROVISIONING_API_KEY");  

String apiPassword = System.getenv("PROVISIONING_API_PASSWORD");  

String auth = Base64.getEncoder().encodeToString((apiKey + ":" + apiPassword).getBytes());  

  

String base = "https://gateway.ixopay.com/api/provisioning";  

String connector = "CO-1111-2222-3333-4444-5555-6666";  

HttpClient client = HttpClient.newHttpClient();  

  

// 1. Fetch the current routing document  

HttpRequest get = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/getConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .GET()  

    .build();  

String document = client.send(get, HttpResponse.BodyHandlers.ofString()).body();  

  

// 2. Modify the document, then submit it  

HttpRequest post = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/setConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .header("Content-Type", "application/json")  

    .POST(HttpRequest.BodyPublishers.ofString(modifiedDocument))  

    .build();  

HttpResponse<String> response = client.send(post, HttpResponse.BodyHandlers.ofString());  

```tip
The response of every get/set call is itself a valid request body — you can feed a response's `routing` object back into the matching set endpoint. One exception: multi-method rule trees authored in the admin interface may contain conditions that the multi-method endpoints do not accept — see the [condition subset](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#rule-conditions).
## Currency split[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#currency-split "Direct link to Currency split")
Route EUR transactions to a preferred connector; everything else uses the default connector (`else: null` falls through to `default`):
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```## Issuer-country routing[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#issuer-country-routing "Direct link to Issuer-country routing")
Route cards issued in the United States to a domestic connector, all other cards to an international one:
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": {  

      "constraint": "CreditcardBinCountry",  

      "params": { "comparator": "in", "countries": ["US"] }  

    },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```## Load balancing[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#load-balancing "Direct link to Load balancing")
Send roughly 70% of the traffic to one connector and 30% to another:
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": { "constraint": "RandomLoadBalancer", "params": { "percentTrue": 70 } },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```## Failover chain[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#failover-chain "Direct link to Failover chain")
Try a primary connector first; if it fails to process the transaction, fail over to a backup, then to a second backup:
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "route": {  

      "connector": "CO-1234-1234-1234-1234-1234-1234",  

      "onFail": [  

        { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

        { "connector": "CO-8765-8765-8765-8765-8765-8765" }  

      ]  

    }  

  }  

}  

```The root node may itself be a leaf — this document routes _all_ traffic through the failover chain without any condition.
## Combining conditions[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#combining-conditions "Direct link to Combining conditions")
Route high-value EUR Visa transactions to a dedicated connector with failover; everything else follows simpler rules:
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": true,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "if": {  

        "constraint": "CreditcardType",  

        "params": { "comparator": "in", "types": ["visa"] }  

      },  

      "then": {  

        "id": null,  

        "if": {  

          "constraint": "AmountCurrency",  

          "params": { "comparator": ">=", "amount": 1000, "currency": "EUR" }  

        },  

        "then": {  

          "id": null,  

          "route": {  

            "connector": "CO-1234-1234-1234-1234-1234-1234",  

            "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

          }  

        },  

        "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

      },  

      "else": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } }  

    },  

    "else": null  

  }  

}  

```## Multi-method: availability and routing[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#multi-method-availability-and-routing "Direct link to Multi-method: availability and routing")
For a multi-method meta-connector ([Set multi-method routing](https://documentation.ixopay.com/api/provisioning/set-connector-multi-method-routing)): offer card payments only to your customers in the DACH region, route high-value card transactions to a dedicated connector, and keep SEPA direct debit unconditional:
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```Remember that multi-method documents accept only the `CustomerCountry`, `CustomerIpCountry`, `Currency`, `AmountCurrency`, `RiskScore` and `ExtraData` conditions.
## Multi-method: disabling one method[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#multi-method-disabling-one-method "Direct link to Multi-method: disabling one method")
Methods omitted from the document are preserved untouched — so disabling a single method is a one-block document:
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```## Updating rules in place[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#updating-rules-in-place "Direct link to Updating rules in place")
Responses return every rule with its server-assigned `id`. To change one condition without recreating the tree, echo the ids and edit only what should change.
Response of a previous get/set call:
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

    "rerouteRecurring": false,  

    "tree": {  

      "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

      "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

      "then": {  

        "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

        "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

      },  

      "else": null  

    }  

  }  

}  

```Follow-up request — same rules, but the condition now also covers CHF (note the unchanged `id`s):
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

    "if": { "constraint": "Currency", "params": { "currency": "CHF" } },  

    "then": {  

      "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```## Removing all rules[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#removing-all-rules "Direct link to Removing all rules")
Send `tree: null` — afterwards, all traffic uses the default connector:
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": null  

}  

```## Handling a rejected document[​](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#handling-a-rejected-document "Direct link to Handling a rejected document")
Rejected documents return HTTP status `422`; the `errorMessage` names the offending part of the document, and the `errorCode` identifies the category (see the [error code reference](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing#error-codes)):
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

## Uses Provisioning API credentials  

AUTH=$(echo -n "$PROVISIONING_API_KEY:$PROVISIONING_API_PASSWORD" | base64)  

  

## 1. Fetch the current routing document  

curl --url "https://gateway.ixopay.com/api/provisioning/getConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH"  

  

## 2. Modify the document, then submit it  

curl --request POST \  

  --url "https://gateway.ixopay.com/api/provisioning/setConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH" \  

  --header "Content-Type: application/json" \  

  --data @routing-document.json  

```
```

import requests  

import base64  

import os  

  

## Uses Provisioning API credentials  

api_key = os.environ["PROVISIONING_API_KEY"]  

api_password = os.environ["PROVISIONING_API_PASSWORD"]  

auth = base64.b64encode(f"{api_key}:{api_password}".encode()).decode()  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": f"Basic {auth}",  

}  

  

base = "https://gateway.ixopay.com/api/provisioning"  

connector = "CO-1111-2222-3333-4444-5555-6666"  

  

## 1. Fetch the current routing document  

document = requests.get(f"{base}/getConnectorRouting/{connector}", headers=headers).json()["routing"]  

  

## 2. Modify the document ...  

document["rerouteRecurring"] = True  

  

## 3. ... and submit it  

response = requests.post(f"{base}/setConnectorRouting/{connector}", headers=headers, json=document)  

```
```

<?php  

// Uses Provisioning API credentials  

$apiKey = getenv("PROVISIONING_API_KEY");  

$apiPassword = getenv("PROVISIONING_API_PASSWORD");  

  

$base = "https://gateway.ixopay.com/api/provisioning";  

$connector = "CO-1111-2222-3333-4444-5555-6666";  

  

$context = fn (string $method, ?string $body) => stream_context_create(["http" => [  

    "method" => $method,  

    "header" => implode("\r\n", [  

        "Authorization: Basic " . base64_encode("$apiKey:$apiPassword"),  

        "Content-Type: application/json",  

        "Accept: application/json",  

    ]),  

    "content" => $body,  

]]);  

  

// 1. Fetch the current routing document  

$current = json_decode(file_get_contents(  

    "$base/getConnectorRouting/$connector", false, $context("GET", null)  

), true);  

$document = $current["routing"];  

  

// 2. Modify the document ...  

$document["rerouteRecurring"] = true;  

  

// 3. ... and submit it  

$response = file_get_contents(  

    "$base/setConnectorRouting/$connector", false, $context("POST", json_encode($document))  

);  

```
```

import java.net.URI;  

import java.net.http.HttpClient;  

import java.net.http.HttpRequest;  

import java.net.http.HttpResponse;  

import java.util.Base64;  

  

// Uses Provisioning API credentials  

String apiKey = System.getenv("PROVISIONING_API_KEY");  

String apiPassword = System.getenv("PROVISIONING_API_PASSWORD");  

String auth = Base64.getEncoder().encodeToString((apiKey + ":" + apiPassword).getBytes());  

  

String base = "https://gateway.ixopay.com/api/provisioning";  

String connector = "CO-1111-2222-3333-4444-5555-6666";  

HttpClient client = HttpClient.newHttpClient();  

  

// 1. Fetch the current routing document  

HttpRequest get = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/getConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .GET()  

    .build();  

String document = client.send(get, HttpResponse.BodyHandlers.ofString()).body();  

  

// 2. Modify the document, then submit it  

HttpRequest post = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/setConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .header("Content-Type", "application/json")  

    .POST(HttpRequest.BodyPublishers.ofString(modifiedDocument))  

    .build();  

HttpResponse<String> response = client.send(post, HttpResponse.BodyHandlers.ofString());  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": {  

      "constraint": "CreditcardBinCountry",  

      "params": { "comparator": "in", "countries": ["US"] }  

    },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": { "constraint": "RandomLoadBalancer", "params": { "percentTrue": 70 } },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "route": {  

      "connector": "CO-1234-1234-1234-1234-1234-1234",  

      "onFail": [  

        { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

        { "connector": "CO-8765-8765-8765-8765-8765-8765" }  

      ]  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": true,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "if": {  

        "constraint": "CreditcardType",  

        "params": { "comparator": "in", "types": ["visa"] }  

      },  

      "then": {  

        "id": null,  

        "if": {  

          "constraint": "AmountCurrency",  

          "params": { "comparator": ">=", "amount": 1000, "currency": "EUR" }  

        },  

        "then": {  

          "id": null,  

          "route": {  

            "connector": "CO-1234-1234-1234-1234-1234-1234",  

            "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

          }  

        },  

        "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

      },  

      "else": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

    "rerouteRecurring": false,  

    "tree": {  

      "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

      "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

      "then": {  

        "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

        "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

      },  

      "else": null  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

    "if": { "constraint": "Currency", "params": { "currency": "CHF" } },  

    "then": {  

      "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": null  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

## Uses Provisioning API credentials  

AUTH=$(echo -n "$PROVISIONING_API_KEY:$PROVISIONING_API_PASSWORD" | base64)  

  

## 1. Fetch the current routing document  

curl --url "https://gateway.ixopay.com/api/provisioning/getConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH"  

  

## 2. Modify the document, then submit it  

curl --request POST \  

  --url "https://gateway.ixopay.com/api/provisioning/setConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH" \  

  --header "Content-Type: application/json" \  

  --data @routing-document.json  

```
```

import requests  

import base64  

import os  

  

## Uses Provisioning API credentials  

api_key = os.environ["PROVISIONING_API_KEY"]  

api_password = os.environ["PROVISIONING_API_PASSWORD"]  

auth = base64.b64encode(f"{api_key}:{api_password}".encode()).decode()  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": f"Basic {auth}",  

}  

  

base = "https://gateway.ixopay.com/api/provisioning"  

connector = "CO-1111-2222-3333-4444-5555-6666"  

  

## 1. Fetch the current routing document  

document = requests.get(f"{base}/getConnectorRouting/{connector}", headers=headers).json()["routing"]  

  

## 2. Modify the document ...  

document["rerouteRecurring"] = True  

  

## 3. ... and submit it  

response = requests.post(f"{base}/setConnectorRouting/{connector}", headers=headers, json=document)  

```
```

<?php  

// Uses Provisioning API credentials  

$apiKey = getenv("PROVISIONING_API_KEY");  

$apiPassword = getenv("PROVISIONING_API_PASSWORD");  

  

$base = "https://gateway.ixopay.com/api/provisioning";  

$connector = "CO-1111-2222-3333-4444-5555-6666";  

  

$context = fn (string $method, ?string $body) => stream_context_create(["http" => [  

    "method" => $method,  

    "header" => implode("\r\n", [  

        "Authorization: Basic " . base64_encode("$apiKey:$apiPassword"),  

        "Content-Type: application/json",  

        "Accept: application/json",  

    ]),  

    "content" => $body,  

]]);  

  

// 1. Fetch the current routing document  

$current = json_decode(file_get_contents(  

    "$base/getConnectorRouting/$connector", false, $context("GET", null)  

), true);  

$document = $current["routing"];  

  

// 2. Modify the document ...  

$document["rerouteRecurring"] = true;  

  

// 3. ... and submit it  

$response = file_get_contents(  

    "$base/setConnectorRouting/$connector", false, $context("POST", json_encode($document))  

);  

```
```

import java.net.URI;  

import java.net.http.HttpClient;  

import java.net.http.HttpRequest;  

import java.net.http.HttpResponse;  

import java.util.Base64;  

  

// Uses Provisioning API credentials  

String apiKey = System.getenv("PROVISIONING_API_KEY");  

String apiPassword = System.getenv("PROVISIONING_API_PASSWORD");  

String auth = Base64.getEncoder().encodeToString((apiKey + ":" + apiPassword).getBytes());  

  

String base = "https://gateway.ixopay.com/api/provisioning";  

String connector = "CO-1111-2222-3333-4444-5555-6666";  

HttpClient client = HttpClient.newHttpClient();  

  

// 1. Fetch the current routing document  

HttpRequest get = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/getConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .GET()  

    .build();  

String document = client.send(get, HttpResponse.BodyHandlers.ofString()).body();  

  

// 2. Modify the document, then submit it  

HttpRequest post = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/setConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .header("Content-Type", "application/json")  

    .POST(HttpRequest.BodyPublishers.ofString(modifiedDocument))  

    .build();  

HttpResponse<String> response = client.send(post, HttpResponse.BodyHandlers.ofString());  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": {  

      "constraint": "CreditcardBinCountry",  

      "params": { "comparator": "in", "countries": ["US"] }  

    },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": { "constraint": "RandomLoadBalancer", "params": { "percentTrue": 70 } },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "route": {  

      "connector": "CO-1234-1234-1234-1234-1234-1234",  

      "onFail": [  

        { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

        { "connector": "CO-8765-8765-8765-8765-8765-8765" }  

      ]  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": true,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "if": {  

        "constraint": "CreditcardType",  

        "params": { "comparator": "in", "types": ["visa"] }  

      },  

      "then": {  

        "id": null,  

        "if": {  

          "constraint": "AmountCurrency",  

          "params": { "comparator": ">=", "amount": 1000, "currency": "EUR" }  

        },  

        "then": {  

          "id": null,  

          "route": {  

            "connector": "CO-1234-1234-1234-1234-1234-1234",  

            "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

          }  

        },  

        "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

      },  

      "else": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

    "rerouteRecurring": false,  

    "tree": {  

      "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

      "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

      "then": {  

        "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

        "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

      },  

      "else": null  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

    "if": { "constraint": "Currency", "params": { "currency": "CHF" } },  

    "then": {  

      "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": null  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

## Uses Provisioning API credentials  

AUTH=$(echo -n "$PROVISIONING_API_KEY:$PROVISIONING_API_PASSWORD" | base64)  

  

## 1. Fetch the current routing document  

curl --url "https://gateway.ixopay.com/api/provisioning/getConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH"  

  

## 2. Modify the document, then submit it  

curl --request POST \  

  --url "https://gateway.ixopay.com/api/provisioning/setConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH" \  

  --header "Content-Type: application/json" \  

  --data @routing-document.json  

```
```

import requests  

import base64  

import os  

  

## Uses Provisioning API credentials  

api_key = os.environ["PROVISIONING_API_KEY"]  

api_password = os.environ["PROVISIONING_API_PASSWORD"]  

auth = base64.b64encode(f"{api_key}:{api_password}".encode()).decode()  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": f"Basic {auth}",  

}  

  

base = "https://gateway.ixopay.com/api/provisioning"  

connector = "CO-1111-2222-3333-4444-5555-6666"  

  

## 1. Fetch the current routing document  

document = requests.get(f"{base}/getConnectorRouting/{connector}", headers=headers).json()["routing"]  

  

## 2. Modify the document ...  

document["rerouteRecurring"] = True  

  

## 3. ... and submit it  

response = requests.post(f"{base}/setConnectorRouting/{connector}", headers=headers, json=document)  

```
```

<?php  

// Uses Provisioning API credentials  

$apiKey = getenv("PROVISIONING_API_KEY");  

$apiPassword = getenv("PROVISIONING_API_PASSWORD");  

  

$base = "https://gateway.ixopay.com/api/provisioning";  

$connector = "CO-1111-2222-3333-4444-5555-6666";  

  

$context = fn (string $method, ?string $body) => stream_context_create(["http" => [  

    "method" => $method,  

    "header" => implode("\r\n", [  

        "Authorization: Basic " . base64_encode("$apiKey:$apiPassword"),  

        "Content-Type: application/json",  

        "Accept: application/json",  

    ]),  

    "content" => $body,  

]]);  

  

// 1. Fetch the current routing document  

$current = json_decode(file_get_contents(  

    "$base/getConnectorRouting/$connector", false, $context("GET", null)  

), true);  

$document = $current["routing"];  

  

// 2. Modify the document ...  

$document["rerouteRecurring"] = true;  

  

// 3. ... and submit it  

$response = file_get_contents(  

    "$base/setConnectorRouting/$connector", false, $context("POST", json_encode($document))  

);  

```
```

import java.net.URI;  

import java.net.http.HttpClient;  

import java.net.http.HttpRequest;  

import java.net.http.HttpResponse;  

import java.util.Base64;  

  

// Uses Provisioning API credentials  

String apiKey = System.getenv("PROVISIONING_API_KEY");  

String apiPassword = System.getenv("PROVISIONING_API_PASSWORD");  

String auth = Base64.getEncoder().encodeToString((apiKey + ":" + apiPassword).getBytes());  

  

String base = "https://gateway.ixopay.com/api/provisioning";  

String connector = "CO-1111-2222-3333-4444-5555-6666";  

HttpClient client = HttpClient.newHttpClient();  

  

// 1. Fetch the current routing document  

HttpRequest get = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/getConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .GET()  

    .build();  

String document = client.send(get, HttpResponse.BodyHandlers.ofString()).body();  

  

// 2. Modify the document, then submit it  

HttpRequest post = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/setConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .header("Content-Type", "application/json")  

    .POST(HttpRequest.BodyPublishers.ofString(modifiedDocument))  

    .build();  

HttpResponse<String> response = client.send(post, HttpResponse.BodyHandlers.ofString());  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": {  

      "constraint": "CreditcardBinCountry",  

      "params": { "comparator": "in", "countries": ["US"] }  

    },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": { "constraint": "RandomLoadBalancer", "params": { "percentTrue": 70 } },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "route": {  

      "connector": "CO-1234-1234-1234-1234-1234-1234",  

      "onFail": [  

        { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

        { "connector": "CO-8765-8765-8765-8765-8765-8765" }  

      ]  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": true,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "if": {  

        "constraint": "CreditcardType",  

        "params": { "comparator": "in", "types": ["visa"] }  

      },  

      "then": {  

        "id": null,  

        "if": {  

          "constraint": "AmountCurrency",  

          "params": { "comparator": ">=", "amount": 1000, "currency": "EUR" }  

        },  

        "then": {  

          "id": null,  

          "route": {  

            "connector": "CO-1234-1234-1234-1234-1234-1234",  

            "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

          }  

        },  

        "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

      },  

      "else": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

    "rerouteRecurring": false,  

    "tree": {  

      "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

      "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

      "then": {  

        "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

        "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

      },  

      "else": null  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

    "if": { "constraint": "Currency", "params": { "currency": "CHF" } },  

    "then": {  

      "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": null  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```  * [Calling the API](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#calling-the-api)
  * [Currency split](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#currency-split)
  * [Issuer-country routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#issuer-country-routing)
  * [Load balancing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#load-balancing)
  * [Failover chain](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#failover-chain)
  * [Combining conditions](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#combining-conditions)
  * [Multi-method: availability and routing](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#multi-method-availability-and-routing)
  * [Multi-method: disabling one method](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#multi-method-disabling-one-method)
  * [Updating rules in place](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#updating-rules-in-place)
  * [Removing all rules](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#removing-all-rules)
  * [Handling a rejected document](https://documentation.ixopay.com/docs/reference/features/provisioning/connector-routing/examples#handling-a-rejected-document)
```

## Uses Provisioning API credentials  

AUTH=$(echo -n "$PROVISIONING_API_KEY:$PROVISIONING_API_PASSWORD" | base64)  

  

## 1. Fetch the current routing document  

curl --url "https://gateway.ixopay.com/api/provisioning/getConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH"  

  

## 2. Modify the document, then submit it  

curl --request POST \  

  --url "https://gateway.ixopay.com/api/provisioning/setConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH" \  

  --header "Content-Type: application/json" \  

  --data @routing-document.json  

```
```

import requests  

import base64  

import os  

  

## Uses Provisioning API credentials  

api_key = os.environ["PROVISIONING_API_KEY"]  

api_password = os.environ["PROVISIONING_API_PASSWORD"]  

auth = base64.b64encode(f"{api_key}:{api_password}".encode()).decode()  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": f"Basic {auth}",  

}  

  

base = "https://gateway.ixopay.com/api/provisioning"  

connector = "CO-1111-2222-3333-4444-5555-6666"  

  

## 1. Fetch the current routing document  

document = requests.get(f"{base}/getConnectorRouting/{connector}", headers=headers).json()["routing"]  

  

## 2. Modify the document ...  

document["rerouteRecurring"] = True  

  

## 3. ... and submit it  

response = requests.post(f"{base}/setConnectorRouting/{connector}", headers=headers, json=document)  

```
```

<?php  

// Uses Provisioning API credentials  

$apiKey = getenv("PROVISIONING_API_KEY");  

$apiPassword = getenv("PROVISIONING_API_PASSWORD");  

  

$base = "https://gateway.ixopay.com/api/provisioning";  

$connector = "CO-1111-2222-3333-4444-5555-6666";  

  

$context = fn (string $method, ?string $body) => stream_context_create(["http" => [  

    "method" => $method,  

    "header" => implode("\r\n", [  

        "Authorization: Basic " . base64_encode("$apiKey:$apiPassword"),  

        "Content-Type: application/json",  

        "Accept: application/json",  

    ]),  

    "content" => $body,  

]]);  

  

// 1. Fetch the current routing document  

$current = json_decode(file_get_contents(  

    "$base/getConnectorRouting/$connector", false, $context("GET", null)  

), true);  

$document = $current["routing"];  

  

// 2. Modify the document ...  

$document["rerouteRecurring"] = true;  

  

// 3. ... and submit it  

$response = file_get_contents(  

    "$base/setConnectorRouting/$connector", false, $context("POST", json_encode($document))  

);  

```
```

import java.net.URI;  

import java.net.http.HttpClient;  

import java.net.http.HttpRequest;  

import java.net.http.HttpResponse;  

import java.util.Base64;  

  

// Uses Provisioning API credentials  

String apiKey = System.getenv("PROVISIONING_API_KEY");  

String apiPassword = System.getenv("PROVISIONING_API_PASSWORD");  

String auth = Base64.getEncoder().encodeToString((apiKey + ":" + apiPassword).getBytes());  

  

String base = "https://gateway.ixopay.com/api/provisioning";  

String connector = "CO-1111-2222-3333-4444-5555-6666";  

HttpClient client = HttpClient.newHttpClient();  

  

// 1. Fetch the current routing document  

HttpRequest get = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/getConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .GET()  

    .build();  

String document = client.send(get, HttpResponse.BodyHandlers.ofString()).body();  

  

// 2. Modify the document, then submit it  

HttpRequest post = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/setConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .header("Content-Type", "application/json")  

    .POST(HttpRequest.BodyPublishers.ofString(modifiedDocument))  

    .build();  

HttpResponse<String> response = client.send(post, HttpResponse.BodyHandlers.ofString());  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": {  

      "constraint": "CreditcardBinCountry",  

      "params": { "comparator": "in", "countries": ["US"] }  

    },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": { "constraint": "RandomLoadBalancer", "params": { "percentTrue": 70 } },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "route": {  

      "connector": "CO-1234-1234-1234-1234-1234-1234",  

      "onFail": [  

        { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

        { "connector": "CO-8765-8765-8765-8765-8765-8765" }  

      ]  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": true,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "if": {  

        "constraint": "CreditcardType",  

        "params": { "comparator": "in", "types": ["visa"] }  

      },  

      "then": {  

        "id": null,  

        "if": {  

          "constraint": "AmountCurrency",  

          "params": { "comparator": ">=", "amount": 1000, "currency": "EUR" }  

        },  

        "then": {  

          "id": null,  

          "route": {  

            "connector": "CO-1234-1234-1234-1234-1234-1234",  

            "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

          }  

        },  

        "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

      },  

      "else": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

    "rerouteRecurring": false,  

    "tree": {  

      "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

      "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

      "then": {  

        "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

        "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

      },  

      "else": null  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

    "if": { "constraint": "Currency", "params": { "currency": "CHF" } },  

    "then": {  

      "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": null  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```
```

## Uses Provisioning API credentials  

AUTH=$(echo -n "$PROVISIONING_API_KEY:$PROVISIONING_API_PASSWORD" | base64)  

  

## 1. Fetch the current routing document  

curl --url "https://gateway.ixopay.com/api/provisioning/getConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH"  

  

## 2. Modify the document, then submit it  

curl --request POST \  

  --url "https://gateway.ixopay.com/api/provisioning/setConnectorRouting/CO-1111-2222-3333-4444-5555-6666" \  

  --header "Authorization: Basic $AUTH" \  

  --header "Content-Type: application/json" \  

  --data @routing-document.json  

```
```

import requests  

import base64  

import os  

  

## Uses Provisioning API credentials  

api_key = os.environ["PROVISIONING_API_KEY"]  

api_password = os.environ["PROVISIONING_API_PASSWORD"]  

auth = base64.b64encode(f"{api_key}:{api_password}".encode()).decode()  

headers = {  

    "Content-Type": "application/json",  

    "Accept": "application/json",  

    "Authorization": f"Basic {auth}",  

}  

  

base = "https://gateway.ixopay.com/api/provisioning"  

connector = "CO-1111-2222-3333-4444-5555-6666"  

  

## 1. Fetch the current routing document  

document = requests.get(f"{base}/getConnectorRouting/{connector}", headers=headers).json()["routing"]  

  

## 2. Modify the document ...  

document["rerouteRecurring"] = True  

  

## 3. ... and submit it  

response = requests.post(f"{base}/setConnectorRouting/{connector}", headers=headers, json=document)  

```
```

<?php  

// Uses Provisioning API credentials  

$apiKey = getenv("PROVISIONING_API_KEY");  

$apiPassword = getenv("PROVISIONING_API_PASSWORD");  

  

$base = "https://gateway.ixopay.com/api/provisioning";  

$connector = "CO-1111-2222-3333-4444-5555-6666";  

  

$context = fn (string $method, ?string $body) => stream_context_create(["http" => [  

    "method" => $method,  

    "header" => implode("\r\n", [  

        "Authorization: Basic " . base64_encode("$apiKey:$apiPassword"),  

        "Content-Type: application/json",  

        "Accept: application/json",  

    ]),  

    "content" => $body,  

]]);  

  

// 1. Fetch the current routing document  

$current = json_decode(file_get_contents(  

    "$base/getConnectorRouting/$connector", false, $context("GET", null)  

), true);  

$document = $current["routing"];  

  

// 2. Modify the document ...  

$document["rerouteRecurring"] = true;  

  

// 3. ... and submit it  

$response = file_get_contents(  

    "$base/setConnectorRouting/$connector", false, $context("POST", json_encode($document))  

);  

```
```

import java.net.URI;  

import java.net.http.HttpClient;  

import java.net.http.HttpRequest;  

import java.net.http.HttpResponse;  

import java.util.Base64;  

  

// Uses Provisioning API credentials  

String apiKey = System.getenv("PROVISIONING_API_KEY");  

String apiPassword = System.getenv("PROVISIONING_API_PASSWORD");  

String auth = Base64.getEncoder().encodeToString((apiKey + ":" + apiPassword).getBytes());  

  

String base = "https://gateway.ixopay.com/api/provisioning";  

String connector = "CO-1111-2222-3333-4444-5555-6666";  

HttpClient client = HttpClient.newHttpClient();  

  

// 1. Fetch the current routing document  

HttpRequest get = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/getConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .GET()  

    .build();  

String document = client.send(get, HttpResponse.BodyHandlers.ofString()).body();  

  

// 2. Modify the document, then submit it  

HttpRequest post = HttpRequest.newBuilder()  

    .uri(URI.create(base + "/setConnectorRouting/" + connector))  

    .header("Authorization", "Basic " + auth)  

    .header("Content-Type", "application/json")  

    .POST(HttpRequest.BodyPublishers.ofString(modifiedDocument))  

    .build();  

HttpResponse<String> response = client.send(post, HttpResponse.BodyHandlers.ofString());  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": {  

      "constraint": "CreditcardBinCountry",  

      "params": { "comparator": "in", "countries": ["US"] }  

    },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "if": { "constraint": "RandomLoadBalancer", "params": { "percentTrue": 70 } },  

    "then": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } },  

    "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": {  

    "id": null,  

    "route": {  

      "connector": "CO-1234-1234-1234-1234-1234-1234",  

      "onFail": [  

        { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

        { "connector": "CO-8765-8765-8765-8765-8765-8765" }  

      ]  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": true,  

  "tree": {  

    "id": null,  

    "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

    "then": {  

      "id": null,  

      "if": {  

        "constraint": "CreditcardType",  

        "params": { "comparator": "in", "types": ["visa"] }  

      },  

      "then": {  

        "id": null,  

        "if": {  

          "constraint": "AmountCurrency",  

          "params": { "comparator": ">=", "amount": 1000, "currency": "EUR" }  

        },  

        "then": {  

          "id": null,  

          "route": {  

            "connector": "CO-1234-1234-1234-1234-1234-1234",  

            "onFail": [{ "connector": "CO-5678-5678-5678-5678-5678-5678" }]  

          }  

        },  

        "else": { "id": null, "route": { "connector": "CO-5678-5678-5678-5678-5678-5678" } }  

      },  

      "else": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "defaultActionDisable": false,  

  "paymentSelectionMaxRetries": 3,  

  "paymentSelectionExpiryHours": 24,  

  "methods": [  

    {  

      "method": "Creditcard",  

      "defaultConnector": { "connector": "CO-1234-1234-1234-1234-1234-1234" },  

      "disabled": false,  

      "availability": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "CustomerCountry",  

            "params": { "comparator": "in", "countries": ["DE", "AT", "CH"] }  

          },  

          "then": { "id": null, "action": "enable" },  

          "else": { "id": null, "action": "disable" }  

        }  

      },  

      "routing": {  

        "tree": {  

          "id": null,  

          "if": {  

            "constraint": "AmountCurrency",  

            "params": { "comparator": ">=", "amount": 500, "currency": "EUR" }  

          },  

          "then": { "id": null, "route": { "connector": "CO-8765-8765-8765-8765-8765-8765" } },  

          "else": { "id": null, "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" } }  

        }  

      }  

    },  

    {  

      "method": "DirectDebit",  

      "defaultConnector": { "connector": "CO-5678-5678-5678-5678-5678-5678" },  

      "availability": null,  

      "routing": null  

    }  

  ]  

}  

```
```

{  

  "version": "1",  

  "methods": [  

    {  

      "method": "Paypal",  

      "disabled": true  

    }  

  ]  

}  

```
```

{  

  "success": true,  

  "routing": {  

    "version": "1",  

    "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

    "rerouteRecurring": false,  

    "tree": {  

      "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

      "if": { "constraint": "Currency", "params": { "currency": "EUR" } },  

      "then": {  

        "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

        "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

      },  

      "else": null  

    }  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "rerouteRecurring": false,  

  "tree": {  

    "id": "MPR-1A2B-3C4D-5E6F-7A8B-9C0D-1E2F",  

    "if": { "constraint": "Currency", "params": { "currency": "CHF" } },  

    "then": {  

      "id": "MPR-2B3C-4D5E-6F7A-8B9C-0D1E-2F3A",  

      "route": { "connector": "CO-1234-1234-1234-1234-1234-1234" }  

    },  

    "else": null  

  }  

}  

```
```

{  

  "version": "1",  

  "default": { "connector": "CO-4321-4321-4321-4321-4321-4321" },  

  "tree": null  

}  

```
```

{  

  "success": false,  

  "errorCode": 1013,  

  "errorMessage": "Connector 'CO-9999-9999-9999-9999-9999-9999' does not exist at 'tree/then/route/connector'"  

}  

```