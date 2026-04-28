---
title: '[![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)'
summary: ' Payments Observability & Intelligencehttps://docs.congrify.com/#/README
  "Payments Observability & Intelligence"  Registration & Loginhttps://docs.congrify.com/#/Fintech/RegistrationLogin
  "Registration & Login"  User Management and Notificationshttps://docs.congrify.com/#/Fintech/UserManagementNotif'
tags:
- securityhttps-docs-congrify-com-fintech-security-security
- enabling-factor-authenticationhttps-docs-congrify-com-fintech-security-enabling-factor-authentication
- ixopay
- chargeback
- merchant
- congrify
- observability
- snowflake
- unified-reports
source_url: ''
portal: congrify
updated: '2026-04-28'
related: []
---

# [![Congrify Documentation Portal](https://congrify.com/wp-content/uploads/logo-congrify.svg)](https://docs.congrify.com/)
  * **Platform**
    * [Payments Observability & Intelligence](https://docs.congrify.com/#/README "Payments Observability & Intelligence")
    * [Registration & Login](https://docs.congrify.com/#/Fintech/RegistrationLogin "Registration & Login")
    * [User Management and Notifications](https://docs.congrify.com/#/Fintech/UserManagementNotifications "User Management and Notifications")
    * [Merchant Settings](https://docs.congrify.com/#/Fintech/MerchantSettings "Merchant Settings")
    * [Security](https://docs.congrify.com/#/Fintech/Security "Security")
      * [Enabling 2-Factor Authentication](https://docs.congrify.com/#/Fintech/Security?id=enabling-2-factor-authentication "Enabling 2-Factor Authentication")
  * **Observability**
    * [Dashboards](https://docs.congrify.com/#/Observability/Dashboards "Dashboards")
    * [KPIs](https://docs.congrify.com/#/Observability/KPIs "KPIs")
    * [VAMP](https://docs.congrify.com/#/Observability/VAMP "VAMP")
    * [AI Co-Pilot](https://docs.congrify.com/#/Observability/AICopilot "AI Co-Pilot")
  * **Data Pipelines**
    * [Snowflake Integration](https://docs.congrify.com/#/Data%20Pipelines/Snowflake "Snowflake Integration")
    * [Unified Reports](https://docs.congrify.com/#/Data%20Pipelines/UnifiedReports "Unified Reports")
  * **Marketplace Integrations**
    * [Stripe App Marketplace](https://docs.congrify.com/#/Marketplaces/StripeMarketplace "Stripe App Marketplace")
  * **Integrations**
    * [Getting Started](https://docs.congrify.com/#/Integrations/GettingStarted "Getting Started")
    * [Adyen](https://docs.congrify.com/#/Integrations/adyen "Adyen")
    * [Barclaycard](https://docs.congrify.com/#/Integrations/barclaycard "Barclaycard")
    * [Braintree](https://docs.congrify.com/#/Integrations/braintree "Braintree")
    * [Chargebee](https://docs.congrify.com/#/Integrations/chargebee "Chargebee")
    * [Chase Payment tech](https://docs.congrify.com/#/Integrations/chase "Chase Payment tech")
    * [Checkout.com](https://docs.congrify.com/#/Integrations/checkout "Checkout.com")
    * [ixopay](https://docs.congrify.com/#/Integrations/ixopay "ixopay")
    * [izyco(PayU)](https://docs.congrify.com/#/Integrations/iyzico "izyco\(PayU\)")
    * [PayPal](https://docs.congrify.com/#/Integrations/paypal "PayPal")
    * [Paysafecard](https://docs.congrify.com/#/Integrations/paysafecard "Paysafecard")
    * [Payu](https://docs.congrify.com/#/Integrations/payu "Payu")
    * [Satispay](https://docs.congrify.com/#/Integrations/satispay "Satispay")
    * [Solidgate](https://docs.congrify.com/#/Integrations/solidgate "Solidgate")
    * [Stripe](https://docs.congrify.com/#/Integrations/stripe "Stripe")
    * [Worldline](https://docs.congrify.com/#/Integrations/worldline "Worldline")
    * [Worldpay](https://docs.congrify.com/#/Integrations/worldpay "Worldpay")
  * **Pre-Chargeback Alerts**
    * [Pre-Chargeback Alerts](https://docs.congrify.com/#/Pre%20Chargeback%20notifications/pre_chargebacks "Pre-Chargeback Alerts")

## [Security](https://docs.congrify.com/#/Fintech/Security?id=security)
As part of the Ixopay Group, Congrify undergoes an ISO 27001 and SOC2 certification audit for its data platform. Congrify is designed with security and privacy as core principles. We implement strict controls to protect sensitive payment and customer information, including Personally Identifiable Information (PII), while ensuring that only authorized users can access the platform.
  * Data is masked in the database to prevent merchant users from seeing Personally Identifiable Information ('PII') and related sensitive data. While Congrify needs to securely store PII data in order to perform payer indirect identification and behaviour analysis for better payments dispute and success insights, such data is anonymized and masked for merchant Users on the Congrify web-app.
  * Access credentials are stored securely without hard coding any secrets or credential in our code-base or database. This includes both access passwords and MFA set-up, however does not include user passwords which are not stored nor accessed by Congrify.
  * Merchant data is segregated into partitioned customer-specific databases. These are accessible by a set of credentials used only by the Congrify web-app when logged in as the authorized Merchant User (refer also the forced 2-Factor Authentication policy below), hence any threat of leaks or vulnerabilities is reduced as an attacker would still not be able to access data of all merchants on the Congrify platform.

## [Enabling 2-Factor Authentication](https://docs.congrify.com/#/Fintech/Security?id=enabling-2-factor-authentication)
  1. To ensure only authorized Users can access the Congrify platform and your secure payments data, Congrify requires every User to setup their 2-Factor Authentication, which is forced as soon as you go live with Live data within 7 days. To setup the 2-Factor Authentication, each User can click on the ‘Security’ button under their User tab, then clicking on the 'Enable 2FA' button to initiate the Authentcator app setup.

![Alt text](https://docs.congrify.com/Images/Security_1.png)
  2. Link your Authentication app (Okta Verify, Microsoft Authenticator or Google Authenticator) with a QR-code (or with the secret code) to securely access the Congrify web-app with 2 factor authentication.

![Alt text](https://docs.congrify.com/Images/Security_2.png)
  3. Recover your account directly through recovery codes (self-custody) in case of loss of authentication device.

![Alt text](https://docs.congrify.com/Images/Security_3.png)