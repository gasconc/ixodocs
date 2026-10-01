---
title: JPMorgan ACH Direct Debit
summary: ' JPMorgan ACH Direct Debit'
tags:
- connector-configuration-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-connector-configuration-direct-link-connector-configuration
- authentication-oauth2-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-authentication-oauth2-direct-link-authentication-oauth2
- bank-account-details-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-bank-account-details-direct-link-bank-account-details
- required-jpmorgan-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-required-jpmorgan-direct-link-required-jpmorgan
- hosted-payment-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-hosted-payment-direct-link-hosted-payment
- payment-results-asynchronous-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-payment-results-asynchronous-direct-link-payment-results-asynchronous
- registration-recurring-collections-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-registration-recurring-collections-direct-link-registration-recurring-collections
- refunds-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-refunds-direct-link-refunds
- testing-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-testing-direct-link-testing
- api
source_url: https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit
portal: ixopay-manual
updated: '2026-10-01'
related: []
---

* JPMorgan ACH Direct Debit

# JPMorgan ACH Direct Debit
JPMorgan ACH Direct Debit lets you collect and refund low-value ACH direct debits in the US and Canada (USD, CAD) via JPMorgan's Treasury Payments API.
You can either submit the payer's bank details with the transaction, or let the payer enter them on a hosted payment page. There is no hosted-fields/payment.js widget.
## Connector configuration[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#connector-configuration "Direct link to Connector configuration")
Configure the following parameters for the Connector (see Connector Detail Overview - JPMorgan ACH Direct Debit):
  1. Fill in the mandatory **Client ID** (used as the connector Username)
  2. Fill in the **Client Secret** (used as the connector API Secret) — only required if **Use OAuth JWT Client Assertion** is disabled
  3. Select the mandatory **Environment** — Certification, Production
  4. Fill in the mandatory **Service Level Code**
  5. Fill in the mandatory **Local Instrument Code** — NACHA Standard Entry Class code, for example `CCD` for corporate or `PPD` for consumer collections
  6. Fill in the mandatory **Debtor Agent Country** — country of the payer's bank, `US` for US ACH
  7. Enable the optional **Collect Bank Details on Hosted Payment Form** to collect the payer's bank details on a hosted page instead of submitting them with the transaction
  8. Fill in the mandatory **Creditor Name**
  9. Fill in the optional **Creditor Postal Address Street Name** , **Postcode** , **Town Name** , **Country Sub Division** , **Country** , and **Address Line**
  10. Fill in the optional **Creditor Account Company Id** — JPMorgan ACH Company ID linked to the creditor bank account
  11. Fill in the mandatory **Creditor Account Currency Code**
  12. Fill in the mandatory **Creditor Account Number**
  13. Fill in the optional **Creditor Agent Name** and **Clearing System Code**
  14. Fill in the mandatory **Creditor Agent Country**
  15. Fill in the mandatory **Creditor Agent BIC**
  16. Fill in the optional **Creditor Agent ABA** and **Member Id**
  17. Select the **Signed Payload Content-Type** — `text/xml`, `application/jose` (default), or `application/json`
  18. Upload the mandatory **mTLS PrivateKey** and **mTLS Certificate** (PEM content) — required for the mutual-TLS connection to JPMorgan
  19. Upload the mandatory **Digital Signature Private Key** and **Digital Signature Certificate** (PEM content) — used to sign every request payload as a JWS
  20. Fill in the optional **Digital Signature Key ID**

![Connector Detail Overview - JPMorgan ACH Direct Debit](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-jpmorgan-ach-direct-debit.e2cc9a6.372.png)Connector Detail Overview - JPMorgan ACH Direct Debit
### Authentication (OAuth2)[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#authentication-oauth2 "Direct link to Authentication \(OAuth2\)")
JPMorgan ACH Direct Debit supports two OAuth2 flows, selected via **Use OAuth JWT Client Assertion** :
  * **JWT bearer client assertion (default)** — the connector signs its own client-assertion JWT. Provide **OAuth Private Key** (mandatory for this flow) and optionally **OAuth Key ID** , **OAuth Audience** , **OAuth Scope** , and **OAuth Token URL** (defaults to `https://login.jpmorgan.com/oauth2/token` if left blank).
  * **Client credentials** — set **Use OAuth JWT Client Assertion** to disabled and rely on **Client ID** / **Client Secret** directly. **OAuth Scope** and **OAuth Token URL** still apply if set.

## Bank account details[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#bank-account-details "Direct link to Bank account details")
Unlike some other adapters, the debtor's (customer's) bank account details are **not** taken from the customer profile's IBAN fields. Either submit them as `extraData` on the transaction, or collect them on the hosted payment page described below.  
| extraData key  | Description  |  
| --- | --- |  
| `psp:directDebitTransactionInformation.debtorAccount.accountNumber`  | Debtor bank account number (mandatory)  |  
| `psp:directDebitTransactionInformation.debtorAgent.financialInstitutionId.aba`  | Debtor bank routing/ABA number (mandatory)  |  
| `psp:directDebitTransactionInformation.debtorAccount.iban`  | Debtor IBAN, if used instead of/alongside an account number  |  
| `psp:directDebitTransactionInformation.debtorAccount.currency`  | Debtor account currency — falls back to the transaction currency if omitted  |  
| `psp:directDebitTransactionInformation.debtorAccount.type.code`  | Account type — checking or savings. Determines the NACHA transaction code, so send it whenever the account is not a checking account  |  
See the [API reference](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit) for the full field mapping, including mandate-related fields.
## Required by JPMorgan[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#required-by-jpmorgan "Direct link to Required by JPMorgan")
| Field  | Where it comes from  |  
| --- | --- |  
| Local instrument code (NACHA SEC)  |  **Local Instrument Code** connector setting  |  
| Country of the payer's bank  |  **Debtor Agent Country** connector setting  |  
| Country of the payer  |  `customer.billingCountry` on the transaction, or the Country field on the hosted page  |  
The first two are connector settings and need no per-transaction value. The third has no connector fallback — send `customer.billingCountry`, or enable the hosted payment page so the payer selects it.
## Hosted payment page[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#hosted-payment-page "Direct link to Hosted payment page")
Enable **Collect Bank Details on Hosted Payment Form** on the connector to let the payer enter their own bank details. Submit a debit or register without an account number and routing number, and the response returns a redirect URL. Send the payer there; once they submit, the payment continues and you receive the result as usual.
The page collects account holder name, account number, account type, routing number, collection date and country.
Anything you send with the transaction takes precedence. If you supply `customer.billingCountry`, for example, the payer's entry is ignored — so you can pre-fill what you already know and let the payer complete the rest.
## Payment results are asynchronous[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#payment-results-are-asynchronous "Direct link to Payment results are asynchronous")
Wait for that postback before treating an ACH debit as paid. A single notification from JPMorgan can carry updates for up to 50 payments.
## Registration & recurring collections[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#registration--recurring-collections "Direct link to Registration & recurring collections")
**Register** stores the bank account details submitted with the transaction so a later **Debit** can reuse them ("debit with register"). No verification or registration takes place with JPMorgan at this point. **Deregister** removes the stored details again.
## Refunds[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#refunds "Direct link to Refunds")
A refund is sent to JPMorgan as its own payment, with its own end-to-end identifier and its own execution date — it defaults to the current date, and you can set it with `extraData.psp:requestedCollectionDate`. Track refund-to-debit correlation via your own transaction references.
Full and partial refunds are both supported.
## Testing[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#testing "Direct link to Testing")
Enable **Testmode** on the connector to use JPMorgan's certification (QAF) environment instead of production. Refer to JPMorgan's own [ACH Direct Debits API documentation](https://developer.payments.jpmorgan.com/api/treasury/ach-transactions/low-value-ach-direct-debits#/operations/paymentInitiation) for sandbox credentials and test scenarios.