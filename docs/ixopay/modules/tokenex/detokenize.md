Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Detokenization Configuration


On this page
# Detokenization Configuration
The TokenEx iFrame also allows you to securely display detokenized sensitive data on a web page, while keeping the webserver out of PCI scope. For example, a booking engine could enable their customers to view detokenized data in a web portal. Using the Detokenization iFrame to present detokenized data in a web page allows TokenEx to host the PCI or other sensitive data, while you maintain complete control over the other content on the page.
## Generating the Authentication Key for the Detokenization Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe "Direct link to Generating the Authentication Key for the Detokenization Iframe")
In order to generate the Authentication Key for the Detokenization Iframe, you will need to provide an existing token value in place of the tokenScheme required when generating the Authentication Key for the tokenization modes of the iFrame.
warning
The Authentication Key is only valid with a timestamp less than 20 seconds old.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tokenExId  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss   
format  |  
| token  | string  | The existing token to be detokenized  |  
Sample Code

```
TokenEx ID: 123456789  
Origin: https://mysite.com  
Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  
Token: 5454545454545454  
Template: tokenExID|origin|timestamp|token  
Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```

## Detokenize Iframe Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object "Direct link to Detokenize Iframe Configuration Object")  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  | Your TokenEx ID  |  
| authenticationKey  | string  | true  | The generated Authentication Key (see Generating the Authentication Key).  |  
| timestamp  | string  | true  | The timestamp when the authentication key was generated, in yyyyMMddHHmmss   
format.   
  
NOTE: This value must match the one provided when generating your Authentication Key.  |  
| origin  | string  | true  | The fully qualified Origin of your application  |  
| token  | string  | true  | The token to be detokenized  |  
| cvv  | bool  | false  | Must be set to true to enable this mode  |  
| cvvOnly  | bool  | false  | Must be set to true to enable this mode  |  
| cvvContainerID  | string  | false  | ContainerID in which you'd like the CVV to appear  |  
| styles  | object  | false  | Optionally sets the placeholder attribute of the input  |  
| font  | string  | false  | A google font to use in the iframe  |  
| title  | string  | false  | Content of the title element used by the iframe document  |  
| expiresInSeconds  | int  | false  | Sets the expiration time for the IFrame. Default is 20 seconds, Maximum is 60 seconds.  |  
| enablePrettyFormat  | bool  | false  | Enabling this property will auto format the credit card number as it appears on the physical card  |  
## Using the Detokenize Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe "Direct link to Using the Detokenize Iframe")
JavaScript

```
//create the config object  
var iframeConfig = {  
  origin: "https://mysite.com",  
  timestamp: "20200109161437",  
  tokenExID: "123456789",  
  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  
  token: "5454545454545454",  
};  
  
//create a new instance of the detokenize iframe, and add the container ID and config object  
var iframe = new TokenEx.DetokenizeIframe("tokenExIframeDiv", iframeConfig);  
  
//calling the iframe's load function adds the iframe to the DOM.  
iframe.load();  

```

Last updated on **Apr 10, 2026**
# Detokenization Configuration
The TokenEx iFrame also allows you to securely display detokenized sensitive data on a web page, while keeping the webserver out of PCI scope. For example, a booking engine could enable their customers to view detokenized data in a web portal. Using the Detokenization iFrame to present detokenized data in a web page allows TokenEx to host the PCI or other sensitive data, while you maintain complete control over the other content on the page.
## Generating the Authentication Key for the Detokenization Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe "Direct link to Generating the Authentication Key for the Detokenization Iframe")
In order to generate the Authentication Key for the Detokenization Iframe, you will need to provide an existing token value in place of the tokenScheme required when generating the Authentication Key for the tokenization modes of the iFrame.
warning
The Authentication Key is only valid with a timestamp less than 20 seconds old.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tokenExId  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss   
format  |  
| token  | string  | The existing token to be detokenized  |  
Sample Code

```
TokenEx ID: 123456789  
Origin: https://mysite.com  
Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  
Token: 5454545454545454  
Template: tokenExID|origin|timestamp|token  
Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```

## Detokenize Iframe Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object "Direct link to Detokenize Iframe Configuration Object")  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  | Your TokenEx ID  |  
| authenticationKey  | string  | true  | The generated Authentication Key (see Generating the Authentication Key).  |  
| timestamp  | string  | true  | The timestamp when the authentication key was generated, in yyyyMMddHHmmss   
format.   
  
NOTE: This value must match the one provided when generating your Authentication Key.  |  
| origin  | string  | true  | The fully qualified Origin of your application  |  
| token  | string  | true  | The token to be detokenized  |  
| cvv  | bool  | false  | Must be set to true to enable this mode  |  
| cvvOnly  | bool  | false  | Must be set to true to enable this mode  |  
| cvvContainerID  | string  | false  | ContainerID in which you'd like the CVV to appear  |  
| styles  | object  | false  | Optionally sets the placeholder attribute of the input  |  
| font  | string  | false  | A google font to use in the iframe  |  
| title  | string  | false  | Content of the title element used by the iframe document  |  
| expiresInSeconds  | int  | false  | Sets the expiration time for the IFrame. Default is 20 seconds, Maximum is 60 seconds.  |  
| enablePrettyFormat  | bool  | false  | Enabling this property will auto format the credit card number as it appears on the physical card  |  
## Using the Detokenize Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe "Direct link to Using the Detokenize Iframe")
JavaScript

```
//create the config object  
var iframeConfig = {  
  origin: "https://mysite.com",  
  timestamp: "20200109161437",  
  tokenExID: "123456789",  
  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  
  token: "5454545454545454",  
};  
  
//create a new instance of the detokenize iframe, and add the container ID and config object  
var iframe = new TokenEx.DetokenizeIframe("tokenExIframeDiv", iframeConfig);  
  
//calling the iframe's load function adds the iframe to the DOM.  
iframe.load();  

```

# Detokenization Configuration
The TokenEx iFrame also allows you to securely display detokenized sensitive data on a web page, while keeping the webserver out of PCI scope. For example, a booking engine could enable their customers to view detokenized data in a web portal. Using the Detokenization iFrame to present detokenized data in a web page allows TokenEx to host the PCI or other sensitive data, while you maintain complete control over the other content on the page.
## Generating the Authentication Key for the Detokenization Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe "Direct link to Generating the Authentication Key for the Detokenization Iframe")
In order to generate the Authentication Key for the Detokenization Iframe, you will need to provide an existing token value in place of the tokenScheme required when generating the Authentication Key for the tokenization modes of the iFrame.
warning
The Authentication Key is only valid with a timestamp less than 20 seconds old.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tokenExId  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss   
format  |  
| token  | string  | The existing token to be detokenized  |  
Sample Code

```
TokenEx ID: 123456789  
Origin: https://mysite.com  
Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  
Token: 5454545454545454  
Template: tokenExID|origin|timestamp|token  
Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```

## Detokenize Iframe Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object "Direct link to Detokenize Iframe Configuration Object")  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  | Your TokenEx ID  |  
| authenticationKey  | string  | true  | The generated Authentication Key (see Generating the Authentication Key).  |  
| timestamp  | string  | true  | The timestamp when the authentication key was generated, in yyyyMMddHHmmss   
format.   
  
NOTE: This value must match the one provided when generating your Authentication Key.  |  
| origin  | string  | true  | The fully qualified Origin of your application  |  
| token  | string  | true  | The token to be detokenized  |  
| cvv  | bool  | false  | Must be set to true to enable this mode  |  
| cvvOnly  | bool  | false  | Must be set to true to enable this mode  |  
| cvvContainerID  | string  | false  | ContainerID in which you'd like the CVV to appear  |  
| styles  | object  | false  | Optionally sets the placeholder attribute of the input  |  
| font  | string  | false  | A google font to use in the iframe  |  
| title  | string  | false  | Content of the title element used by the iframe document  |  
| expiresInSeconds  | int  | false  | Sets the expiration time for the IFrame. Default is 20 seconds, Maximum is 60 seconds.  |  
| enablePrettyFormat  | bool  | false  | Enabling this property will auto format the credit card number as it appears on the physical card  |  
## Using the Detokenize Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe "Direct link to Using the Detokenize Iframe")
JavaScript

```
//create the config object  
var iframeConfig = {  
  origin: "https://mysite.com",  
  timestamp: "20200109161437",  
  tokenExID: "123456789",  
  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  
  token: "5454545454545454",  
};  
  
//create a new instance of the detokenize iframe, and add the container ID and config object  
var iframe = new TokenEx.DetokenizeIframe("tokenExIframeDiv", iframeConfig);  
  
//calling the iframe's load function adds the iframe to the DOM.  
iframe.load();  

```

Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Detokenization Configuration


On this page
# Detokenization Configuration
The TokenEx iFrame also allows you to securely display detokenized sensitive data on a web page, while keeping the webserver out of PCI scope. For example, a booking engine could enable their customers to view detokenized data in a web portal. Using the Detokenization iFrame to present detokenized data in a web page allows TokenEx to host the PCI or other sensitive data, while you maintain complete control over the other content on the page.
## Generating the Authentication Key for the Detokenization Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe "Direct link to Generating the Authentication Key for the Detokenization Iframe")
In order to generate the Authentication Key for the Detokenization Iframe, you will need to provide an existing token value in place of the tokenScheme required when generating the Authentication Key for the tokenization modes of the iFrame.
warning
The Authentication Key is only valid with a timestamp less than 20 seconds old.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tokenExId  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss   
format  |  
| token  | string  | The existing token to be detokenized  |  
Sample Code

```
TokenEx ID: 123456789  
Origin: https://mysite.com  
Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  
Token: 5454545454545454  
Template: tokenExID|origin|timestamp|token  
Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```

## Detokenize Iframe Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object "Direct link to Detokenize Iframe Configuration Object")  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  | Your TokenEx ID  |  
| authenticationKey  | string  | true  | The generated Authentication Key (see Generating the Authentication Key).  |  
| timestamp  | string  | true  | The timestamp when the authentication key was generated, in yyyyMMddHHmmss   
format.   
  
NOTE: This value must match the one provided when generating your Authentication Key.  |  
| origin  | string  | true  | The fully qualified Origin of your application  |  
| token  | string  | true  | The token to be detokenized  |  
| cvv  | bool  | false  | Must be set to true to enable this mode  |  
| cvvOnly  | bool  | false  | Must be set to true to enable this mode  |  
| cvvContainerID  | string  | false  | ContainerID in which you'd like the CVV to appear  |  
| styles  | object  | false  | Optionally sets the placeholder attribute of the input  |  
| font  | string  | false  | A google font to use in the iframe  |  
| title  | string  | false  | Content of the title element used by the iframe document  |  
| expiresInSeconds  | int  | false  | Sets the expiration time for the IFrame. Default is 20 seconds, Maximum is 60 seconds.  |  
| enablePrettyFormat  | bool  | false  | Enabling this property will auto format the credit card number as it appears on the physical card  |  
## Using the Detokenize Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe "Direct link to Using the Detokenize Iframe")
JavaScript

```
//create the config object  
var iframeConfig = {  
  origin: "https://mysite.com",  
  timestamp: "20200109161437",  
  tokenExID: "123456789",  
  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  
  token: "5454545454545454",  
};  
  
//create a new instance of the detokenize iframe, and add the container ID and config object  
var iframe = new TokenEx.DetokenizeIframe("tokenExIframeDiv", iframeConfig);  
  
//calling the iframe's load function adds the iframe to the DOM.  
iframe.load();  

```

Last updated on **Apr 10, 2026**
[Previous CVV Only Mode Configuration](https://documentation.ixopay.com/modules/docs/tokenex/cvv-only-mode-configuration)[Next Autocomplete](https://documentation.ixopay.com/modules/docs/tokenex/autocomplete)
  * [Generating the Authentication Key for the Detokenization Iframe](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe)
  * [Detokenize Iframe Configuration Object](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object)
  * [Using the Detokenize Iframe](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe)


Send Feedback
Send Feedback
  * [](https://documentation.ixopay.com/modules/)
  * TokenEx iFrame
  * [Creating the iFrame](https://documentation.ixopay.com/modules/docs/tokenex/creating-the-iframe)
  * Detokenization Configuration


On this page
# Detokenization Configuration
The TokenEx iFrame also allows you to securely display detokenized sensitive data on a web page, while keeping the webserver out of PCI scope. For example, a booking engine could enable their customers to view detokenized data in a web portal. Using the Detokenization iFrame to present detokenized data in a web page allows TokenEx to host the PCI or other sensitive data, while you maintain complete control over the other content on the page.
## Generating the Authentication Key for the Detokenization Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe "Direct link to Generating the Authentication Key for the Detokenization Iframe")
In order to generate the Authentication Key for the Detokenization Iframe, you will need to provide an existing token value in place of the tokenScheme required when generating the Authentication Key for the tokenization modes of the iFrame.
warning
The Authentication Key is only valid with a timestamp less than 20 seconds old.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tokenExId  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss   
format  |  
| token  | string  | The existing token to be detokenized  |  
Sample Code

```
TokenEx ID: 123456789  
Origin: https://mysite.com  
Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  
Token: 5454545454545454  
Template: tokenExID|origin|timestamp|token  
Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```

## Detokenize Iframe Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object "Direct link to Detokenize Iframe Configuration Object")  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  | Your TokenEx ID  |  
| authenticationKey  | string  | true  | The generated Authentication Key (see Generating the Authentication Key).  |  
| timestamp  | string  | true  | The timestamp when the authentication key was generated, in yyyyMMddHHmmss   
format.   
  
NOTE: This value must match the one provided when generating your Authentication Key.  |  
| origin  | string  | true  | The fully qualified Origin of your application  |  
| token  | string  | true  | The token to be detokenized  |  
| cvv  | bool  | false  | Must be set to true to enable this mode  |  
| cvvOnly  | bool  | false  | Must be set to true to enable this mode  |  
| cvvContainerID  | string  | false  | ContainerID in which you'd like the CVV to appear  |  
| styles  | object  | false  | Optionally sets the placeholder attribute of the input  |  
| font  | string  | false  | A google font to use in the iframe  |  
| title  | string  | false  | Content of the title element used by the iframe document  |  
| expiresInSeconds  | int  | false  | Sets the expiration time for the IFrame. Default is 20 seconds, Maximum is 60 seconds.  |  
| enablePrettyFormat  | bool  | false  | Enabling this property will auto format the credit card number as it appears on the physical card  |  
## Using the Detokenize Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe "Direct link to Using the Detokenize Iframe")
JavaScript

```
//create the config object  
var iframeConfig = {  
  origin: "https://mysite.com",  
  timestamp: "20200109161437",  
  tokenExID: "123456789",  
  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  
  token: "5454545454545454",  
};  
  
//create a new instance of the detokenize iframe, and add the container ID and config object  
var iframe = new TokenEx.DetokenizeIframe("tokenExIframeDiv", iframeConfig);  
  
//calling the iframe's load function adds the iframe to the DOM.  
iframe.load();  

```

Last updated on **Apr 10, 2026**
# Detokenization Configuration
The TokenEx iFrame also allows you to securely display detokenized sensitive data on a web page, while keeping the webserver out of PCI scope. For example, a booking engine could enable their customers to view detokenized data in a web portal. Using the Detokenization iFrame to present detokenized data in a web page allows TokenEx to host the PCI or other sensitive data, while you maintain complete control over the other content on the page.
## Generating the Authentication Key for the Detokenization Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#generating-the-authentication-key-for-the-detokenization-iframe "Direct link to Generating the Authentication Key for the Detokenization Iframe")
In order to generate the Authentication Key for the Detokenization Iframe, you will need to provide an existing token value in place of the tokenScheme required when generating the Authentication Key for the tokenization modes of the iFrame.
warning
The Authentication Key is only valid with a timestamp less than 20 seconds old.  
| Name  | Type  | Description  |  
| --- | --- | --- |  
| tokenExId  | string  | Your TokenEx ID  |  
| origin  | string  | The fully qualified Origin of your application  |  
| timestamp  | string  | The timestamp (UTC) when the hash is generated, in yyyyMMddHHmmss   
format  |  
| token  | string  | The existing token to be detokenized  |  
Sample Code

```
TokenEx ID: 123456789  
Origin: https://mysite.com  
Timestamp: 20180109161437 (January 9th, 2018 4:14:37 PM UTC, formatted in yyyyMMddHHmmss format)  
Token: 5454545454545454  
Template: tokenExID|origin|timestamp|token  
Concatenated String for generating HMAC: 123456789|https://mysite.com|20180109161437|5454545454545454  

```

## Detokenize Iframe Configuration Object[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#detokenize-iframe-configuration-object "Direct link to Detokenize Iframe Configuration Object")  
| Parameter  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | true  | Your TokenEx ID  |  
| authenticationKey  | string  | true  | The generated Authentication Key (see Generating the Authentication Key).  |  
| timestamp  | string  | true  | The timestamp when the authentication key was generated, in yyyyMMddHHmmss   
format.   
  
NOTE: This value must match the one provided when generating your Authentication Key.  |  
| origin  | string  | true  | The fully qualified Origin of your application  |  
| token  | string  | true  | The token to be detokenized  |  
| cvv  | bool  | false  | Must be set to true to enable this mode  |  
| cvvOnly  | bool  | false  | Must be set to true to enable this mode  |  
| cvvContainerID  | string  | false  | ContainerID in which you'd like the CVV to appear  |  
| styles  | object  | false  | Optionally sets the placeholder attribute of the input  |  
| font  | string  | false  | A google font to use in the iframe  |  
| title  | string  | false  | Content of the title element used by the iframe document  |  
| expiresInSeconds  | int  | false  | Sets the expiration time for the IFrame. Default is 20 seconds, Maximum is 60 seconds.  |  
| enablePrettyFormat  | bool  | false  | Enabling this property will auto format the credit card number as it appears on the physical card  |  
## Using the Detokenize Iframe[​](https://documentation.ixopay.com/modules/docs/tokenex/detokenize#using-the-detokenize-iframe "Direct link to Using the Detokenize Iframe")
JavaScript

```
//create the config object  
var iframeConfig = {  
  origin: "https://mysite.com",  
  timestamp: "20200109161437",  
  tokenExID: "123456789",  
  authenticationKey: "QmFzZTY0KEhNQRNTSEEyNTYoIlRva2VuRXhJRHxPcmlnaW58VGltZXN0YW1wfFRva2VuU2NoZW1lKSk=",  
  token: "5454545454545454",  
};  
  
//create a new instance of the detokenize iframe, and add the container ID and config object  
var iframe = new TokenEx.DetokenizeIframe("tokenExIframeDiv", iframeConfig);  
  
//calling the iframe's load function adds the iframe to the DOM.  
iframe.load();  

```

