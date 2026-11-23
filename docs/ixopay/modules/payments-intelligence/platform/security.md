---
title: Security
summary: 'As part of the IXOPAYhttps://www.ixopay.com Group, IXOPAY Payments Intelligence
  formerly Congrify undergoes an ISO 27001 and SOC2 certification audit for its data
  platform. IXOPAY Payments Intelligence is designed with security and privacy as
  core principles, implementing strict controls to protect '
tags:
- enabling-factor-authentication-https-documentation-ixopay-com-modules-docs-payments-intelligence-platform-security-enabling-factor-authentication-direct-link-enabling-factor-authentication
- ixopay
- merchant
- congrify
source_url: https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/security
portal: ixopay-modules
updated: '2026-11-23'
related: []
---

* Platform
  * Security

# Security
As part of the [IXOPAY](https://www.ixopay.com) Group, IXOPAY Payments Intelligence (formerly Congrify) undergoes an ISO 27001 and SOC2 certification audit for its data platform.
IXOPAY Payments Intelligence is designed with security and privacy as core principles, implementing strict controls to protect sensitive payment and customer information, including Personally Identifiable Information (PII), while ensuring that only authorized users can access the platform.
  * Data is masked in the database to prevent merchant users from seeing Personally Identifiable Information ('PII') and related sensitive data. While IXOPAY Payments Intelligence needs to securely store PII data in order to perform payer indirect identification and behaviour analysis for better payments dispute and success insights, such data is anonymized and masked for merchant Users on the IXOPAY Payments Intelligence web-app.
  * Access credentials are stored securely without hard coding any secrets or credential in the codebase or database. This includes both access passwords and MFA set-up, however does not include user passwords which are not stored nor accessed by IXOPAY Payments Intelligence.
  * Merchant data is segregated into partitioned customer-specific databases. These are accessible by a set of credentials used only by the IXOPAY Payments Intelligence web-app when logged in as the authorized Merchant User (refer also the forced 2-Factor Authentication policy below), hence any threat of leaks or vulnerabilities is reduced as an attacker would still not be able to access data of all merchants on the IXOPAY Payments Intelligence platform.

## Enabling 2-Factor Authentication[​](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/security#enabling-2-factor-authentication "Direct link to Enabling 2-Factor Authentication")
  1. To ensure only authorized Users can access the IXOPAY Payments Intelligence platform and your secure payments data, IXOPAY Payments Intelligence requires every User to setup their 2-Factor Authentication, which is forced as soon as you go live with Live data within 7 days. To setup the 2-Factor Authentication, each User can click on the ‘Security’ button under their User tab, then clicking on the 'Enable 2FA' button to initiate the Authentcator app setup.
![](https://documentation.ixopay.com/modules/assets/ideal-img/Security_1.b8bfc25.1600.png)
  2. Link your Authentication app (Okta Verify, Microsoft Authenticator or Google Authenticator) with a QR-code (or with the secret code) to securely access the IXOPAY Payments Intelligence web-app with 2 factor authentication.
  3. You can recover your account directly through recovery codes (self-custody, generated one-time at the time of MFA setup) in case of loss of authentication device.
  4. To re-configure an existing 2FA setup, click on the 'Re-configure 2FA' and we will send you an email with instructions to re-configure your 2FA setup.

  * [Enabling 2-Factor Authentication](https://documentation.ixopay.com/modules/docs/payments-intelligence/platform/security#enabling-2-factor-authentication)