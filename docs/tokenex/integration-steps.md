---
title: BBE Implementation Steps
summary: ' Browser based encryption BBE  BBE Implementation Steps'
tags:
- api
- pci
- tokenex
- ixopay
- credit-card
source_url: https://documentation.ixopay.com/modules/docs/tokenex/integration-steps
portal: tokenex
updated: '2026-06-08'
related: []
---

* Browser based encryption (BBE)
  * BBE Implementation Steps

# BBE Implementation Steps
This page describes the steps required to implement Browser Based Encryption (BBE).
Follow the steps below to implement BBE on a webpage collecting sensitive information.
info
BBE will encrypt sensitive data on a web page. The resulting ciphertext will be submitted to your webserver rather than the sensitive data element(s). In order to obtain a token from the ciphertext, you must call the [TokenizeEncrypted](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenizeencrypted) Web API endpoint.
  1. Reference the TokenEx BBE Javascript library in the header of the web page collecting sensitive data, or your preferred encryption library (e.g. JSEncrypt).
```

<script src="https://api.tokenex.com/inpage/js/TokenEx-Lite.js"></script>  

```  2. Add the TokenEx [RSA public encryption key](https://documentation.ixopay.com/modules/docs/tokenex/tokenex-public-keys) to a hidden field on the form.
info
In your customer portal, navigate to the Configuration tab, and then to the Browser Based Encryption menu to find your active public RSA key.
warning
Once copied from the portal, be sure to escape the key into a single line string. You can use a tool such as [this one.](https://www.freeformatter.com/java-dotnet-escape.html#before-output)
```

<input  

  id="TxEncryptionKey"  

  type="hidden"  

  value="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvWpIQFjQQCPpaIlJKpegirp5kLkzLB1AxHmnLk73D3TJbAGqr1QmlsWDBtMPMRpdzzUM7ZwX3kzhIuATV4Pe7RKp3nZlVmcrT0YCQXBrTwqZNh775z58GP2kZs+gVfNqBampJPzSB/hB62KkByhECn6grrRjiAVwJyZVEvs/2vrxaEpO+aE16emtX12RgI5JdzdOiNyZEQteU6zRBRJEocPWVxExaOpVVVJ5+UnW0LcalzA+lRGRTrQJ5JguAPiAOzRPTK/lYFFpCAl/F8wtoAVG1c8zO2NcQ0Pko+fmeidRFxJ/did2btV+9Mkze3mBphwFmvnxa35LF+Cs/XJHDwIDAQAB"  

/>  

```  3. When you're ready to encrypt the sensitive data on the form, call the TokenEx `TxEncrypt` JavaScript function to encrypt the data using the TokenEx RSA key.
  4. Remove the sensitive data inputs form the form and add the ciphertext.
  5. Post the form to your web server.
```

{  

  //grab the public key from the hidden field  

  var key = document.getElementById("TxEncryptionKey").value;  

  //grab the PAN  

  var creditCard = document.getElementById("txtCreditCard").value;  

  

  //encrypt the data  

  var cipherText = TxEncrypt(key, creditCard);  

  

  //add the cipherText value to your form  

  document.getElementById("ciphertext").value = cipherText;  

  

  //remove the PAN data from your form  

  document.getElementById("txtCreditCard").value = "";  

  

  //post your form to your server.  

}  

```  6. To obtain a token using the ciphertext, call the [TokenizeEncrypted](https://documentation.ixopay.com/modules/api/tokenex/pci-token-servicesv-2-tokenizeencrypted) Web API endpoint.

A working demo of these steps can be found on [jsfiddle.net](https://jsfiddle.net/TokenEx/pdx9qLqh/).
Additional demo for RSA OAEP padding can be found on [.NetFiddle](https://dotnetfiddle.net/cPyb3m).
```

<script src="https://api.tokenex.com/inpage/js/TokenEx-Lite.js"></script>  

```
```

<input  

  id="TxEncryptionKey"  

  type="hidden"  

  value="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvWpIQFjQQCPpaIlJKpegirp5kLkzLB1AxHmnLk73D3TJbAGqr1QmlsWDBtMPMRpdzzUM7ZwX3kzhIuATV4Pe7RKp3nZlVmcrT0YCQXBrTwqZNh775z58GP2kZs+gVfNqBampJPzSB/hB62KkByhECn6grrRjiAVwJyZVEvs/2vrxaEpO+aE16emtX12RgI5JdzdOiNyZEQteU6zRBRJEocPWVxExaOpVVVJ5+UnW0LcalzA+lRGRTrQJ5JguAPiAOzRPTK/lYFFpCAl/F8wtoAVG1c8zO2NcQ0Pko+fmeidRFxJ/did2btV+9Mkze3mBphwFmvnxa35LF+Cs/XJHDwIDAQAB"  

/>  

```
```

{  

  //grab the public key from the hidden field  

  var key = document.getElementById("TxEncryptionKey").value;  

  //grab the PAN  

  var creditCard = document.getElementById("txtCreditCard").value;  

  

  //encrypt the data  

  var cipherText = TxEncrypt(key, creditCard);  

  

  //add the cipherText value to your form  

  document.getElementById("ciphertext").value = cipherText;  

  

  //remove the PAN data from your form  

  document.getElementById("txtCreditCard").value = "";  

  

  //post your form to your server.  

}  

```
```

<script src="https://api.tokenex.com/inpage/js/TokenEx-Lite.js"></script>  

```
```

<input  

  id="TxEncryptionKey"  

  type="hidden"  

  value="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvWpIQFjQQCPpaIlJKpegirp5kLkzLB1AxHmnLk73D3TJbAGqr1QmlsWDBtMPMRpdzzUM7ZwX3kzhIuATV4Pe7RKp3nZlVmcrT0YCQXBrTwqZNh775z58GP2kZs+gVfNqBampJPzSB/hB62KkByhECn6grrRjiAVwJyZVEvs/2vrxaEpO+aE16emtX12RgI5JdzdOiNyZEQteU6zRBRJEocPWVxExaOpVVVJ5+UnW0LcalzA+lRGRTrQJ5JguAPiAOzRPTK/lYFFpCAl/F8wtoAVG1c8zO2NcQ0Pko+fmeidRFxJ/did2btV+9Mkze3mBphwFmvnxa35LF+Cs/XJHDwIDAQAB"  

/>  

```
```

{  

  //grab the public key from the hidden field  

  var key = document.getElementById("TxEncryptionKey").value;  

  //grab the PAN  

  var creditCard = document.getElementById("txtCreditCard").value;  

  

  //encrypt the data  

  var cipherText = TxEncrypt(key, creditCard);  

  

  //add the cipherText value to your form  

  document.getElementById("ciphertext").value = cipherText;  

  

  //remove the PAN data from your form  

  document.getElementById("txtCreditCard").value = "";  

  

  //post your form to your server.  

}  

```A working demo of these steps can be found on [jsfiddle.net](https://jsfiddle.net/TokenEx/pdx9qLqh/).
Additional demo for RSA OAEP padding can be found on [.NetFiddle](https://dotnetfiddle.net/cPyb3m).
  * Browser based encryption (BBE)
  * BBE Implementation Steps
```

<script src="https://api.tokenex.com/inpage/js/TokenEx-Lite.js"></script>  

```
```

<input  

  id="TxEncryptionKey"  

  type="hidden"  

  value="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvWpIQFjQQCPpaIlJKpegirp5kLkzLB1AxHmnLk73D3TJbAGqr1QmlsWDBtMPMRpdzzUM7ZwX3kzhIuATV4Pe7RKp3nZlVmcrT0YCQXBrTwqZNh775z58GP2kZs+gVfNqBampJPzSB/hB62KkByhECn6grrRjiAVwJyZVEvs/2vrxaEpO+aE16emtX12RgI5JdzdOiNyZEQteU6zRBRJEocPWVxExaOpVVVJ5+UnW0LcalzA+lRGRTrQJ5JguAPiAOzRPTK/lYFFpCAl/F8wtoAVG1c8zO2NcQ0Pko+fmeidRFxJ/did2btV+9Mkze3mBphwFmvnxa35LF+Cs/XJHDwIDAQAB"  

/>  

```
```

{  

  //grab the public key from the hidden field  

  var key = document.getElementById("TxEncryptionKey").value;  

  //grab the PAN  

  var creditCard = document.getElementById("txtCreditCard").value;  

  

  //encrypt the data  

  var cipherText = TxEncrypt(key, creditCard);  

  

  //add the cipherText value to your form  

  document.getElementById("ciphertext").value = cipherText;  

  

  //remove the PAN data from your form  

  document.getElementById("txtCreditCard").value = "";  

  

  //post your form to your server.  

}  

```
```

<script src="https://api.tokenex.com/inpage/js/TokenEx-Lite.js"></script>  

```
```

<input  

  id="TxEncryptionKey"  

  type="hidden"  

  value="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvWpIQFjQQCPpaIlJKpegirp5kLkzLB1AxHmnLk73D3TJbAGqr1QmlsWDBtMPMRpdzzUM7ZwX3kzhIuATV4Pe7RKp3nZlVmcrT0YCQXBrTwqZNh775z58GP2kZs+gVfNqBampJPzSB/hB62KkByhECn6grrRjiAVwJyZVEvs/2vrxaEpO+aE16emtX12RgI5JdzdOiNyZEQteU6zRBRJEocPWVxExaOpVVVJ5+UnW0LcalzA+lRGRTrQJ5JguAPiAOzRPTK/lYFFpCAl/F8wtoAVG1c8zO2NcQ0Pko+fmeidRFxJ/did2btV+9Mkze3mBphwFmvnxa35LF+Cs/XJHDwIDAQAB"  

/>  

```
```

{  

  //grab the public key from the hidden field  

  var key = document.getElementById("TxEncryptionKey").value;  

  //grab the PAN  

  var creditCard = document.getElementById("txtCreditCard").value;  

  

  //encrypt the data  

  var cipherText = TxEncrypt(key, creditCard);  

  

  //add the cipherText value to your form  

  document.getElementById("ciphertext").value = cipherText;  

  

  //remove the PAN data from your form  

  document.getElementById("txtCreditCard").value = "";  

  

  //post your form to your server.  

}  

```
```

<script src="https://api.tokenex.com/inpage/js/TokenEx-Lite.js"></script>  

```
```

<input  

  id="TxEncryptionKey"  

  type="hidden"  

  value="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvWpIQFjQQCPpaIlJKpegirp5kLkzLB1AxHmnLk73D3TJbAGqr1QmlsWDBtMPMRpdzzUM7ZwX3kzhIuATV4Pe7RKp3nZlVmcrT0YCQXBrTwqZNh775z58GP2kZs+gVfNqBampJPzSB/hB62KkByhECn6grrRjiAVwJyZVEvs/2vrxaEpO+aE16emtX12RgI5JdzdOiNyZEQteU6zRBRJEocPWVxExaOpVVVJ5+UnW0LcalzA+lRGRTrQJ5JguAPiAOzRPTK/lYFFpCAl/F8wtoAVG1c8zO2NcQ0Pko+fmeidRFxJ/did2btV+9Mkze3mBphwFmvnxa35LF+Cs/XJHDwIDAQAB"  

/>  

```
```

{  

  //grab the public key from the hidden field  

  var key = document.getElementById("TxEncryptionKey").value;  

  //grab the PAN  

  var creditCard = document.getElementById("txtCreditCard").value;  

  

  //encrypt the data  

  var cipherText = TxEncrypt(key, creditCard);  

  

  //add the cipherText value to your form  

  document.getElementById("ciphertext").value = cipherText;  

  

  //remove the PAN data from your form  

  document.getElementById("txtCreditCard").value = "";  

  

  //post your form to your server.  

}  

```A working demo of these steps can be found on [jsfiddle.net](https://jsfiddle.net/TokenEx/pdx9qLqh/).
Additional demo for RSA OAEP padding can be found on [.NetFiddle](https://dotnetfiddle.net/cPyb3m).