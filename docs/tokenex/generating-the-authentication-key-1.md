---
title: Generating the Authentication Key
summary: ' Mobile Solutions  Generating the Authentication Key'
tags:
- hmac-generation-https-documentation-ixopay-com-modules-docs-tokenex-generating-authentication-key-hmac-generation-direct-link-hmac-generation
- hmac
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1
portal: tokenex
updated: '2026-06-08'
related: []
---

* Mobile Solutions
  * [Usage](https://documentation.ixopay.com/modules/docs/tokenex/usage)
  * Generating the Authentication Key

# Generating the Authentication Key
The Authentication Key is a Base64-encoded **[Hash-based Message Authentication Code](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code)** (specifically **HMAC-SHA256**) to be generated on your server (**not** on a mobile device), using your Client Secret Key (available in the Customer Portal), and a pipe-delimited concatenated string consisting of the TokenEx ID, Timestamp, and either the Token or TokenScheme depending on which function you intend to call (see the Examples section for each respective endpoint).
warning
The Authentication Key is only valid with a timestamp less than 20 minutes old.
## Example C# HMAC Generation[​](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#example-c-hmac-generation "Direct link to Example C# HMAC Generation")
```

private string GenerateHMAC(string concatenatedInfo, string clientSecretKey)  

{  

  var result = string.Empty;  

  var hmac = new System.Security.Cryptography.HMACSHA256();  

  hmac.Key = System.Text.Encoding.UTF8.GetBytes(clientSecretKey);  

  var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(concatenatedInfo));  

  result = Convert.ToBase64String(hash); // Ensure the string returned is Base64 Encoded  

  return result;  

}  

  

```## HMAC Construction - [Tokenize & TokenizeWithCVV & Bin Lookup](https://dotnetfiddle.net/RQL7ON)[​](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#hmac-construction-tokenize-tokenizewithcvv-binlookup "Direct link to hmac-construction-tokenize-tokenizewithcvv-binlookup")
The following values are used to construct the authentication key.
**Inputs:**  
| Parameter  | Example Value  | Description  |  
| --- | --- | --- |  
| `TokenEx ID`  | `YourTokenExID`  | Your unique TokenEx Identifier.  |  
| `Timestamp`  | `20180109161437`  | The time of the request.  |  
| `Token Scheme`  | `sixTOKENfour`  | The token scheme for the new token.  |  
| `Client Secret Key`  | `TEST`  | Your secret key from the Customer Portal.  |  
The `Timestamp` must be in `YYYYMMDDHHmmss` format (e.g., `20180109161437`). This represents:
  * `YYYY`: 2018 (Year)
  * `MM`: 01 (Month)
  * `DD`: 09 (Day)
  * `HH`: 16 (Hour)
  * `mm`: 14 (Minute)
  * `ss`: 37 (Second)

**Concatenation & Hashing:**
These inputs are then concatenated with a pipe `|` delimiter.
**Concatenated String:**
```

123456789987654321|20180109161437|sixTOKENfour  

```This string is then used with your Client Secret Key to generate the HMAC-SHA256 hash, which is then Base64 encoded.
**Resulting Authentication Key:**
```

3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=  

```## HMAC Construction - [TokenizeCVV](https://dotnetfiddle.net/MU57ut)[​](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#hmac-construction---tokenizecvv "Direct link to hmac-construction---tokenizecvv")
**Inputs:**  
| Parameter  | Example Value  | Description  |  
| --- | --- | --- |  
| `TokenEx ID`  | `YourTokenExID`  | Your unique TokenEx Identifier.  |  
| `Timestamp`  | `20180109161437`  | The time of the request.  |  
| `Token`  | `545454587415454`  | The token to be used.  |  
| `Client Secret Key`  | `TEST`  | Your secret key from the Customer Portal.  |  
The `Timestamp` must be in `YYYYMMDDHHmmss` format (e.g., `20180109161437`). This represents:
  * `YYYY`: 2018 (Year)
  * `MM`: 01 (Month)
  * `DD`: 09 (Day)
  * `HH`: 16 (Hour)
  * `mm`: 14 (Minute)
  * `ss`: 37 (Second)
```

123456789987654321|20180109161437|545454587415454  

```
```

26WAwVdSeLl3baTY8/uOJ9A/Ljc7/TCDbMnadJ4fOqc=  

```
```

private string GenerateHMAC(string concatenatedInfo, string clientSecretKey)  

{  

  var result = string.Empty;  

  var hmac = new System.Security.Cryptography.HMACSHA256();  

  hmac.Key = System.Text.Encoding.UTF8.GetBytes(clientSecretKey);  

  var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(concatenatedInfo));  

  result = Convert.ToBase64String(hash); // Ensure the string returned is Base64 Encoded  

  return result;  

}  

  

```
```

123456789987654321|20180109161437|sixTOKENfour  

```
```

3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=  

```
```

123456789987654321|20180109161437|545454587415454  

```
```

26WAwVdSeLl3baTY8/uOJ9A/Ljc7/TCDbMnadJ4fOqc=  

```
```

private string GenerateHMAC(string concatenatedInfo, string clientSecretKey)  

{  

  var result = string.Empty;  

  var hmac = new System.Security.Cryptography.HMACSHA256();  

  hmac.Key = System.Text.Encoding.UTF8.GetBytes(clientSecretKey);  

  var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(concatenatedInfo));  

  result = Convert.ToBase64String(hash); // Ensure the string returned is Base64 Encoded  

  return result;  

}  

  

```
```

123456789987654321|20180109161437|sixTOKENfour  

```
```

3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=  

```
```

123456789987654321|20180109161437|545454587415454  

```
```

26WAwVdSeLl3baTY8/uOJ9A/Ljc7/TCDbMnadJ4fOqc=  

```
```

private string GenerateHMAC(string concatenatedInfo, string clientSecretKey)  

{  

  var result = string.Empty;  

  var hmac = new System.Security.Cryptography.HMACSHA256();  

  hmac.Key = System.Text.Encoding.UTF8.GetBytes(clientSecretKey);  

  var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(concatenatedInfo));  

  result = Convert.ToBase64String(hash); // Ensure the string returned is Base64 Encoded  

  return result;  

}  

  

```
```

123456789987654321|20180109161437|sixTOKENfour  

```
```

3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=  

```
```

123456789987654321|20180109161437|545454587415454  

```
```

26WAwVdSeLl3baTY8/uOJ9A/Ljc7/TCDbMnadJ4fOqc=  

```  * [Example C# HMAC Generation](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#example-c-hmac-generation)
  * [HMAC Construction - Tokenize & TokenizeWithCVV & Bin Lookup](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#hmac-construction-tokenize-tokenizewithcvv-binlookup)
  * [HMAC Construction - TokenizeCVV](https://documentation.ixopay.com/modules/docs/tokenex/generating-the-authentication-key-1#hmac-construction---tokenizecvv)
```

private string GenerateHMAC(string concatenatedInfo, string clientSecretKey)  

{  

  var result = string.Empty;  

  var hmac = new System.Security.Cryptography.HMACSHA256();  

  hmac.Key = System.Text.Encoding.UTF8.GetBytes(clientSecretKey);  

  var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(concatenatedInfo));  

  result = Convert.ToBase64String(hash); // Ensure the string returned is Base64 Encoded  

  return result;  

}  

  

```
```

123456789987654321|20180109161437|sixTOKENfour  

```
```

3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=  

```
```

123456789987654321|20180109161437|545454587415454  

```
```

26WAwVdSeLl3baTY8/uOJ9A/Ljc7/TCDbMnadJ4fOqc=  

```
```

private string GenerateHMAC(string concatenatedInfo, string clientSecretKey)  

{  

  var result = string.Empty;  

  var hmac = new System.Security.Cryptography.HMACSHA256();  

  hmac.Key = System.Text.Encoding.UTF8.GetBytes(clientSecretKey);  

  var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(concatenatedInfo));  

  result = Convert.ToBase64String(hash); // Ensure the string returned is Base64 Encoded  

  return result;  

}  

  

```
```

123456789987654321|20180109161437|sixTOKENfour  

```
```

3mHJFag1ICQiwRdSw1QY86WUvt3IDklswf6AA/q+wdU=  

```
```

123456789987654321|20180109161437|545454587415454  

```
```

26WAwVdSeLl3baTY8/uOJ9A/Ljc7/TCDbMnadJ4fOqc=  

```