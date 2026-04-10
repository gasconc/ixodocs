  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx Echo
  * Response Simulation


On this page
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
Last updated on **Apr 10, 2026**
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx Echo
  * Response Simulation


On this page
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
Last updated on **Apr 10, 2026**
[Previous About the Echo API](https://documentation.ixopay.com/modules/api/tokenex-echo/echo-api)
  * [Overview](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview)
  * [Adding a Response Set](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set)
    * [Example Request](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request)
    * [Example Response](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response)
  * [Using the Response Set](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set)


  * [](https://documentation.ixopay.com/modules/)
  * TokenEx
  * TokenEx Echo
  * Response Simulation


On this page
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
Last updated on **Apr 10, 2026**
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
# Response Simulation
Simulate server responses to enable more thorough testing and troubleshooting
## Overview[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#overview "Direct link to Overview")
Response simulation functionality allows the mimicry of server responses for requests directed to` the [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) endpoint. This capability is valuable for simulating responses from 3rd-party APIs or testing transient faults. This is achieved by defining a set of responses associated with a unique key. When requests with a matching key are received, the responses are delivered in the order defined in the set. If no corresponding response set is found for the provided key or if the response set has expired, the original request is echoed back.
## Adding a Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#adding-a-response-set "Direct link to Adding a Response Set")
To add a response set, make a POST request to [/Echo/AddResponseSet](https://tokenechoendpoint.azurewebsites.net/api/echo/AddResponseSet) with the following request body:  
| Field Name  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| ResponseSetKey  | string  | Optional  | The key to be associated with the set. If no key provided, a GUID is generated.  |  
| TimeToLive  | string  | Optional  | The duration for which a response set remains valid. Max 15 minutes: 00:15:00  |  
| Responses  | array  | Required  | An array of response objects to simulate. Max 10.  |  
| Response Object - StatusCode  | numeric  | Optional  | A valid HTTP status code. Defaults to 200.  |  
| Response Object - Headers  | array  | Optional  | An array of key-value-pairs for response headers to return. Max 10. If Content-Type is not included, the Content-Type will default to "application/json."  |  
| Response Object - Body  | string  | Optional  | A string representation of the content to return in the response body.  |  
| Response Object - Delay  | numeric  | Optional  | The time delay, in milliseconds, before a response is sent. Maximum 90,000 milliseconds.  |  
### Example Request[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-request "Direct link to Example Request")
AddingResponseSet Request

```
{  
  "Responses": [  
    {  
      "StatusCode": 200,  
      "Headers": {  
        "Content-Type": "application/json",  
        "Custom-Header": "Value1"  
      },  
      "Body": "{\"message\": \"Response 1\"}",  
      "Delay": 1000  
    },  
    {  
      "StatusCode": 404,  
      "Headers": {  
        "Content-Type": "text/plain"  
      },  
      "Body": "Not Found",  
      "Delay": 2000  
    },  
    {  
      "StatusCode": 201,  
      "Headers": {  
        "Content-Type": "application/xml"  
      },  
      "Body": "<response>Response 3</response>",  
      "Delay": 500  
    },  
    {  
      "StatusCode": 500,  
      "Headers": {  
        "Content-Type": "text/html"  
      },  
      "Body": "<html><body>Internal Server Error</body></html>",  
      "Delay": 0  
    }  
  ],  
  "TimeToLive": "00:03:00"  
}  

```

### Example Response[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#example-response "Direct link to Example Response")
AddResponseSet Response

```
{  
  "responseSetKey": "bcd5db64-c8fa-497d-927b-69ad0952a4d4",  
  "timeToLive": "00:03:00",  
  "expiresAt": "2023-09-05T16:38:55.4495311Z" // UTC  
}  

```

## Using the Response Set[​](https://documentation.ixopay.com/modules/api/tokenex-echo/response-simulation#using-the-response-set "Direct link to Using the Response Set")
To use a response set, add the query parameter `ResponseSetKey` to an [/echo](https://tokenechoendpoint.azurewebsites.net/api/echo) request: `/echo?ResponseSetKey=bcd5db64-c8fa-497d-927b-69ad0952a4d4`
For each request including the `ResponseSetKey`, the next response in the set will be returned. If the set has expired or already been consumed - the request body and headers will be echoed back with a `200` response code.
