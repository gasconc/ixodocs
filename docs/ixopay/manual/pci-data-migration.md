---
title: PCI Data Migration
summary: ' PCI Data Migration'
tags:
- cardholder-data-import-https-documentation-ixopay-com-manual-docs-pci-data-migration-cardholder-data-import-direct-link-cardholder-data-import
- kickoff-https-documentation-ixopay-com-manual-docs-pci-data-migration-kickoff-direct-link-kickoff
- data-transfer-import-https-documentation-ixopay-com-manual-docs-pci-data-migration-data-transfer-import-direct-link-data-transfer-import
- result-https-documentation-ixopay-com-manual-docs-pci-data-migration-result-direct-link-result
- cardholder-data-export-https-documentation-ixopay-com-manual-docs-pci-data-migration-cardholder-data-export-direct-link-cardholder-data-export
- data-format-https-documentation-ixopay-com-manual-docs-pci-data-migration-data-format-direct-link-data-format
- public-encryption-key-https-documentation-ixopay-com-manual-docs-pci-data-migration-public-encryption-key-direct-link-public-encryption-key
- json
- pci
- pci-dss
source_url: https://documentation.ixopay.com/manual/docs/pci-data-migration
portal: ixopay-manual
updated: '2026-06-15'
related: []
---

* PCI Data Migration

# PCI Data Migration
note
In case you are interested in the PCI Data Migration please contact your Customer Success Manager or email our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support).
The [IXOPAY platform](https://www.ixopay.com) allows clients to import sensitive customer data into the IXOPAY platform PCI DSS level 1 compliant vault, as well as to export and transfer clients sensitive customer data to another payment processing provider if they ever need to leave.
  * Coming from another payment processor, see Cardholder Data Import section
  * Leaving the IXOPAY platform, see Cardholder Data Export section
  * [Get our public PGP Key for data transfers](https://www.ixopay.com/en/pci-data-migration)

Once you are ready, please contact your Customer Success Manager or our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support) with any questions or to schedule your migration.
## Cardholder Data Import[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#cardholder-data-import "Direct link to Cardholder Data Import")
We are happy to import your sensitive customer data from any other payment processor. Before initiation the process, you will need to get in touch with your current provider and request a data export to be transferred to [IXOPAY](https://www.ixopay.com) via a secure connection.
### Kickoff[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#kickoff "Direct link to Kickoff")
Your Customer Success Manager will clarify details about the Import with you (Amount of PAN information, expected timeline, supported import procedures, **data format** and more). Furthermore we need your and your current providers public encryption key as well as contact information of your current provider to provide the encrypted SFTP credentials for the actual data transfer.
### Data Transfer and Import[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#data-transfer-and-import "Direct link to Data Transfer and Import")
  * IXOPAY will send the encrypted SFTP credentials to your current provider for the data upload.
  * After you informed us about the successful data upload (encrypted with our public PGP Key), IXOPAY verifies the upload (incl. preliminary checks).
  * If the all checks are successful, IXOPAY will perform the data import.

### Result[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#result "Direct link to Result")
Once the import is successfully completed, IXOPAY will provide you with the result file (newline-delimited JSON) of the import, with each line containing the old and the new reference ID of one card. The result file will remain accessible for **365 days** from the date of creation.
Example
```

{ "newReferenceId": "abcdefghijklmnopqr", "oldReferenceId": "388333B", customerId: "AT-2938938" }  

{ "newReferenceId": "8291edi3ndidn393un", "oldReferenceId": "7837373", customerId: "DE-3838832" }  

```### Data Format[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#data-format "Direct link to Data Format")
To ensure a smooth import the data shall be provided in CSV or JSON with UTF-8 encoding. The provided data must follow the following conventions to avoid importing delays.
note
The encrypted file may not exceed the file size of 25 Megabytes. Please split the file into several chunks if it exceeds the file size limit.
  * **CSV:**
    * Text qualifier or encapsulation: none or `"`
    * Delimiter or field separator: `,` (comma) or `;` (semicolon)
    * A header column which identifies each field must be included.
  * **JSON:**
    * Newline-delimited JSON (one valid JSON per line) 
    * The Key of each field shall match the field names of the tables below, we don’t support nested JSON, data must be provided as String types only.

The following data fields can be imported during the data transfer processes. Please include the field name in the data migration file:
#### Required fields[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#required-fields "Direct link to Required fields")  
| Field name  | Description  | Example  |  
| --- | --- | --- |  
| `creditcard.number`  | The primary Account number (PAN) of the card  | `4111111111111111`  |  
| `creditcard.expiration_month`  | The Credit Card's expiration month in the format: M or MM  |  `06` (MM)  |  
| `creditcard.expiration_year`  | The Credit Card's expiration year (YYYY)  | `2031`  |  
| `reference_id`  | ID or token representing this card to the Merchant in the former processors system, ideally unique!  | 83389B  |  
#### Optional Fields[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#optional-fields "Direct link to Optional Fields")  
| Field name  | Description  | Example  |  
| --- | --- | --- |  
| `creditcard.cardholder_name`  | The cardholder name of the card (technically this is optional, but usually you will want to know the cardholder name)  | `Alex Smith`  |  
| `scheme_reference_id`  | Scheme transaction ID. E.g. Visa Transaction ID, Mastercard Trace ID, ... required to provide for MIT transactions.  | `480000000000`  |  
| `customer.identification`  | Any Identification representing the User or customer in your shop or ERP system (max. 36 characters, anything beyond is cut off)  | `616c6578-2e73-6d69-7468-406578616d70`  |  
| `customer.first_name`  | First name of the customer  | `Alex`  |  
| `customer.last_name`  | Last name of the customer.  | `Smith`  |  
| `customer.billing_address1`  | Street address line 1  | `123 Main St. Apt. 4B`  |  
| `customer.billing_address2`  | Street address line 2  | `Unit A`  |  
| `customer.billing_city`  | City  | `Anytown`  |  
| `customer.billing_postcode`  | Postal Code / Zip code  | `12345`  |  
| `customer.billing_state`  | State  | `AN`  |  
| `customer.billing_country`  | 2-letter country code  | `US`  |  
| `customer.billing_phone`  | Phone number  | `+1 1234567890`  |  
| `customer.company`  | The company associated with the billing address  | `Alex's Artisan Goods`  |  
| `customer.email`  | E-mail address of the customer  | `alex.smith@example.org`  |  
| `customer.ip_address`  | IP address of the customer  | `198.51.100.123`  |  
| `customer.national_id`  | The national ID (e.g. social insurance number) of the customer  | `COUNTRY-1234567-PLACEHOLDER`  |  
| `customer.gender`  | either M for male or F for female  | `M`  |  
note
Keep in mind that imported tokens might only be useable with a specific mandatory information (Scheme Reference ID, MID, Extra Data) on acquirer side. Furthermore the data export of your current provider might include expired cards (see also [Account Updater](https://documentation.ixopay.com/manual/docs/tokenization/account-updater)).
## Cardholder Data Export[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#cardholder-data-export "Direct link to Cardholder Data Export")
If you need to move your data to another payment Gateway, you will need to provide us with the attestation of their PCI-DSS compliance (AOC). Once we have that, we will request an encryption Key from the receiving service provider. We will then use the public Key to encrypt the sensitive data and transmit it via SFTP.
It is the responsibility of the receiving provider to protect their private Key file in accordance with PCI-DSS. We will verify the authenticity of the public Key before using it for encryption.
You must export your data from the IXOPAY platform with no more than two exports: one to export the bulk of customers and another to export any new customers created while your processing was switched over. We will not run any periodic exports for backup of failover — you will need to handle this on your side.
### Data Format[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#data-format-1 "Direct link to Data Format")
The export of your Transaction records will be a PGP-encrypted, UTF-8 encoded CSV file.
  * Each card will be on its own row, along with the corresponding customer and address information.
  * Text qualifier or encapsulation character: `"`
  * Delimiter or field separator: `,` (comma).
  * A header column is included, which identifies each of the following included field names:

  
| Field name  | Description  | Example  |  
| --- | --- | --- |  
| `uuid`  | The IXOPAY platform's unique transaction id assigned to this transaction  | `d94c0d72f3a36e21f16e`  |  
| `merchant_transaction_id`  | A merchant's unique id provided for this transaction  | `your-unique-identifier`  |  
| `merchant_guid`  | Merchant GUID the transaction belongs to  | `ME-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `connector_guid`  | Connector GUID the transaction was performed with  | `CO-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `created_at`  | UTC timestamp in the format YYYY-MM-DD hh:mm:ss  | `2026-06-10T11:25:52Z`  |  
| `scheme_reference_id`  | Scheme transaction ID. E.g. Visa Transaction ID, Mastercard Trace ID, ... required to provide for MIT transactions.  | `480000000000`  |  
| `creditcard.cardholder_name`  | The cardholder name of the card (technically this is optional, but usually you will want to know the cardholder name)  | `Alex Smith`  |  
| `creditcard.number`  | The primary Account number (PAN) of the card  | `4111111111111111`  |  
| `creditcard.expiration_month`  | The Credit Card's expiration month in the format: MM  |  `06` (MM)  |  
| `creditcard.expiration_year`  | The Credit Card's expiration year (YYYY)  | `2031`  |  
| `customer.identification`  | Any Identification representing the User or customer in your shop or ERP system  | `616c6578-2e73-6d69-7468-406578616d70`  |  
| `customer.first_name`  | First name of the customer  | `Alex`  |  
| `customer.last_name`  | Last name of the customer.  | `Smith`  |  
| `customer.billing_address1`  | Street address line 1  | `123 Main St. Apt. 4B`  |  
| `customer.billing_address2`  | Street address line 2  | `Unit A`  |  
| `customer.billing_city`  | City  | `Anytown`  |  
| `customer.billing_postcode`  | Postal Code / Zip code  | `12345`  |  
| `customer.billing_state`  | State  | `AN`  |  
| `customer.billing_country`  | 2-letter country code  | `US`  |  
| `customer.billing_phone`  | Phone number  | `+1 1234567890`  |  
| `customer.company`  | The company associated with the billing address  | `Alex's Artisan Goods`  |  
| `customer.email`  | E-mail address of the customer  | `alex.smith@example.org`  |  
| `customer.ip_address`  | IP address of the customer  | `198.51.100.123`  |  
| `customer.national_id`  | The national ID (e.g. social insurance number) of the customer  | `COUNTRY-1234567-PLACEHOLDER`  |  
| `customer.gender`  | either M for male or F for female  | `M`  |  
## Public Encryption Key[​](https://documentation.ixopay.com/manual/docs/pci-data-migration#public-encryption-key "Direct link to Public Encryption Key")
When we exchange sensitive customer data, all cardholder data needs to be sent in an encrypted way! Please use the following PGP encryption Key to encrypt all files: 
```

{ "newReferenceId": "abcdefghijklmnopqr", "oldReferenceId": "388333B", customerId: "AT-2938938" }  

{ "newReferenceId": "8291edi3ndidn393un", "oldReferenceId": "7837373", customerId: "DE-3838832" }  

```
```

{ "newReferenceId": "abcdefghijklmnopqr", "oldReferenceId": "388333B", customerId: "AT-2938938" }  

{ "newReferenceId": "8291edi3ndidn393un", "oldReferenceId": "7837373", customerId: "DE-3838832" }  

```  
| Field name  | Description  | Example  |  
| --- | --- | --- |  
| `uuid`  | The IXOPAY platform's unique transaction id assigned to this transaction  | `d94c0d72f3a36e21f16e`  |  
| `merchant_transaction_id`  | A merchant's unique id provided for this transaction  | `your-unique-identifier`  |  
| `merchant_guid`  | Merchant GUID the transaction belongs to  | `ME-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `connector_guid`  | Connector GUID the transaction was performed with  | `CO-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `created_at`  | UTC timestamp in the format YYYY-MM-DD hh:mm:ss  | `2026-06-10T11:25:52Z`  |  
| `scheme_reference_id`  | Scheme transaction ID. E.g. Visa Transaction ID, Mastercard Trace ID, ... required to provide for MIT transactions.  | `480000000000`  |  
| `creditcard.cardholder_name`  | The cardholder name of the card (technically this is optional, but usually you will want to know the cardholder name)  | `Alex Smith`  |  
| `creditcard.number`  | The primary Account number (PAN) of the card  | `4111111111111111`  |  
| `creditcard.expiration_month`  | The Credit Card's expiration month in the format: MM  |  `06` (MM)  |  
| `creditcard.expiration_year`  | The Credit Card's expiration year (YYYY)  | `2031`  |  
| `customer.identification`  | Any Identification representing the User or customer in your shop or ERP system  | `616c6578-2e73-6d69-7468-406578616d70`  |  
| `customer.first_name`  | First name of the customer  | `Alex`  |  
| `customer.last_name`  | Last name of the customer.  | `Smith`  |  
| `customer.billing_address1`  | Street address line 1  | `123 Main St. Apt. 4B`  |  
| `customer.billing_address2`  | Street address line 2  | `Unit A`  |  
| `customer.billing_city`  | City  | `Anytown`  |  
| `customer.billing_postcode`  | Postal Code / Zip code  | `12345`  |  
| `customer.billing_state`  | State  | `AN`  |  
| `customer.billing_country`  | 2-letter country code  | `US`  |  
| `customer.billing_phone`  | Phone number  | `+1 1234567890`  |  
| `customer.company`  | The company associated with the billing address  | `Alex's Artisan Goods`  |  
| `customer.email`  | E-mail address of the customer  | `alex.smith@example.org`  |  
| `customer.ip_address`  | IP address of the customer  | `198.51.100.123`  |  
| `customer.national_id`  | The national ID (e.g. social insurance number) of the customer  | `COUNTRY-1234567-PLACEHOLDER`  |  
| `customer.gender`  | either M for male or F for female  | `M`  |  
```

{ "newReferenceId": "abcdefghijklmnopqr", "oldReferenceId": "388333B", customerId: "AT-2938938" }  

{ "newReferenceId": "8291edi3ndidn393un", "oldReferenceId": "7837373", customerId: "DE-3838832" }  

```  
| Field name  | Description  | Example  |  
| --- | --- | --- |  
| `uuid`  | The IXOPAY platform's unique transaction id assigned to this transaction  | `d94c0d72f3a36e21f16e`  |  
| `merchant_transaction_id`  | A merchant's unique id provided for this transaction  | `your-unique-identifier`  |  
| `merchant_guid`  | Merchant GUID the transaction belongs to  | `ME-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `connector_guid`  | Connector GUID the transaction was performed with  | `CO-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `created_at`  | UTC timestamp in the format YYYY-MM-DD hh:mm:ss  | `2026-06-10T11:25:52Z`  |  
| `scheme_reference_id`  | Scheme transaction ID. E.g. Visa Transaction ID, Mastercard Trace ID, ... required to provide for MIT transactions.  | `480000000000`  |  
| `creditcard.cardholder_name`  | The cardholder name of the card (technically this is optional, but usually you will want to know the cardholder name)  | `Alex Smith`  |  
| `creditcard.number`  | The primary Account number (PAN) of the card  | `4111111111111111`  |  
| `creditcard.expiration_month`  | The Credit Card's expiration month in the format: MM  |  `06` (MM)  |  
| `creditcard.expiration_year`  | The Credit Card's expiration year (YYYY)  | `2031`  |  
| `customer.identification`  | Any Identification representing the User or customer in your shop or ERP system  | `616c6578-2e73-6d69-7468-406578616d70`  |  
| `customer.first_name`  | First name of the customer  | `Alex`  |  
| `customer.last_name`  | Last name of the customer.  | `Smith`  |  
| `customer.billing_address1`  | Street address line 1  | `123 Main St. Apt. 4B`  |  
| `customer.billing_address2`  | Street address line 2  | `Unit A`  |  
| `customer.billing_city`  | City  | `Anytown`  |  
| `customer.billing_postcode`  | Postal Code / Zip code  | `12345`  |  
| `customer.billing_state`  | State  | `AN`  |  
| `customer.billing_country`  | 2-letter country code  | `US`  |  
| `customer.billing_phone`  | Phone number  | `+1 1234567890`  |  
| `customer.company`  | The company associated with the billing address  | `Alex's Artisan Goods`  |  
| `customer.email`  | E-mail address of the customer  | `alex.smith@example.org`  |  
| `customer.ip_address`  | IP address of the customer  | `198.51.100.123`  |  
| `customer.national_id`  | The national ID (e.g. social insurance number) of the customer  | `COUNTRY-1234567-PLACEHOLDER`  |  
| `customer.gender`  | either M for male or F for female  | `M`  |  
```

{ "newReferenceId": "abcdefghijklmnopqr", "oldReferenceId": "388333B", customerId: "AT-2938938" }  

{ "newReferenceId": "8291edi3ndidn393un", "oldReferenceId": "7837373", customerId: "DE-3838832" }  

```
```

{ "newReferenceId": "abcdefghijklmnopqr", "oldReferenceId": "388333B", customerId: "AT-2938938" }  

{ "newReferenceId": "8291edi3ndidn393un", "oldReferenceId": "7837373", customerId: "DE-3838832" }  

```  
| Field name  | Description  | Example  |  
| --- | --- | --- |  
| `uuid`  | The IXOPAY platform's unique transaction id assigned to this transaction  | `d94c0d72f3a36e21f16e`  |  
| `merchant_transaction_id`  | A merchant's unique id provided for this transaction  | `your-unique-identifier`  |  
| `merchant_guid`  | Merchant GUID the transaction belongs to  | `ME-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `connector_guid`  | Connector GUID the transaction was performed with  | `CO-aaaa-bbbb-aaaa-bbbb-aaaa-bbbb`  |  
| `created_at`  | UTC timestamp in the format YYYY-MM-DD hh:mm:ss  | `2026-06-10T11:25:52Z`  |  
| `scheme_reference_id`  | Scheme transaction ID. E.g. Visa Transaction ID, Mastercard Trace ID, ... required to provide for MIT transactions.  | `480000000000`  |  
| `creditcard.cardholder_name`  | The cardholder name of the card (technically this is optional, but usually you will want to know the cardholder name)  | `Alex Smith`  |  
| `creditcard.number`  | The primary Account number (PAN) of the card  | `4111111111111111`  |  
| `creditcard.expiration_month`  | The Credit Card's expiration month in the format: MM  |  `06` (MM)  |  
| `creditcard.expiration_year`  | The Credit Card's expiration year (YYYY)  | `2031`  |  
| `customer.identification`  | Any Identification representing the User or customer in your shop or ERP system  | `616c6578-2e73-6d69-7468-406578616d70`  |  
| `customer.first_name`  | First name of the customer  | `Alex`  |  
| `customer.last_name`  | Last name of the customer.  | `Smith`  |  
| `customer.billing_address1`  | Street address line 1  | `123 Main St. Apt. 4B`  |  
| `customer.billing_address2`  | Street address line 2  | `Unit A`  |  
| `customer.billing_city`  | City  | `Anytown`  |  
| `customer.billing_postcode`  | Postal Code / Zip code  | `12345`  |  
| `customer.billing_state`  | State  | `AN`  |  
| `customer.billing_country`  | 2-letter country code  | `US`  |  
| `customer.billing_phone`  | Phone number  | `+1 1234567890`  |  
| `customer.company`  | The company associated with the billing address  | `Alex's Artisan Goods`  |  
| `customer.email`  | E-mail address of the customer  | `alex.smith@example.org`  |  
| `customer.ip_address`  | IP address of the customer  | `198.51.100.123`  |  
| `customer.national_id`  | The national ID (e.g. social insurance number) of the customer  | `COUNTRY-1234567-PLACEHOLDER`  |  
| `customer.gender`  | either M for male or F for female  | `M`  |