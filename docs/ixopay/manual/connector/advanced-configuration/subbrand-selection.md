---
title: Subbrand Selection
summary: ' Advanced Configurationhttps://documentation.ixopay.com/manual/docs/connector/advanced-configuration  Subbrand
  Selection'
tags:
- subbrand-selection-configuration-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-subbrand-selection-subbrand-selection-configuration-direct-link-subbrand-selection-configuration
- hosted-payment-hpp-configuration-subbrand-selection-https-documentation-ixopay-com-manual-docs-connector-advanced-configuration-subbrand-selection-hosted-payment-hpp-configuration-subbrand-selection-direct-link-hosted-payment-hpp-configuration-subbrand-selection
- ixopay
- hosted-payment-page
- hpp
- credit-card
source_url: https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection
portal: ixopay-manual
updated: '2026-05-11'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Advanced Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration)
  * Subbrand Selection

# Subbrand Selection
Requires additional setup
If you want to use this setting, please contact your the Customer Success Manager directly, or contact our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
## Subbrand Selection Configuration[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection#subbrand-selection-configuration "Direct link to Subbrand Selection Configuration")
In case a connector supports subbrand selection using [IXOPAY platform](https://www.ixopay.com)'s [Hosted Payment Pages](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates), you can enable the setting in the Connector Details Overview:
  * Navigate to the Connector Details Overview - Settings
  * Type in **Enable Card Subbrand Selection** and click **+ Add**
  * Enter **1** to activate the setting

![Connector Details Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-subbrand-selection.6aa905a.1280.png)Connector Details Overview
## Hosted Payment Page (HPP) Configuration for subbrand selection[​](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection#hosted-payment-page-hpp-configuration-for-subbrand-selection "Direct link to Hosted Payment Page \(HPP\) Configuration for subbrand selection")
To use the subbrand Selection for the IXOPAY platform Hosted Payment Pages (HPP), a Connector that supports subbrand selection needs to be configured as described above. To activate the subbrand selection in the IXOPAY platform HPP the following code snippets need to be added to your payment templates via the FAST Editor.
```

<style>  

  .card-holder-container {  

   position: relative;  

    width: 100%;  

    max-width: 220px;  

    margin-right: 10px;  

  }  

  .card-select-container {  

    display: none;  

    position: absolute;  

    top: calc(100% + 2px);  

    left: 0;  

    right: 0;  

    padding: 5px;  

    border: 1px solid var(--border-color);  

    background: #f9f9f9;  

    border-radius: var(--border-radius);  

    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);  

  }  

  .card-select-radio-element {  

    text-transform: uppercase;  

    height: 32px;  

    border-radius: var(--border-radius);  

    display: flex !important;  

    padding: 5px 10px;  

    align-items: center;  

    cursor: pointer;  

    width: auto !important;  

    font-size: 12px;  

  }  

  .card-select-radio-element img {  

    width: 25px;  

    height: auto;  

    margin-right: 10px;  

    display: block;  

  }  

  .selected-card-info {  

    position: absolute;  

    right: 10px;  

    top: 5px;  

    align-items: center;  

    height: 22px;  

    cursor: pointer;  

    display: none;  

  }  

  .selected-card-info img {  

    width: 25px;  

    height: auto;  

    display: block;  

    margin-left: 5px;  

    display: none;  

  }  

  .card-select-radio {  

    display: none;  

  }  

  .card-select-radio:checked + .card-select-radio-element {  

    background: var(--primary-color);  

    color: #fff;  

  }  

</style>  

<?php  

  $availableCards = [  

    ['key' => 'cb', 'img' => getStaticLink('/img/cb.png')],  

    ['key' => 'mastercard', 'img' => getStaticLink('/img/mastercard.svg')],  

    ['key' => 'visa', 'img' => getStaticLink('/img/visa.png')],  

  ]  

?>  

```  * **replace the creditcard number container`div` with this**
```

<div class="form-group-body" style="display: flex; align-items: center">  

  <div class="card-holder-container">  

    <div id="{{ fields.creditcard_number.id }}" class="form-control" style="padding-right: 60px;"></div>  

    <div class="selected-card-info">  

      <svg style="width: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>  

      <?php foreach($availableCards as $card): ?>  

          <img id="<?= $card['key'] ?>-selected-card" src="<?= $card['img'] ?>" />  

      <?php endforeach; ?>  

    </div>  

    <div class="card-select-container">  

      <?php foreach($availableCards as $card): ?>  

        <div id="<?= $card['key'] ?>-select-container">  

          <input type="radio" name="creditcard_subbrand" value="<?= $card['key'] ?>" id="<?= $card['key'] ?>-card-select" class="card-select-radio" />  

          <label for="<?= $card['key'] ?>-card-select" class="card-select-radio-element">  

            <img src="<?= $card['img'] ?>" />  

            <div class="card-select-text"><?= $card['key'] ?></div>  

          </label>  

        </div>  

      <?php endforeach; ?>  

    </div>  

  </div>  

  <svg style="height: 25px; fill: #333;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>  

</div>  

```  * **js script part add (before clear input style)**
```

$(document).on("click", function (e) {  

  var container = $(".card-holder-container");  

  if (!container.is(e.target) && container.has(e.target).length === 0) {  

    $(".card-select-container").hide();  

  }  

});  

$(".selected-card-info").on("click", function (evtData) {  

  $(".card-select-container").toggle();  

});  

var showBrandSelects = function (keys) {  

  $(".card-select-container > div").hide();  

  $.each(keys, function (key, value) {  

    $("#" + value.toLowerCase() + "-select-container").show();  

  });  

};  

var selectSubBrand = function (key) {  

  $(".selected-card-info").css("display", "flex");  

  $(".selected-card-info img").hide();  

  $("#" + key + "-selected-card").show();  

  $('[name="creditcard_subbrand"][value="' + key + '"]').prop("checked", true);  

};  

$('[name="creditcard_subbrand"]').on("change", function () {  

  var key = $('[name="creditcard_subbrand"]:checked').val();  

  selectSubBrand(key);  

  $(".card-select-container").hide();  

});  

Ixopay.PaymentFormV2.numberOn("input", function (evtData) {  

  console.log(evtData);  

  if (evtData.sub_brand) {  

    // we have a sub_brand  

    // display two options, data.card_type + data.sub_brand  

    showBrandSelects([evtData.card_type, evtData.sub_brand]);  

    selectSubBrand(evtData.sub_brand.toLowerCase());  

  } else {  

    // no sub_brand, dont show the brandselection  

    $(".selected-card-info").hide();  

  }  

});  

```
```

<style>  

  .card-holder-container {  

   position: relative;  

    width: 100%;  

    max-width: 220px;  

    margin-right: 10px;  

  }  

  .card-select-container {  

    display: none;  

    position: absolute;  

    top: calc(100% + 2px);  

    left: 0;  

    right: 0;  

    padding: 5px;  

    border: 1px solid var(--border-color);  

    background: #f9f9f9;  

    border-radius: var(--border-radius);  

    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);  

  }  

  .card-select-radio-element {  

    text-transform: uppercase;  

    height: 32px;  

    border-radius: var(--border-radius);  

    display: flex !important;  

    padding: 5px 10px;  

    align-items: center;  

    cursor: pointer;  

    width: auto !important;  

    font-size: 12px;  

  }  

  .card-select-radio-element img {  

    width: 25px;  

    height: auto;  

    margin-right: 10px;  

    display: block;  

  }  

  .selected-card-info {  

    position: absolute;  

    right: 10px;  

    top: 5px;  

    align-items: center;  

    height: 22px;  

    cursor: pointer;  

    display: none;  

  }  

  .selected-card-info img {  

    width: 25px;  

    height: auto;  

    display: block;  

    margin-left: 5px;  

    display: none;  

  }  

  .card-select-radio {  

    display: none;  

  }  

  .card-select-radio:checked + .card-select-radio-element {  

    background: var(--primary-color);  

    color: #fff;  

  }  

</style>  

<?php  

  $availableCards = [  

    ['key' => 'cb', 'img' => getStaticLink('/img/cb.png')],  

    ['key' => 'mastercard', 'img' => getStaticLink('/img/mastercard.svg')],  

    ['key' => 'visa', 'img' => getStaticLink('/img/visa.png')],  

  ]  

?>  

```
```

<div class="form-group-body" style="display: flex; align-items: center">  

  <div class="card-holder-container">  

    <div id="{{ fields.creditcard_number.id }}" class="form-control" style="padding-right: 60px;"></div>  

    <div class="selected-card-info">  

      <svg style="width: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>  

      <?php foreach($availableCards as $card): ?>  

          <img id="<?= $card['key'] ?>-selected-card" src="<?= $card['img'] ?>" />  

      <?php endforeach; ?>  

    </div>  

    <div class="card-select-container">  

      <?php foreach($availableCards as $card): ?>  

        <div id="<?= $card['key'] ?>-select-container">  

          <input type="radio" name="creditcard_subbrand" value="<?= $card['key'] ?>" id="<?= $card['key'] ?>-card-select" class="card-select-radio" />  

          <label for="<?= $card['key'] ?>-card-select" class="card-select-radio-element">  

            <img src="<?= $card['img'] ?>" />  

            <div class="card-select-text"><?= $card['key'] ?></div>  

          </label>  

        </div>  

      <?php endforeach; ?>  

    </div>  

  </div>  

  <svg style="height: 25px; fill: #333;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>  

</div>  

```
```

$(document).on("click", function (e) {  

  var container = $(".card-holder-container");  

  if (!container.is(e.target) && container.has(e.target).length === 0) {  

    $(".card-select-container").hide();  

  }  

});  

$(".selected-card-info").on("click", function (evtData) {  

  $(".card-select-container").toggle();  

});  

var showBrandSelects = function (keys) {  

  $(".card-select-container > div").hide();  

  $.each(keys, function (key, value) {  

    $("#" + value.toLowerCase() + "-select-container").show();  

  });  

};  

var selectSubBrand = function (key) {  

  $(".selected-card-info").css("display", "flex");  

  $(".selected-card-info img").hide();  

  $("#" + key + "-selected-card").show();  

  $('[name="creditcard_subbrand"][value="' + key + '"]').prop("checked", true);  

};  

$('[name="creditcard_subbrand"]').on("change", function () {  

  var key = $('[name="creditcard_subbrand"]:checked').val();  

  selectSubBrand(key);  

  $(".card-select-container").hide();  

});  

Ixopay.PaymentFormV2.numberOn("input", function (evtData) {  

  console.log(evtData);  

  if (evtData.sub_brand) {  

    // we have a sub_brand  

    // display two options, data.card_type + data.sub_brand  

    showBrandSelects([evtData.card_type, evtData.sub_brand]);  

    selectSubBrand(evtData.sub_brand.toLowerCase());  

  } else {  

    // no sub_brand, dont show the brandselection  

    $(".selected-card-info").hide();  

  }  

});  

```
```

<style>  

  .card-holder-container {  

   position: relative;  

    width: 100%;  

    max-width: 220px;  

    margin-right: 10px;  

  }  

  .card-select-container {  

    display: none;  

    position: absolute;  

    top: calc(100% + 2px);  

    left: 0;  

    right: 0;  

    padding: 5px;  

    border: 1px solid var(--border-color);  

    background: #f9f9f9;  

    border-radius: var(--border-radius);  

    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);  

  }  

  .card-select-radio-element {  

    text-transform: uppercase;  

    height: 32px;  

    border-radius: var(--border-radius);  

    display: flex !important;  

    padding: 5px 10px;  

    align-items: center;  

    cursor: pointer;  

    width: auto !important;  

    font-size: 12px;  

  }  

  .card-select-radio-element img {  

    width: 25px;  

    height: auto;  

    margin-right: 10px;  

    display: block;  

  }  

  .selected-card-info {  

    position: absolute;  

    right: 10px;  

    top: 5px;  

    align-items: center;  

    height: 22px;  

    cursor: pointer;  

    display: none;  

  }  

  .selected-card-info img {  

    width: 25px;  

    height: auto;  

    display: block;  

    margin-left: 5px;  

    display: none;  

  }  

  .card-select-radio {  

    display: none;  

  }  

  .card-select-radio:checked + .card-select-radio-element {  

    background: var(--primary-color);  

    color: #fff;  

  }  

</style>  

<?php  

  $availableCards = [  

    ['key' => 'cb', 'img' => getStaticLink('/img/cb.png')],  

    ['key' => 'mastercard', 'img' => getStaticLink('/img/mastercard.svg')],  

    ['key' => 'visa', 'img' => getStaticLink('/img/visa.png')],  

  ]  

?>  

```
```

<div class="form-group-body" style="display: flex; align-items: center">  

  <div class="card-holder-container">  

    <div id="{{ fields.creditcard_number.id }}" class="form-control" style="padding-right: 60px;"></div>  

    <div class="selected-card-info">  

      <svg style="width: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>  

      <?php foreach($availableCards as $card): ?>  

          <img id="<?= $card['key'] ?>-selected-card" src="<?= $card['img'] ?>" />  

      <?php endforeach; ?>  

    </div>  

    <div class="card-select-container">  

      <?php foreach($availableCards as $card): ?>  

        <div id="<?= $card['key'] ?>-select-container">  

          <input type="radio" name="creditcard_subbrand" value="<?= $card['key'] ?>" id="<?= $card['key'] ?>-card-select" class="card-select-radio" />  

          <label for="<?= $card['key'] ?>-card-select" class="card-select-radio-element">  

            <img src="<?= $card['img'] ?>" />  

            <div class="card-select-text"><?= $card['key'] ?></div>  

          </label>  

        </div>  

      <?php endforeach; ?>  

    </div>  

  </div>  

  <svg style="height: 25px; fill: #333;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>  

</div>  

```
```

$(document).on("click", function (e) {  

  var container = $(".card-holder-container");  

  if (!container.is(e.target) && container.has(e.target).length === 0) {  

    $(".card-select-container").hide();  

  }  

});  

$(".selected-card-info").on("click", function (evtData) {  

  $(".card-select-container").toggle();  

});  

var showBrandSelects = function (keys) {  

  $(".card-select-container > div").hide();  

  $.each(keys, function (key, value) {  

    $("#" + value.toLowerCase() + "-select-container").show();  

  });  

};  

var selectSubBrand = function (key) {  

  $(".selected-card-info").css("display", "flex");  

  $(".selected-card-info img").hide();  

  $("#" + key + "-selected-card").show();  

  $('[name="creditcard_subbrand"][value="' + key + '"]').prop("checked", true);  

};  

$('[name="creditcard_subbrand"]').on("change", function () {  

  var key = $('[name="creditcard_subbrand"]:checked').val();  

  selectSubBrand(key);  

  $(".card-select-container").hide();  

});  

Ixopay.PaymentFormV2.numberOn("input", function (evtData) {  

  console.log(evtData);  

  if (evtData.sub_brand) {  

    // we have a sub_brand  

    // display two options, data.card_type + data.sub_brand  

    showBrandSelects([evtData.card_type, evtData.sub_brand]);  

    selectSubBrand(evtData.sub_brand.toLowerCase());  

  } else {  

    // no sub_brand, dont show the brandselection  

    $(".selected-card-info").hide();  

  }  

});  

```
```

<style>  

  .card-holder-container {  

   position: relative;  

    width: 100%;  

    max-width: 220px;  

    margin-right: 10px;  

  }  

  .card-select-container {  

    display: none;  

    position: absolute;  

    top: calc(100% + 2px);  

    left: 0;  

    right: 0;  

    padding: 5px;  

    border: 1px solid var(--border-color);  

    background: #f9f9f9;  

    border-radius: var(--border-radius);  

    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);  

  }  

  .card-select-radio-element {  

    text-transform: uppercase;  

    height: 32px;  

    border-radius: var(--border-radius);  

    display: flex !important;  

    padding: 5px 10px;  

    align-items: center;  

    cursor: pointer;  

    width: auto !important;  

    font-size: 12px;  

  }  

  .card-select-radio-element img {  

    width: 25px;  

    height: auto;  

    margin-right: 10px;  

    display: block;  

  }  

  .selected-card-info {  

    position: absolute;  

    right: 10px;  

    top: 5px;  

    align-items: center;  

    height: 22px;  

    cursor: pointer;  

    display: none;  

  }  

  .selected-card-info img {  

    width: 25px;  

    height: auto;  

    display: block;  

    margin-left: 5px;  

    display: none;  

  }  

  .card-select-radio {  

    display: none;  

  }  

  .card-select-radio:checked + .card-select-radio-element {  

    background: var(--primary-color);  

    color: #fff;  

  }  

</style>  

<?php  

  $availableCards = [  

    ['key' => 'cb', 'img' => getStaticLink('/img/cb.png')],  

    ['key' => 'mastercard', 'img' => getStaticLink('/img/mastercard.svg')],  

    ['key' => 'visa', 'img' => getStaticLink('/img/visa.png')],  

  ]  

?>  

```
```

<div class="form-group-body" style="display: flex; align-items: center">  

  <div class="card-holder-container">  

    <div id="{{ fields.creditcard_number.id }}" class="form-control" style="padding-right: 60px;"></div>  

    <div class="selected-card-info">  

      <svg style="width: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>  

      <?php foreach($availableCards as $card): ?>  

          <img id="<?= $card['key'] ?>-selected-card" src="<?= $card['img'] ?>" />  

      <?php endforeach; ?>  

    </div>  

    <div class="card-select-container">  

      <?php foreach($availableCards as $card): ?>  

        <div id="<?= $card['key'] ?>-select-container">  

          <input type="radio" name="creditcard_subbrand" value="<?= $card['key'] ?>" id="<?= $card['key'] ?>-card-select" class="card-select-radio" />  

          <label for="<?= $card['key'] ?>-card-select" class="card-select-radio-element">  

            <img src="<?= $card['img'] ?>" />  

            <div class="card-select-text"><?= $card['key'] ?></div>  

          </label>  

        </div>  

      <?php endforeach; ?>  

    </div>  

  </div>  

  <svg style="height: 25px; fill: #333;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>  

</div>  

```
```

$(document).on("click", function (e) {  

  var container = $(".card-holder-container");  

  if (!container.is(e.target) && container.has(e.target).length === 0) {  

    $(".card-select-container").hide();  

  }  

});  

$(".selected-card-info").on("click", function (evtData) {  

  $(".card-select-container").toggle();  

});  

var showBrandSelects = function (keys) {  

  $(".card-select-container > div").hide();  

  $.each(keys, function (key, value) {  

    $("#" + value.toLowerCase() + "-select-container").show();  

  });  

};  

var selectSubBrand = function (key) {  

  $(".selected-card-info").css("display", "flex");  

  $(".selected-card-info img").hide();  

  $("#" + key + "-selected-card").show();  

  $('[name="creditcard_subbrand"][value="' + key + '"]').prop("checked", true);  

};  

$('[name="creditcard_subbrand"]').on("change", function () {  

  var key = $('[name="creditcard_subbrand"]:checked').val();  

  selectSubBrand(key);  

  $(".card-select-container").hide();  

});  

Ixopay.PaymentFormV2.numberOn("input", function (evtData) {  

  console.log(evtData);  

  if (evtData.sub_brand) {  

    // we have a sub_brand  

    // display two options, data.card_type + data.sub_brand  

    showBrandSelects([evtData.card_type, evtData.sub_brand]);  

    selectSubBrand(evtData.sub_brand.toLowerCase());  

  } else {  

    // no sub_brand, dont show the brandselection  

    $(".selected-card-info").hide();  

  }  

});  

```  * [Subbrand Selection Configuration](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection#subbrand-selection-configuration)
  * [Hosted Payment Page (HPP) Configuration for subbrand selection](https://documentation.ixopay.com/manual/docs/connector/advanced-configuration/subbrand-selection#hosted-payment-page-hpp-configuration-for-subbrand-selection)
```

<style>  

  .card-holder-container {  

   position: relative;  

    width: 100%;  

    max-width: 220px;  

    margin-right: 10px;  

  }  

  .card-select-container {  

    display: none;  

    position: absolute;  

    top: calc(100% + 2px);  

    left: 0;  

    right: 0;  

    padding: 5px;  

    border: 1px solid var(--border-color);  

    background: #f9f9f9;  

    border-radius: var(--border-radius);  

    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);  

  }  

  .card-select-radio-element {  

    text-transform: uppercase;  

    height: 32px;  

    border-radius: var(--border-radius);  

    display: flex !important;  

    padding: 5px 10px;  

    align-items: center;  

    cursor: pointer;  

    width: auto !important;  

    font-size: 12px;  

  }  

  .card-select-radio-element img {  

    width: 25px;  

    height: auto;  

    margin-right: 10px;  

    display: block;  

  }  

  .selected-card-info {  

    position: absolute;  

    right: 10px;  

    top: 5px;  

    align-items: center;  

    height: 22px;  

    cursor: pointer;  

    display: none;  

  }  

  .selected-card-info img {  

    width: 25px;  

    height: auto;  

    display: block;  

    margin-left: 5px;  

    display: none;  

  }  

  .card-select-radio {  

    display: none;  

  }  

  .card-select-radio:checked + .card-select-radio-element {  

    background: var(--primary-color);  

    color: #fff;  

  }  

</style>  

<?php  

  $availableCards = [  

    ['key' => 'cb', 'img' => getStaticLink('/img/cb.png')],  

    ['key' => 'mastercard', 'img' => getStaticLink('/img/mastercard.svg')],  

    ['key' => 'visa', 'img' => getStaticLink('/img/visa.png')],  

  ]  

?>  

```
```

<div class="form-group-body" style="display: flex; align-items: center">  

  <div class="card-holder-container">  

    <div id="{{ fields.creditcard_number.id }}" class="form-control" style="padding-right: 60px;"></div>  

    <div class="selected-card-info">  

      <svg style="width: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>  

      <?php foreach($availableCards as $card): ?>  

          <img id="<?= $card['key'] ?>-selected-card" src="<?= $card['img'] ?>" />  

      <?php endforeach; ?>  

    </div>  

    <div class="card-select-container">  

      <?php foreach($availableCards as $card): ?>  

        <div id="<?= $card['key'] ?>-select-container">  

          <input type="radio" name="creditcard_subbrand" value="<?= $card['key'] ?>" id="<?= $card['key'] ?>-card-select" class="card-select-radio" />  

          <label for="<?= $card['key'] ?>-card-select" class="card-select-radio-element">  

            <img src="<?= $card['img'] ?>" />  

            <div class="card-select-text"><?= $card['key'] ?></div>  

          </label>  

        </div>  

      <?php endforeach; ?>  

    </div>  

  </div>  

  <svg style="height: 25px; fill: #333;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>  

</div>  

```
```

$(document).on("click", function (e) {  

  var container = $(".card-holder-container");  

  if (!container.is(e.target) && container.has(e.target).length === 0) {  

    $(".card-select-container").hide();  

  }  

});  

$(".selected-card-info").on("click", function (evtData) {  

  $(".card-select-container").toggle();  

});  

var showBrandSelects = function (keys) {  

  $(".card-select-container > div").hide();  

  $.each(keys, function (key, value) {  

    $("#" + value.toLowerCase() + "-select-container").show();  

  });  

};  

var selectSubBrand = function (key) {  

  $(".selected-card-info").css("display", "flex");  

  $(".selected-card-info img").hide();  

  $("#" + key + "-selected-card").show();  

  $('[name="creditcard_subbrand"][value="' + key + '"]').prop("checked", true);  

};  

$('[name="creditcard_subbrand"]').on("change", function () {  

  var key = $('[name="creditcard_subbrand"]:checked').val();  

  selectSubBrand(key);  

  $(".card-select-container").hide();  

});  

Ixopay.PaymentFormV2.numberOn("input", function (evtData) {  

  console.log(evtData);  

  if (evtData.sub_brand) {  

    // we have a sub_brand  

    // display two options, data.card_type + data.sub_brand  

    showBrandSelects([evtData.card_type, evtData.sub_brand]);  

    selectSubBrand(evtData.sub_brand.toLowerCase());  

  } else {  

    // no sub_brand, dont show the brandselection  

    $(".selected-card-info").hide();  

  }  

});  

```
```

<style>  

  .card-holder-container {  

   position: relative;  

    width: 100%;  

    max-width: 220px;  

    margin-right: 10px;  

  }  

  .card-select-container {  

    display: none;  

    position: absolute;  

    top: calc(100% + 2px);  

    left: 0;  

    right: 0;  

    padding: 5px;  

    border: 1px solid var(--border-color);  

    background: #f9f9f9;  

    border-radius: var(--border-radius);  

    box-shadow: 0 3px 5px rgba(0, 0, 0, .2);  

  }  

  .card-select-radio-element {  

    text-transform: uppercase;  

    height: 32px;  

    border-radius: var(--border-radius);  

    display: flex !important;  

    padding: 5px 10px;  

    align-items: center;  

    cursor: pointer;  

    width: auto !important;  

    font-size: 12px;  

  }  

  .card-select-radio-element img {  

    width: 25px;  

    height: auto;  

    margin-right: 10px;  

    display: block;  

  }  

  .selected-card-info {  

    position: absolute;  

    right: 10px;  

    top: 5px;  

    align-items: center;  

    height: 22px;  

    cursor: pointer;  

    display: none;  

  }  

  .selected-card-info img {  

    width: 25px;  

    height: auto;  

    display: block;  

    margin-left: 5px;  

    display: none;  

  }  

  .card-select-radio {  

    display: none;  

  }  

  .card-select-radio:checked + .card-select-radio-element {  

    background: var(--primary-color);  

    color: #fff;  

  }  

</style>  

<?php  

  $availableCards = [  

    ['key' => 'cb', 'img' => getStaticLink('/img/cb.png')],  

    ['key' => 'mastercard', 'img' => getStaticLink('/img/mastercard.svg')],  

    ['key' => 'visa', 'img' => getStaticLink('/img/visa.png')],  

  ]  

?>  

```
```

<div class="form-group-body" style="display: flex; align-items: center">  

  <div class="card-holder-container">  

    <div id="{{ fields.creditcard_number.id }}" class="form-control" style="padding-right: 60px;"></div>  

    <div class="selected-card-info">  

      <svg style="width: 10px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>  

      <?php foreach($availableCards as $card): ?>  

          <img id="<?= $card['key'] ?>-selected-card" src="<?= $card['img'] ?>" />  

      <?php endforeach; ?>  

    </div>  

    <div class="card-select-container">  

      <?php foreach($availableCards as $card): ?>  

        <div id="<?= $card['key'] ?>-select-container">  

          <input type="radio" name="creditcard_subbrand" value="<?= $card['key'] ?>" id="<?= $card['key'] ?>-card-select" class="card-select-radio" />  

          <label for="<?= $card['key'] ?>-card-select" class="card-select-radio-element">  

            <img src="<?= $card['img'] ?>" />  

            <div class="card-select-text"><?= $card['key'] ?></div>  

          </label>  

        </div>  

      <?php endforeach; ?>  

    </div>  

  </div>  

  <svg style="height: 25px; fill: #333;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>  

</div>  

```
```

$(document).on("click", function (e) {  

  var container = $(".card-holder-container");  

  if (!container.is(e.target) && container.has(e.target).length === 0) {  

    $(".card-select-container").hide();  

  }  

});  

$(".selected-card-info").on("click", function (evtData) {  

  $(".card-select-container").toggle();  

});  

var showBrandSelects = function (keys) {  

  $(".card-select-container > div").hide();  

  $.each(keys, function (key, value) {  

    $("#" + value.toLowerCase() + "-select-container").show();  

  });  

};  

var selectSubBrand = function (key) {  

  $(".selected-card-info").css("display", "flex");  

  $(".selected-card-info img").hide();  

  $("#" + key + "-selected-card").show();  

  $('[name="creditcard_subbrand"][value="' + key + '"]').prop("checked", true);  

};  

$('[name="creditcard_subbrand"]').on("change", function () {  

  var key = $('[name="creditcard_subbrand"]:checked').val();  

  selectSubBrand(key);  

  $(".card-select-container").hide();  

});  

Ixopay.PaymentFormV2.numberOn("input", function (evtData) {  

  console.log(evtData);  

  if (evtData.sub_brand) {  

    // we have a sub_brand  

    // display two options, data.card_type + data.sub_brand  

    showBrandSelects([evtData.card_type, evtData.sub_brand]);  

    selectSubBrand(evtData.sub_brand.toLowerCase());  

  } else {  

    // no sub_brand, dont show the brandselection  

    $(".selected-card-info").hide();  

  }  

});  

```