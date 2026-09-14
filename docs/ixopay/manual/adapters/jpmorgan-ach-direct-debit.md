---
title: JPMorgan ACH Direct Debit
summary: ' JPMorgan ACH Direct Debit'
tags:
- connector-configuration-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-connector-configuration-direct-link-connector-configuration
- authentication-oauth2-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-authentication-oauth2-direct-link-authentication-oauth2
- bank-account-details-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-bank-account-details-direct-link-bank-account-details
- registration-recurring-collections-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-registration-recurring-collections-direct-link-registration-recurring-collections
- refunds-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-refunds-direct-link-refunds
- testing-https-documentation-ixopay-com-manual-adapters-jpmorgan-ach-direct-debit-testing-direct-link-testing
- api
- json
- xml
- oauth
source_url: https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit
portal: ixopay-manual
updated: '2026-09-14'
related: []
---

* JPMorgan ACH Direct Debit

# JPMorgan ACH Direct Debit
JPMorgan ACH Direct Debit lets you collect and refund low-value ACH direct debits in the US and Canada (USD, CAD) via JPMorgan's Treasury Payments API. The connector is server-to-server only — there is no hosted-fields/payment.js widget.
## Connector configuration[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#connector-configuration "Direct link to Connector configuration")
Configure the following parameters for the Connector (see Connector Detail Overview - JPMorgan ACH Direct Debit):
  1. Fill in the mandatory **Client ID** (used as the connector Username)
  2. Fill in the **Client Secret** (used as the connector API Secret) — only required if **Use OAuth JWT Client Assertion** is disabled
  3. Select the mandatory **Environment** — Certification, Production
  4. Fill in the mandatory **Requested Collection Date** — default ACH collection date used when not overridden per transaction
  5. Fill in the mandatory **Service Level Code**
  6. Fill in the mandatory **Creditor Name**
  7. Fill in the optional **Creditor Postal Address Street Name** , **Postcode** , **Town Name** , **Country Sub Division** , **Country** , and **Address Line**
  8. Fill in the optional **Creditor Account Company Id** — JPMorgan ACH Company ID linked to the creditor bank account
  9. Fill in the mandatory **Creditor Account Currency Code**
  10. Fill in the mandatory **Creditor Account Number**
  11. Fill in the optional **Creditor Agent Name** and **Clearing System Code**
  12. Fill in the mandatory **Creditor Agent Country**
  13. Fill in the mandatory **Creditor Agent BIC**
  14. Fill in the optional **Creditor Agent ABA** and **Member Id**
  15. Select the **Signed Payload Content-Type** — `text/xml`, `application/jose` (default), or `application/json`
  16. Upload the mandatory **mTLS PrivateKey** and **mTLS Certificate** (PEM content) — required for the mutual-TLS connection to JPMorgan
  17. Upload the mandatory **Digital Signature Private Key** and **Digital Signature Certificate** (PEM content) — used to sign every request payload as a JWS
  18. Fill in the optional **Digital Signature Key ID**

![Connector Detail Overview - JPMorgan ACH Direct Debit](https://documentation.ixopay.com/manual/assets/ideal-img/connector-detail-overview-jpmorgan-ach-direct-debit.e2cc9a6.372.png)Connector Detail Overview - JPMorgan ACH Direct Debit
### Authentication (OAuth2)[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#authentication-oauth2 "Direct link to Authentication \(OAuth2\)")
JPMorgan ACH Direct Debit supports two OAuth2 flows, selected via **Use OAuth JWT Client Assertion** :
  * **JWT bearer client assertion (default)** — the connector signs its own client-assertion JWT. Provide **OAuth Private Key** (mandatory for this flow) and optionally **OAuth Key ID** , **OAuth Audience** , **OAuth Scope** , and **OAuth Token URL** (defaults to `https://login.jpmorgan.com/oauth2/token` if left blank).
  * **Client credentials** — set **Use OAuth JWT Client Assertion** to disabled and rely on **Client ID** / **Client Secret** directly. **OAuth Scope** and **OAuth Token URL** still apply if set.

## Bank account details[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#bank-account-details "Direct link to Bank account details")
Unlike some other adapters, the debtor's (customer's) bank account details are **not** taken from the customer profile's IBAN fields. Your integration must submit them as `extraData` on the transaction:  
| extraData key  | Description  |  
| --- | --- |  
| `psp:directDebitTransactionInformation.debtorAccount.accountNumber`  | Debtor bank account number (mandatory)  |  
| `psp:directDebitTransactionInformation.debtorAgent.financialInstitutionId.aba`  | Debtor bank routing/ABA number (mandatory)  |  
| `psp:directDebitTransactionInformation.debtorAccount.iban`  | Debtor IBAN, if used instead of/alongside an account number  |  
| `psp:directDebitTransactionInformation.debtorAccount.currency`  | Debtor account currency — falls back to the transaction currency if omitted  |  
| `psp:directDebitTransactionInformation.debtorAccount.type.code`  | Account type (e.g. checking/savings) — no fixed enum is enforced, whatever value you send is passed through  |  
See the [API reference](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit) for the full field mapping, including mandate-related fields, which this connector passes through as-is without creating or validating mandates itself.
## Registration & recurring collections[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#registration--recurring-collections "Direct link to Registration & recurring collections")
**Register** does not contact JPMorgan — it locally stores the bank account details submitted with the transaction so a later **Debit** can reuse them ("debit with register"). **Deregister** is also a local no-op. There is no bank-side tokenization for this connector.
## Refunds[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#refunds "Direct link to Refunds")
Refunds are independent of the original debit: the connector generates a new `endToEndId` for the refund (derived from the refund's own transaction ID, not the original debit's), and the collection/execution date is not inherited from the original debit either. Both are intentional, to avoid JPMorgan rejecting the request with a duplicate-ID (`PMT-E010`) or invalid-date (`DT01`) error. Track refund-to-debit correlation via your own transaction references rather than `endToEndId`.
## Testing[​](https://documentation.ixopay.com/manual/adapters/jpmorgan-ach-direct-debit#testing "Direct link to Testing")
Enable **Testmode** on the connector to use JPMorgan's certification (QAF) environment instead of production. Refer to JPMorgan's own [ACH Direct Debits API documentation](https://developer.payments.jpmorgan.com/api/treasury/ach-transactions/low-value-ach-direct-debits#/operations/paymentInitiation) for sandbox credentials and test scenarios.