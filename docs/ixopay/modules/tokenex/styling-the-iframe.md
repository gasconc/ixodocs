---
title: Styling the iFrame
summary: ' TokenEx iFrame  Styling the iFrame'
tags:
- tokenex
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/styling-the-iframe
portal: ixopay-modules
updated: '2026-05-25'
related: []
---

* TokenEx iFrame
  * Styling the iFrame

# Styling the iFrame
The iFrame is styled by passing the CSS in the configuration object used to generate the iFrame. The styles object consists of three elements: base, focus and error.  
| Parameter  | Type  | Description  |  
| --- | --- | --- |  
| base  | string  | The base style applied to the input element within the iFrame  |  
| focus  | string  | Optional style applied when input element within the iFrame gains focus  |  
| error  | string  | Style applied to the input element if a validation failure occurs  |  
| placeholder  | string  | Allows for the styling of the input placeholder text  |  
JavaScript
```

var styles = {  

  base: "font-family: Arial, sans-serif;padding: 0 8px;border: 1px solid rgba(0, 0, 0, 0.2);margin: 0;width: 100%;font-size: 13px;line-height: 30px;height: 32px;box-sizing: border-box;-moz-box-sizing: border-box;",  

  focus: "box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);border: 1px solid rgba(0, 132, 255, 0.5);outline: 0;",  

  error: "box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);border: 1px solid rgba(224, 57, 57, 0.5);",  

};  

```In general, you should provide a class for the input, as well as an error class, which the iFrame will automatically append if a validation failure occurs.
Using the configuration depicted in the previous code sample would result in the following CSS applied within the iFrame:
CSS
```

input {  

  font-family: Arial, sans-serif;  

  padding: 0 8px;  

  border: 1px solid rgba(0, 0, 0, 0.2);  

  margin: 0;  

  width: 100%;  

  font-size: 13px;  

  line-height: 30px;  

  height: 32px;  

  box-sizing: border-box;  

  -moz-box-sizing: border-box;  

}  

  

input.focus {  

  box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);  

  border: 1px solid rgba(0, 132, 255, 0.5);  

  outline: 0;  

}  

  

input.error {  

  box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);  

  border: 1px solid rgba(224, 57, 57, 0.5);  

}  

```
```

var styles = {  

  base: "font-family: Arial, sans-serif;padding: 0 8px;border: 1px solid rgba(0, 0, 0, 0.2);margin: 0;width: 100%;font-size: 13px;line-height: 30px;height: 32px;box-sizing: border-box;-moz-box-sizing: border-box;",  

  focus: "box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);border: 1px solid rgba(0, 132, 255, 0.5);outline: 0;",  

  error: "box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);border: 1px solid rgba(224, 57, 57, 0.5);",  

};  

```
```

input {  

  font-family: Arial, sans-serif;  

  padding: 0 8px;  

  border: 1px solid rgba(0, 0, 0, 0.2);  

  margin: 0;  

  width: 100%;  

  font-size: 13px;  

  line-height: 30px;  

  height: 32px;  

  box-sizing: border-box;  

  -moz-box-sizing: border-box;  

}  

  

input.focus {  

  box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);  

  border: 1px solid rgba(0, 132, 255, 0.5);  

  outline: 0;  

}  

  

input.error {  

  box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);  

  border: 1px solid rgba(224, 57, 57, 0.5);  

}  

```
```

var styles = {  

  base: "font-family: Arial, sans-serif;padding: 0 8px;border: 1px solid rgba(0, 0, 0, 0.2);margin: 0;width: 100%;font-size: 13px;line-height: 30px;height: 32px;box-sizing: border-box;-moz-box-sizing: border-box;",  

  focus: "box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);border: 1px solid rgba(0, 132, 255, 0.5);outline: 0;",  

  error: "box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);border: 1px solid rgba(224, 57, 57, 0.5);",  

};  

```
```

input {  

  font-family: Arial, sans-serif;  

  padding: 0 8px;  

  border: 1px solid rgba(0, 0, 0, 0.2);  

  margin: 0;  

  width: 100%;  

  font-size: 13px;  

  line-height: 30px;  

  height: 32px;  

  box-sizing: border-box;  

  -moz-box-sizing: border-box;  

}  

  

input.focus {  

  box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);  

  border: 1px solid rgba(0, 132, 255, 0.5);  

  outline: 0;  

}  

  

input.error {  

  box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);  

  border: 1px solid rgba(224, 57, 57, 0.5);  

}  

```
```

var styles = {  

  base: "font-family: Arial, sans-serif;padding: 0 8px;border: 1px solid rgba(0, 0, 0, 0.2);margin: 0;width: 100%;font-size: 13px;line-height: 30px;height: 32px;box-sizing: border-box;-moz-box-sizing: border-box;",  

  focus: "box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);border: 1px solid rgba(0, 132, 255, 0.5);outline: 0;",  

  error: "box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);border: 1px solid rgba(224, 57, 57, 0.5);",  

};  

```
```

input {  

  font-family: Arial, sans-serif;  

  padding: 0 8px;  

  border: 1px solid rgba(0, 0, 0, 0.2);  

  margin: 0;  

  width: 100%;  

  font-size: 13px;  

  line-height: 30px;  

  height: 32px;  

  box-sizing: border-box;  

  -moz-box-sizing: border-box;  

}  

  

input.focus {  

  box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);  

  border: 1px solid rgba(0, 132, 255, 0.5);  

  outline: 0;  

}  

  

input.error {  

  box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);  

  border: 1px solid rgba(224, 57, 57, 0.5);  

}  

```
```

var styles = {  

  base: "font-family: Arial, sans-serif;padding: 0 8px;border: 1px solid rgba(0, 0, 0, 0.2);margin: 0;width: 100%;font-size: 13px;line-height: 30px;height: 32px;box-sizing: border-box;-moz-box-sizing: border-box;",  

  focus: "box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);border: 1px solid rgba(0, 132, 255, 0.5);outline: 0;",  

  error: "box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);border: 1px solid rgba(224, 57, 57, 0.5);",  

};  

```
```

input {  

  font-family: Arial, sans-serif;  

  padding: 0 8px;  

  border: 1px solid rgba(0, 0, 0, 0.2);  

  margin: 0;  

  width: 100%;  

  font-size: 13px;  

  line-height: 30px;  

  height: 32px;  

  box-sizing: border-box;  

  -moz-box-sizing: border-box;  

}  

  

input.focus {  

  box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);  

  border: 1px solid rgba(0, 132, 255, 0.5);  

  outline: 0;  

}  

  

input.error {  

  box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);  

  border: 1px solid rgba(224, 57, 57, 0.5);  

}  

```
```

var styles = {  

  base: "font-family: Arial, sans-serif;padding: 0 8px;border: 1px solid rgba(0, 0, 0, 0.2);margin: 0;width: 100%;font-size: 13px;line-height: 30px;height: 32px;box-sizing: border-box;-moz-box-sizing: border-box;",  

  focus: "box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);border: 1px solid rgba(0, 132, 255, 0.5);outline: 0;",  

  error: "box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);border: 1px solid rgba(224, 57, 57, 0.5);",  

};  

```
```

input {  

  font-family: Arial, sans-serif;  

  padding: 0 8px;  

  border: 1px solid rgba(0, 0, 0, 0.2);  

  margin: 0;  

  width: 100%;  

  font-size: 13px;  

  line-height: 30px;  

  height: 32px;  

  box-sizing: border-box;  

  -moz-box-sizing: border-box;  

}  

  

input.focus {  

  box-shadow: 0 0 6px 0 rgba(0, 132, 255, 0.5);  

  border: 1px solid rgba(0, 132, 255, 0.5);  

  outline: 0;  

}  

  

input.error {  

  box-shadow: 0 0 6px 0 rgba(224, 57, 57, 0.5);  

  border: 1px solid rgba(224, 57, 57, 0.5);  

}  

```