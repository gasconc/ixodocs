---
title: Authentication
summary: ' Transparent Gateway API v2'
tags:
- client-initiated-requests-https-documentation-ixopay-com-modules-docs-tokenex-authentication-client-initiated-requests-direct-link-client-initiated-requests
- third-party-initiated-requests-proxy-https-documentation-ixopay-com-modules-docs-tokenex-authentication-third-party-initiated-requests-proxy-direct-link-third-party-initiated-requests-proxy
- approved-hosts-https-documentation-ixopay-com-modules-docs-tokenex-authentication-approved-hosts-direct-link-approved-hosts
- api
- pci
- pci-dss
- tls
- tokenization
- tokenex
- ixopay
source_url: https://documentation.ixopay.com/modules/docs/tokenex/authentication-2
portal: ixopay-modules
updated: '2026-06-22'
related: []
---

* Transparent Gateway API v2
  * Authentication

# Authentication
## Client-Initiated Requests[​](https://documentation.ixopay.com/modules/docs/tokenex/authentication-2#client-initiated-requests "Direct link to Client-Initiated Requests")
The TGAPI uses an IP whitelist in conjunction with a TokenEx ID and the appropriate API key. The whitelist can be configured directly in the API settings menu within the TokenEx client portal. Clients can manage their API keys and TokenEx IDs via the ticketing system in the support tab of the client portal.
The TokenEx ID and API key will be supplied in the outbound HTTP request as header values.
## Third Party Initiated Requests (Proxy)[​](https://documentation.ixopay.com/modules/docs/tokenex/authentication-2#third-party-initiated-requests-proxy "Direct link to Third Party Initiated Requests \(Proxy\)")
Proxy tokenization requires a proxy profile to be configured within the Proxy Tokenization menu within the TokenEx client portal. Creating a profile will generate the proxy profile ID. Each profile can generate one or multiple proxy keys, and each proxy key will have an associated IP whitelist. All of this can be configured directly from within the client portal. The profile ID will be appended to the Transparent Proxy endpoint URL.
The proxy key can be supplied in the inbound HTTP request as either a header value ([tx-proxy-key](https://documentation.ixopay.com/modules/docs/tokenex/construct-request-1)) or via HTTP Basic Authentication, using tx-proxy-key as the user name and the proxy key as the password.
info
To delete IDs or keys, please open a support ticket.
warning
Connections to and from TokenEx APIs must utilize TLS 1.2 (HTTPs).
## Approved Hosts[​](https://documentation.ixopay.com/modules/docs/tokenex/authentication-2#approved-hosts "Direct link to Approved Hosts")
Before you begin using the Transparent Gateway API for client-initiated, outbound requests, you need to check to see if TokenEx has allowed communication with the 3rd party host. This is accomplished by a GET request to . If the remote API's host name is not in the list, please open a support ticket in our Customer Portal to have it added to the Approved Hosts list, which acts as an outbound whitelist from TokenEx to third party HTTP endpoints. For a host to be added to the Approved Hosts list, TokenEx will verify that the endpoint meets a few basic security requirements:
  1. The endpoint is using HTTPs (TLS 1.2)
  2. The HTTPs protocol is communicating over the standard port – 443.
  3. The root certificate is from a valid certificate authority.
  4. The endpoint supports the following HTTP verbs: GET/POST/PUT

Want to use an endpoint that requires a non-standard port?
Communications with 3rd parties that utilize a non-standard port need to be reviewed by our Operations team for approval. Please open a Support Ticket within the TokenEx portal to submit this request.
TGAPI Endpoint Authorization
To add an endpoint to the approved host list, please provide the documentation required to authorize any hosts exchanging transactions or content with [IXOPAY](https://www.ixopay.com) in your Test and Production environments.
**Initiating your request:**
  1. We require your Named Technical Support Contact (NTSC) to create a request in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support). The submission should include the following:
     * Specification of the target environment (Production or Test)
     * All relevant PCI compliance documentation as an attachment
  2. Please ensure that all submitted PCI compliance evidence adheres to the following standards:
     * **Authorized document types:** We exclusively accept a complete Self-Assessment Questionnaire D (SAQ-D) or an official Attestation of Compliance (AOC). QSA Certificates are insufficient and will not be accepted as a substitute for the required documentation, see [PCI requirements](https://www.pcisecuritystandards.org/faq/articles/Frequently_Asked_Question/Are-compliance-certificates-recognized-for-PCI-DSS-validation/).
     * **Validity and execution:** Documents must be the latest version (unexpired) and bear the required signatures from the authorized officer or assessor.
     * **Integrity of submission:** The document must be submitted in its entirety. Submissions with missing pages or redacted sections will be rejected.
     * **Exception for third-party gateways:** If your compliance is covered by a third party submitting card-sensitive data on your behalf, a mismatch in entity names is permissible. In such cases, the AOC from the third party is also required.

**Compliance oversight:**
IXOPAY maintains a comprehensive record of all TGAPI whitelist approvals. To ensure continued service, we require a renewed SAQ-D or AOC upon the expiration of your current filing. We reserve the right to suspend data exchange with any TGAPI Host if valid compliance cannot be verified.
**Timeline & security:** Please incorporate the necessary administrative lead time into your project schedule. You can expect a response from our team within approximately 2 business days after submitting your application for review.
These requirements are fundamental to our shared security posture and ensure the highest level of protection across the IXOPAY platform.