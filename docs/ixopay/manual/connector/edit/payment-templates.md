---
title: Payment Templates
summary: ' Edit Connectorshttps://documentation.ixopay.com/manual/docs/connector/edit  Payment
  Templates'
tags:
- video-create-payment-templates-https-documentation-ixopay-com-manual-docs-connector-edit-payment-templates-video-create-payment-templates-direct-link-video-create-payment-templates
- https-documentation-ixopay-com-manual-docs-connector-edit-payment-templates-direct-link
- create-template-https-documentation-ixopay-com-manual-docs-connector-edit-payment-templates-create-template-direct-link-create-template
- edit-existing-template-https-documentation-ixopay-com-manual-docs-connector-edit-payment-templates-edit-existing-template-direct-link-edit-existing-template
- publish-templates-https-documentation-ixopay-com-manual-docs-connector-edit-payment-templates-publish-templates-direct-link-publish-templates
- delete-templates-https-documentation-ixopay-com-manual-docs-connector-edit-payment-templates-delete-templates-direct-link-delete-templates
- ixopay
source_url: https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates
portal: ixopay-manual
updated: '2026-05-25'
related: []
---

* [Connector](https://documentation.ixopay.com/manual/docs/connector)
  * [Edit Connectors](https://documentation.ixopay.com/manual/docs/connector/edit)
  * Payment Templates

# Payment Templates
## Video: Create New Payment Templates[​](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates#video-create-new-payment-templates "Direct link to Video: Create New Payment Templates")
![](https://documentation.ixopay.com/manual/assets/ideal-img/preview-vimeo-payment-templates.a0183a5.1300.png)
How to create and set up payment templates per Connector.
## How-To[​](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates#how-to "Direct link to How-To")
  1. Navigate to the **Connector Details Overview** (see Connector Overview)
  2. Click Edit on the Payment Templates section (see Payment Templates)

The **Payment Templates** section has two tabs: each of them contains existing page templates which are either **Adapter-wide** , or **Connector-specific**. Connector-specific templates are those, which are used solely for the Connector they were created on. Adapter-wide, on the other hand, means that the template will be used for every Connector that uses the same Adapter as the Connector where the template was created on. If a Connector has both, an Adapter template and a Connector-specific template, it will use the more specific one, i.e. the Connector template over the Adapter template.
In that example, we will create different templates for different languages DE, EN, ES (see Example Templates).
![Connector Overview](https://documentation.ixopay.com/manual/assets/ideal-img/connector-overview-payment-template.af7f0cf.1280.png)Connector Overview![Payment Templates](https://documentation.ixopay.com/manual/assets/ideal-img/payment-templates.9568360.1280.png)Payment Templates![Example Templates](https://documentation.ixopay.com/manual/assets/ideal-img/example-templates.01abe9c.914.png)Example Templates
## Create a new template[​](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates#create-a-new-template "Direct link to Create a new template")
To create a new template, simply follow these steps:
  * Click **Edit** in the Payment Templates section

A new button will appear which will let you add new templates (see Edit mode).
![Edit mode](https://documentation.ixopay.com/manual/assets/ideal-img/edit-mode.ee58c84.848.png)Edit mode
  * Click + **Add Template**
  * Select the **type** of template, **language** and whether you want to **prefill** the template (see Add template)
    * **Type** : Default = Adapter-wide. Connector specific = limited to current Connector
    * **Language** : Using our payment templates it is possible to create individual experiences for each language.
    * **Prefill template** : At the beginning there are no templates defined. However, it can be quick and easy to get started by using one of our default templates. While default templates are ready to be used, feel free to customize them after creation to create a seamless checkout experience for your customers. Prefilled templates are also a good reference on how a page could be structured.

For our example page, we will create a prefilled Adapter-wide template in different languages.
  * Click **+ Add**

![Add template](https://documentation.ixopay.com/manual/assets/ideal-img/add-template.1c814e3.1162.png)Add template
## Edit an existing template[​](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates#edit-an-existing-template "Direct link to Edit an existing template")
Once created, the new template is shown in the list (see Existing Templates). From the list, you can easily tell which language the template is used for, what the status is (modified or published), edit or preview the page.
To edit an existing template, simply follow these steps:
  * Click **Edit** in the Payment Templates section
  * Click the **orange Edit** button for the corresponding language template file

For details about Payment Templates please refer to the [Fast Editor Setup section](https://documentation.ixopay.com/manual/docs/fast).
![Existing templates](https://documentation.ixopay.com/manual/assets/ideal-img/existing-templates.d1bfa4c.848.png)Existing templates
## Publish templates[​](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates#publish-templates "Direct link to Publish templates")
Before a Payment Template can be used by the Connector, it first needs to be published in the Fast Editor.
  1. Navigate to the **Fast Editor**
  2. Select the **Publish** Section (see Fast Editor Publish)
  3. Click on **Publish Now**
  4. Enter a **Comment** to document the changes made (see Change Log)
  5. Click **Publish**

![Fast Editor Publish](https://documentation.ixopay.com/manual/assets/ideal-img/fast-editor-publish.1489d33.1280.png)Fast Editor Publish![Change Log](https://documentation.ixopay.com/manual/assets/ideal-img/change-log.bce3004.940.png)Change Log
note
During the publish step all changes will be published performed on templates in the structure regardless of the editor. Same is true for reverting of changes: all changes done after the the change that you want to revert will be lost.
## Delete templates[​](https://documentation.ixopay.com/manual/docs/connector/edit/payment-templates#delete-templates "Direct link to Delete templates")
If you want to delete a template you have to do so to the **FAST Editor** by deleting the file from the folder structure there. You can find the path by clicking the **Edit** button (see Existing templates) in the Payment Templates section of th e Connector Details Overview on the bottom of the editor (see File Path FAST Editor).
Find also the detailed path information in the [FAST Editor Setup section](https://documentation.ixopay.com/manual/docs/fast)
![File Path FAST Editor](https://documentation.ixopay.com/manual/assets/ideal-img/file-path-fast-editor.4af3662.1280.png)File Path FAST Editor
Find more information about the template creation and styling in the [Fast Editor section](https://documentation.ixopay.com/manual/docs/fast).