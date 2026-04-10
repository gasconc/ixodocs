---
title: Transaction Results
summary: ' 3-D Securehttps://documentation.ixopay.com/docs/reference/features/3d-secure  Transaction
  Results'
tags:
- transaction-result-data-https-documentation-ixopay-com-docs-reference-features-secure-transaction-results-transaction-result-data-direct-link-transaction-result-data
- additional-result-data-callbacks-https-documentation-ixopay-com-docs-reference-features-secure-transaction-results-additional-result-data-callbacks-direct-link-additional-result-data-callbacks
- api
- 3ds
- 3d-secure
- ixopay
- transaction
source_url: ''
portal: ixopay-dev
updated: '2026-04-10'
related: []
---

* [Features](https://documentation.ixopay.com/docs/reference/features)
  * [3-D Secure](https://documentation.ixopay.com/docs/reference/features/3d-secure)
  * Transaction Results

# Transaction Results
In the [IXOPAY platform](https://www.ixopay.com), 3-D Secure transactions yield result data that provides insights into the authentication process. These fields are set on the results of the transaction and are also included in callbacks for your reference.
## Transaction result data[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results#transaction-result-data "Direct link to Transaction result data")
  * `returnData.cardData.threeDSecure`: This field represents the 3-D Secure status after considering connector settings, API settings, and risk check settings.
  * `returnData.cardData.eci`: The ECI is the scheme-specific result code of a 3-D Secure session and plays a role in determining whether your transaction qualifies for a liability shift. You can find detailed information about ECI codes and their implications in the [Liability Shift - Electronic Commerce Indicator](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift#electronic-commerce-indicator) table on the linked page.

## Additional result data in callbacks[​](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results#additional-result-data-in-callbacks "Direct link to Additional result data in callbacks")
If you have enabled the [connector setting](https://docs.ixopay.com/en/platform-user-administration-manual/connector/edit-connector/connector-settings) _Postback: Include 3DS Data_ , callbacks will provide additional fields directly from the 3-D Secure ARes/RReq. These fields are helpful in understanding and analyzing the authentication process.
  * `extraData.3ds:version` (Type: `string`): This field indicates the version of 3-D Secure used in the transaction, such as `2.2.0` or `2.1.0`.
  * `extraData.3ds:attempted` (Type: `boolean`): This field reflects whether 3-D Secure authentication was attempted during the transaction.
  * `extraData.3ds:eci` (Type: `string`): The ECI is the scheme-specific result code of a 3-D Secure session and plays a role in determining whether your transaction qualifies for a liability shift. You can find detailed information about ECI codes and their implications in the [Liability shift - Electronic Commerce Indicator](https://documentation.ixopay.com/docs/reference/features/3d-secure/liability-shift#electronic-commerce-indicator) table on the linked page.
  * `extraData.3ds:challengePerformed` (Type: `boolean`): This field is set to `true` if a 3-D Secure challenge flow was performed during the transaction. For details, refer to [Authentication flows](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows).
  * `extraData.3ds:transStatus` (Type: `string`): The `transStatus` field represents the outcome of the 3-D Secure authentication flow. Further details can be found in the [Authentication flows](https://documentation.ixopay.com/docs/reference/features/3d-secure/authentication-flows) section.
  * `extraData.3ds:exemptionFlag` (Type: `string`): Certain transactions may qualify for a 3-D Secure exemption, and this flag indicates whether an exemption was applied.
  * `extraData.3ds:authenticationTimestamp` (Type: `string: date-time (YYYY-MM-DDTHH:mm:ssXX)`): This timestamp reflects when the 3-D Secure authentication occurred. It can occur at the end of a challenge flow or during a frictionless flow.
  * `extraData.3ds:transStatusReason` (Type: `string`): The `transStatusReason` field provides an error code related to the 3-D Secure session.
  * `extraData.3ds:xid` (Type: `string`) **Deprecated** : This field is specific to 3-D Secure v1 and is no longer in use.
  * `extraData.3ds:dsTransId` (Type: `string`): Tge `dsTrandId` represents the transaction ID of the 3-D Secure Directory Server (DS).
  * `extraData.3ds:acsTransId` (Type: `string`): This field contains the transaction ID of the issuer's 3-D Secure Access Control Server (ACS).
  * `extraData.3ds:cardholderInfo` (Type: `string`): Information from the issuer's 3-D Secure Access Control Server (ACS) to the cardholder during a frictionless transaction, e.g., "Additional authentication needed, contact (Issuer Name) at xxx-xxx-xxxx." Display to the customer if available.

  * [Transaction result data](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results#transaction-result-data)
  * [Additional result data in callbacks](https://documentation.ixopay.com/docs/reference/features/3d-secure/transaction-results#additional-result-data-in-callbacks)