---
title: Payment Selection Template
summary: ' Multi-Method Connectorhttps://documentation.ixopay.com/manual/docs/connector/multi-method-connector  Payment
  Selection Template'
tags:
- multi-method-connector-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-payment-selection-multi-method-connector-direct-link-multi-method-connector
- customize-payment-selection-template-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-payment-selection-customize-payment-selection-template-direct-link-customize-payment-selection-template
- coloring-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-payment-selection-coloring-direct-link-coloring
- global-mandatory-fields-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-payment-selection-global-mandatory-fields-direct-link-global-mandatory-fields
- defining-payment-method-specific-fields-https-documentation-ixopay-com-manual-docs-connector-multi-method-connector-payment-selection-defining-payment-method-specific-fields-direct-link-defining-payment-method-specific-fields
- tokenization
- ixopay
- recurring
- hosted-payment-page
- direct-debit
source_url: https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector)
  * Payment Selection Template

# Payment Selection Template
## Multi-Method Connector[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#multi-method-connector "Direct link to Multi-Method Connector")
In order to use **Payment Selection Page** a Multi-Method (Meta-)Connector is needed. Please refer to [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector) for the configuration. Once your Multi-Method (Meta-)Connector is setup, you are ready to tackle the payment selection page:
  1. Navigate to the Payment Template section of the Mulit-Method (Meta-) Connector (see Connector Details Overview)
  2. Create a Payment Template as described in the [Payment Templates](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates) section
  3. [Customize](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#customize-payment-selection-template) Payment Template
  4. Publish Payment Template in Fast Editor

In comparison to a Connector, Mullit-Method (Meta-) Connectors can be found under a different path in the [Fast Editor](https://documentation.ixopay.com/manual/docs/fast):
`/vhosts/[host address, e.g.sandbox.ixopay.com]/layouts/default/internal-pages/payment/meta/index.en.php`
![Connector Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview-payment-templates.7e37d6b.1280.png)Connector Details Overview![Path Fast Editor](https://documentation.ixopay.com/manual/assets/ideal-img/path-fast-editor-.a42c488.1280.png)Path Fast Editor
tip
While it can be handy to edit the page through the Connector edit view, remember that you need to [publish changes via the FAST Editor](https://documentation.ixopay.com/manual/docs/fast) in order the changes take effect.
## Customize Payment Selection Template[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#customize-payment-selection-template "Direct link to Customize Payment Selection Template")
If you created your Payment Selection Template to be prefilled with the default templates, you can easily customize and adjust the templates to your needs. Find some example customizations below:
### Coloring[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#coloring "Direct link to Coloring")
One of the first blocks within the Payment Selection Template is the `` block followed by **CSS3 variables**. Change the colors to fit your desired layout of the template.
Further style elements can be changed in this section such as fonts, margins and logos, but keep in mind that changes to the design might lead to further adjustments regarding colors.
![Colors](https://documentation.ixopay.com/manual/assets/ideal-img/colors.247f42f.1280.png)Colors
### Global mandatory fields[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#global-mandatory-fields "Direct link to Global mandatory fields")
Each payment method requires different mandatory fields, e.g. IBAN or Credit Card number. However, for some fields such as name or address, it can make sense to make them mandatory for every payment method. You can define such **global** **mandatory fields** by editing the variable set forceField.
In the example below, the field first_name and last_name will appear for every payment method form.
![Global mandatory fields](https://documentation.ixopay.com/manual/assets/ideal-img/global-mandatory-fields.0a66a8f.1280.png)Global mandatory fields
```

{% set forceFields = ["firstName", "lastName"] %}  

```note
It is important to note that mandatory fields, which can be configured on each Connector in the Constraints section or in the Global Connector Settings, will be added automatically to the corresponding payment method form. Keep in mind that with that the payment selection page might display certain fields multiple times. In this case you may want to adjust the constraints of the Connector or the global mandatory field list.  
| Available global mandatory fields |  
| --- |  
| identification |  
| firstName |  
| lastName |  
| birthDate |  
| gender |  
| billingAddress1 |  
| billingAddress2 |  
| billingCity |  
| billingPostcode |  
| billingState |  
| billingCountry |  
| billingPhone |  
| shippingFirstname |  
| shippingLastname |  
| shippingCompany |  
| shippingAddress1 |  
| shippingAddress2 |  
| shippingCity |  
| shippingPostcode |  
| shippingState |  
| shippingCountry |  
| shippingPhone |  
| company |  
| email |  
| nationalId |  
| iban |  
| bic |  
| cardHolder |  
| expiry |  
| cardToken |  
### Defining payment method specific fields[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#defining-payment-method-specific-fields "Direct link to Defining payment method specific fields")
The payment methods are passed to the template page, as an array named **paymentMethods**. In order to interpret and display available payment methods, you should ideally use a loop. To get a better grasp of how this works, it is recommended to take a look at the provisioned default template file before creating your own. Now in order to add fields specific to a payment method, e.g. Credit Cards or Direct Debit, you have to add the placeholder fields once the loop reaches the corresponding method. To check the current method of the loop, make use of the **apiIdentifier** of the current method (**m.apiIdentifier**). The names themselves can be found in the configuration tab of the Connector Details Overview.
#### Example[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#example "Direct link to Example")
```

{% if m.apiIdentifier == 'DirectDebit' %}  

<div class="form-group row">  

  <label for="{{ fields.iban.id }}" class="col-md-5 col-form-label">IBAN</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.iban.name }}" id="{{ fields.iban.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

  <div class="form-group row">  

  <label for="{{ fields.bic.id }}" class="col-md-5 col-form-label">BIC</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.bic.name }}" id="{{ fields.bic.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

{% endif %}  

```### Display payment methods[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#display-payment-methods "Direct link to Display payment methods")
The available payment methods (based on [configured Connectors and Rules](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector)) are interpreted automatically and passed to Payment Selection Page. Here the payment methods are read using a loop with each method getting their own form with corresponding fields (as defined in the section above). In our prefilled design, each payment method will be represented using an image (see Payment selection page example).
![Payment selection page example](https://documentation.ixopay.com/manual/assets/ideal-img/payment-selection-page-example.43f2435.586.png)Payment selection page example
To replace the **images** , simply upload your own images for each payment method and replace the corresponding parts in the template as described in the [Static section in the Fast Editor Setup.](https://documentation.ixopay.com/manual/docs/fast)
```

{% if method == "Method1" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder1.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method2" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder2.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method3" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder3.png'); ?>" alt="{{ m.name }}"/>  

{# ... #}  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```#### Example[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#example-1 "Direct link to Example")
For the payment method **Credit Card** the uploaded **creditcard.png** file, for **DirectDebit** the **directdebit.png** and for **Dummy** the **dummy.png** should be used. Therefore the corresponding method and file paths need to be updated in the code snippet shown above. The available methods can be found in the configuration tab of the Connector Details Overview (see Connector Details Overview - Method names).
![Connector Details Overview - Method names](https://documentation.ixopay.com/manual/assets/ideal-img/connector-details-overview-method-names.2f61cb9.535.png)Connector Details Overview - Method names
```

{% if method == "Creditcard" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/creditcard.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "DirectDebit" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/directdebit.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Dummy" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/dummy.png'); ?>" alt="{{ m.name }}"/>  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```## Customer Profiles[​](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#customer-profiles "Direct link to Customer Profiles")
The [IXOPAY platform](https://www.ixopay.com) provides the option to use [Customer Profiles](https://documentation.ixopay.com/manual/docs/tokenization/customer-profiles) with Multi-Method (Meta-)Connectors. If enabled, you can modify your Payment Selection Page in a way to give customers the option to save their payment instruments if supported by the payment method, for future purchases or for recurring transactions (depending on your business model).
To enable the option in your Payment Selection Page (see Customer Profile Options) follow the instructions [Customer Profiles](https://documentation.ixopay.com/manual/docs/tokenization/customer-profiles) - Setting up the Hosted Payment Page with Customer Profiles.
With that:
  * Customers without a Customer Profile can save a payment instrument and set as preferred.
  * Existing Customer Profile Customers can update their profile by adding new payment instruments and updating their preferences.

![Customer Profile Options](https://documentation.ixopay.com/manual/assets/ideal-img/customer-profile-options.77c1926.1280.png)Customer Profile Options
```

{% set forceFields = ["firstName", "lastName"] %}  

```
```

{% if m.apiIdentifier == 'DirectDebit' %}  

<div class="form-group row">  

  <label for="{{ fields.iban.id }}" class="col-md-5 col-form-label">IBAN</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.iban.name }}" id="{{ fields.iban.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

  <div class="form-group row">  

  <label for="{{ fields.bic.id }}" class="col-md-5 col-form-label">BIC</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.bic.name }}" id="{{ fields.bic.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

{% endif %}  

```
```

{% if method == "Method1" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder1.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method2" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder2.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method3" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder3.png'); ?>" alt="{{ m.name }}"/>  

{# ... #}  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% if method == "Creditcard" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/creditcard.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "DirectDebit" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/directdebit.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Dummy" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/dummy.png'); ?>" alt="{{ m.name }}"/>  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% set forceFields = ["firstName", "lastName"] %}  

```
```

{% if m.apiIdentifier == 'DirectDebit' %}  

<div class="form-group row">  

  <label for="{{ fields.iban.id }}" class="col-md-5 col-form-label">IBAN</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.iban.name }}" id="{{ fields.iban.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

  <div class="form-group row">  

  <label for="{{ fields.bic.id }}" class="col-md-5 col-form-label">BIC</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.bic.name }}" id="{{ fields.bic.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

{% endif %}  

```
```

{% if method == "Method1" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder1.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method2" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder2.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method3" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder3.png'); ?>" alt="{{ m.name }}"/>  

{# ... #}  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% if method == "Creditcard" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/creditcard.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "DirectDebit" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/directdebit.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Dummy" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/dummy.png'); ?>" alt="{{ m.name }}"/>  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```![Customer Profile Options](https://documentation.ixopay.com/manual/assets/ideal-img/customer-profile-options.77c1926.1280.png)Customer Profile Options
  * [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector)
  * Payment Selection Template
```

{% set forceFields = ["firstName", "lastName"] %}  

```
```

{% if m.apiIdentifier == 'DirectDebit' %}  

<div class="form-group row">  

  <label for="{{ fields.iban.id }}" class="col-md-5 col-form-label">IBAN</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.iban.name }}" id="{{ fields.iban.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

  <div class="form-group row">  

  <label for="{{ fields.bic.id }}" class="col-md-5 col-form-label">BIC</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.bic.name }}" id="{{ fields.bic.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

{% endif %}  

```
```

{% if method == "Method1" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder1.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method2" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder2.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method3" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder3.png'); ?>" alt="{{ m.name }}"/>  

{# ... #}  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% if method == "Creditcard" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/creditcard.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "DirectDebit" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/directdebit.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Dummy" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/dummy.png'); ?>" alt="{{ m.name }}"/>  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```![Customer Profile Options](https://documentation.ixopay.com/manual/assets/ideal-img/customer-profile-options.77c1926.1280.png)Customer Profile Options
  * [Multi-Method Connector](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#multi-method-connector)
  * [Customize Payment Selection Template](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#customize-payment-selection-template)
    * [Coloring](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#coloring)
    * [Global mandatory fields](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#global-mandatory-fields)
    * [Defining payment method specific fields](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#defining-payment-method-specific-fields)
    * [Display payment methods](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#display-payment-methods)
  * [Customer Profiles](https://documentation.ixopay.com/manual/docs/connector/multi-method-connector/payment-selection-page#customer-profiles)
```

{% set forceFields = ["firstName", "lastName"] %}  

```
```

{% if m.apiIdentifier == 'DirectDebit' %}  

<div class="form-group row">  

  <label for="{{ fields.iban.id }}" class="col-md-5 col-form-label">IBAN</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.iban.name }}" id="{{ fields.iban.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

  <div class="form-group row">  

  <label for="{{ fields.bic.id }}" class="col-md-5 col-form-label">BIC</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.bic.name }}" id="{{ fields.bic.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

{% endif %}  

```
```

{% if method == "Method1" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder1.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method2" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder2.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method3" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder3.png'); ?>" alt="{{ m.name }}"/>  

{# ... #}  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% if method == "Creditcard" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/creditcard.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "DirectDebit" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/directdebit.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Dummy" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/dummy.png'); ?>" alt="{{ m.name }}"/>  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% set forceFields = ["firstName", "lastName"] %}  

```
```

{% if m.apiIdentifier == 'DirectDebit' %}  

<div class="form-group row">  

  <label for="{{ fields.iban.id }}" class="col-md-5 col-form-label">IBAN</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.iban.name }}" id="{{ fields.iban.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

  <div class="form-group row">  

  <label for="{{ fields.bic.id }}" class="col-md-5 col-form-label">BIC</label>  

  <div class="col-md-7">  

    <input type="text" name="{{ fields.bic.name }}" id="{{ fields.bic.id }}" class="form-control"/>  

  </div>  

  <span class="col-md-7 col-md-offset-5 error-block"></span>  

</div>  

{% endif %}  

```
```

{% if method == "Method1" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder1.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method2" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder2.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Method3" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/placeholder3.png'); ?>" alt="{{ m.name }}"/>  

{# ... #}  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```
```

{% if method == "Creditcard" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/creditcard.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "DirectDebit" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/directdebit.png'); ?>" alt="{{ m.name }}"/>  

{% elseif method == "Dummy" %}  

  <img src="<?= getStaticLink('/img/paymentmethods/dummy.png'); ?>" alt="{{ m.name }}"/>  

{% else %}  

  <h3>{{ m.name }}</h3>  

{% endif %}  

```![Customer Profile Options](https://documentation.ixopay.com/manual/assets/ideal-img/customer-profile-options.77c1926.1280.png)Customer Profile Options