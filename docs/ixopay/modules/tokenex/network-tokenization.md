---
title: Network Tokenization Overview
summary: ' Network tokenization  Network Tokenization Overview'
tags:
- network-tokenization-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-network-tokenization-direct-link-network-tokenization
- benefits-network-tokenization-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-benefits-network-tokenization-direct-link-benefits-network-tokenization
- tokenex-provide-network-tokenization-services-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-tokenex-provide-network-tokenization-services-direct-link-tokenex-provide-network-tokenization-services
- token-requestor-trid-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-token-requestor-trid-direct-link-token-requestor-trid
- network-token-api-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-network-token-api-direct-link-network-token-api
- provisioning-network-token-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-provisioning-network-token-direct-link-provisioning-network-token
- risk-data-tokenize-payment-bundle-methods-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-risk-data-tokenize-payment-bundle-methods-direct-link-risk-data-tokenize-payment-bundle-methods
- state-network-token-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-state-network-token-direct-link-state-network-token
- network-token-lifecycle-management-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-network-token-lifecycle-management-direct-link-network-token-lifecycle-management
- card-metadata-updates-https-documentation-ixopay-com-modules-docs-tokenex-network-tokenization-card-metadata-updates-direct-link-card-metadata-updates
source_url: https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization
portal: ixopay-modules
updated: '2026-04-28'
related: []
---

* Network tokenization
  * Network Tokenization Overview

# Network Tokenization Overview
## What is Network Tokenization?[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#what-is-network-tokenization "Direct link to What is Network Tokenization?")
Network tokenization is a type of payment card tokenization offered by the payment card networks—Visa, Mastercard, American Express, etc. —that replaces primary account numbers (PANs) and other card details with a token issued by the card brand.
Network tokenization ensures that a token is used throughout the payments ecosystem by removing the need for merchants or third-party providers to expose themselves to the risk of handling the raw PAN and other sensitive cardholder data.
A network token is a 16 digit numeric value (a.k.a. a DPAN, Payment token, or EMV token). A network token also contains a lot of other information about the physical card, the issuing bank, and metadata about the PAN.
## Benefits of Network Tokenization[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#benefits-of-network-tokenization "Direct link to Benefits of Network Tokenization")
Because network tokenization removes the need for sensitive cardholder data to enter the payments ecosystem, it significantly reduces the risk of payment card fraud and data theft. As a result, it can help decrease declines, chargebacks, and interchange fees. In fact, in some instances, it can even shift the liability for chargebacks from the merchant to the issuer.
The financial impact of these benefits is substantial, especially for enterprise organizations with high volumes of transactions. Think about it—even a marginal decrease in interchange fees and declines can have a huge impact when applied across to board to thousands—or even millions—of monthly transactions.
Additionally, because the card networks are issuing the tokens, card details can be updated automatically by the card brands when changes occur. This ensures card data is always up-to-date for all payment cards on file, both improving the user experience and increasing authorization rates by preventing declines due to card expiration, loss, or theft. One Visanet study conducted in 2019 shows that transacting with network tokens provides an average 3.2% authorization lift over using raw PANs for card-not-present transactions and reduce occurrences of fraud by nearly 30%.
Users also can enjoy features such as the ability to view digital card art when selecting a payment type for a given transaction and to use digital wallets and mobile payments where supported. Using network tokens can also enable merchants to implement secure remote commerce (SRC) checkout experiences.
## How does TokenEx provide Network Tokenization Services?[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#how-does-tokenex-provide-network-tokenization-services "Direct link to How does TokenEx provide Network Tokenization Services?")
TokenEx provides network tokenization services as an On-Behalf-Of Token Requestor (OBOTR) which enables merchants, acquirers, and payment service providers to integrate with global Token Service Providers ("TSPs") using a single, unified API. TokenEx generated tokens will also be used to serve as a reference to the PAN and to a network token if a network token can be provisioned for the PAN. In addition, the TokenEx token acts as a fail-safe PCI token if the Tokenize request is declined by global TSPs. Since not all card issuer and payment gateways support network tokens, using the TokenEx token as a reference to the PAN and network token protects the client from PCI DSS scope in the event a network token cannot be provisioned for a PAN or used in a transaction.
![](https://documentation.ixopay.com/modules/assets/images/datafolowNTprovision-28ed33012f8b6cfce99caf709c0ab20c.png)
  1. Client sends TokenEx a PAN or TokenEx token in a request for a network token.
  2. TokenEx generates the request for a network token and passes it to the card network.
  3. The card network sends the network token request to the card issuer.
  4. The card issuer provisions the network token, which is then returned to the client via TokenEx.

### Token Requestor ID (TRID)[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#token-requestor-id-trid "Direct link to Token Requestor ID \(TRID\)")
Heads Up!
You do not need Token Requestor IDs (TRIDs) to begin testing network tokenization in the TokenEx test environment. You can begin testing and kick off the TRID provisioning process at the same time.
To obtain a network token for a credit card PAN in the TokenEx Production environment, your organization must have a Token Requestor ID (TRID) for the corresponding card network (Mastercard, Visa, American Express).
TokenEx will store and use your TRIDs to request network tokens on your behalf.
TokenEx can use your existing TRIDs or we can help you acquire TRIDs from each of the supported card networks. To acquire a new TRID, please contact your Customer Success Manager or our Support Team in the [IXOPAY Customer Experience Portal](https://ixopay.my.site.com/support). _Once the required information is provided, it may take up to 8 weeks for the TRID to be issued._
TokenEx will also need the business ID for the corresponding card brand. If the client accepts a brand of card for payment, then the organization will have this ID. See the table below for the brand specific nomenclature for this ID.  
| Visa  | Mastercard  | American Express  |  
| --- | --- | --- |  
| Business ID (BID)  | Company ID (CID)  | Service Establishment ID (SEID)  |  
## Network Token API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#network-token-api "Direct link to Network Token API")
This API supports the provisioning and management of Visa, Mastercard, and American Express issued tokens. This API also can also be used to retrieve a cryptogram which is an authentication value used by issuers for customer-initiated transactions (CIT). In addition, this API can be used to manage the lifecycle of the network tokens and to fetch card assets like card images, issuer icons, etc.
Documentation can be found [here](https://documentation.ixopay.com/modules/docs/tokenex/network-token-services).
### Provisioning a Network Token[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#provisioning-a-network-token "Direct link to Provisioning a Network Token")
The network tokenize method requests a network token to be provisioned for the primary account number (PAN). You will need to provide your TokenEx ID and authorized API key, the PAN or an existing TokenEx token, and the desired TokenEx token scheme if the PAN is used.
If tokenization is approved, the response returns a ‘tokenReferenceId’ that TokenEx will store. Additionally, if the presentation mode is set to ‘ECOM’ in the request, ‘paymentBundle’ in the response will contain ‘bundleElements’ which includes the network token value and network token expiration date (TokenEx will store these values in relation to your TokenEx token).
The ‘tokenStatus’ in the response indicates the current network token state. It should be in the ‘ACTIVE’ state. In rare cases, it may be in the ‘INACTIVE’ state as it takes time for the TSP to provision the token. However, the [Token State Change Notification webhook](https://documentation.ixopay.com/modules/docs/tokenex/token-state-change-notification) can be implemented to receive a Token State Change Notification whenever there is a change of the token state. Alternatively, the [GetStatus](https://documentation.ixopay.com/modules/docs/tokenex/get-status) method can be used to check the latest token state.
**Notes about the Response Data**  
The paymentAccountReference (i.e. PAR) is returned in the response. This value is an ID for the PAN and is consistent globally. Thus, if you have a network token provisioned from Apple Pay (DPAN), and a network token provisioned by TokenEx’s network token API that both refer to the same PAN, the network token values will be be different. However, you can expect the PAR to be equivalent for each network token representing the same underlying PAN.
Additionally, metadata about the card, information about the issuing bank, and card assets are returned in the tokenize response. Card assets are MIME types and are represented by a GUID in the response. These GUIDs can be used to retrieve the asset from the [Get Asset](https://documentation.ixopay.com/modules/docs/tokenex/get-asset) method.
### Risk Data in Tokenize and Get Payment Bundle Methods[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#risk-data-in-tokenize-and-get-payment-bundle-methods "Direct link to Risk Data in Tokenize and Get Payment Bundle Methods")
There are several optional request parameters in the Tokenize method and the Get Payment Bundle Method that are classified as "risk data". For example, the following JSON objects in the request contain risk data: walletRiskData, cardRiskData, deviceRiskData, and userRiskData. If these parameters are provided, it may increase the likelihood that the network token or the cryptogram is issued. The issuing banks perform some level of analytics on the provided risk data to evaluate these requests. Providing these additional optional parameters may increase the accuracy of the issuers assessment, but they are not required to provision, manage, or transact with network tokens.
### State of a Network Token[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#state-of-a-network-token "Direct link to State of a Network Token")
Network tokens are stateful. Once a network token is provisioned it should be in the active state, although in rare cases, there may be a short period in which the token is inactive before the card brands have successfully provisioned the token. Tokens can also be suspended or deleted. Suspending a token is useful when the organization expects fraudulent activity. A network token can be in any of the following states.  
_Note: CONSUMED is not used by default_  
| Status  | Description  |  
| --- | --- |  
| ACTIVE  | The network token has been issued and is not expired. An active token can be used to initiate transactions.  |  
| INACTIVE  | The network token has been issued and is expired. An inactive token cannot be used to initiate transactions.  |  
| SUSPENDED  | The network token has been issued and reported as suspended. A suspended token cannot be used to initiate transactions.  |  
| DELETED  | The network token was issued and has since been deleted.  |  
| CONSUMED  | The network token was issued and has exceeded its allowable uses.  |  
The [Token State Change Notification](https://documentation.ixopay.com/modules/docs/tokenex/token-state-change-notification) webhook can be used to be notified when the state of a network token has changed.
### Network Token Lifecycle Management[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#network-token-lifecycle-management "Direct link to Network Token Lifecycle Management")
The [Lifecycle Management](https://documentation.ixopay.com/modules/docs/tokenex/lifecycle-management) method is used to change the status of a network token. The following actions can change the status of a token: DELETE_TOKEN, RESUME_TOKEN, SUSPEND_TOKEN. To check the current status of a token, see the [GetStatus](https://documentation.ixopay.com/modules/docs/tokenex/get-status) method.
### Card Metadata Updates[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#card-metadata-updates "Direct link to Card Metadata Updates")
Network tokens are automatically kept current by the card brands. Since the issuing bank is involved in the provisioning of a network token, the network token and PAN mapping can be updated without changing the network token value. Thus, when storing a network token on file, you can rely on that token to always be up-to-date. Is some data about the card does change, you can use the [Card Metadata Update Notification](https://documentation.ixopay.com/modules/docs/tokenex/card-metadata-update-notification) webhook to be notified immediately. To retrieve the latest, up-to-date metadata for the card, you can use the [Get Card Metadata](https://documentation.ixopay.com/modules/docs/tokenex/get-card-metadata) method.
## Using Network Tokens within the Transparent Gateway API[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#using-network-tokens-within-the-transparent-gateway-api "Direct link to Using Network Tokens within the Transparent Gateway API")
The [Transparent Gateway API v2](https://documentation.ixopay.com/modules/docs/tokenex/tgapi-v2-the-basics), is an API proxy that can be used to pass HTTPs requests containing TokenEx tokens to third-party APIs (i.e. payment gateways, loyalty providers, global distribution systems, etc.). The TGAPI can transparently connect to any third-party API to replace the TokenEx token within the request body with the PAN or a network token and network token expiry date.
To process a transaction using a network token, the [Use Network Token Function](https://documentation.ixopay.com/modules/docs/tokenex/use-network-token-function) should be invoked within a TGAPI request.
## Testing Network Tokenization[​](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization#testing-network-tokenization "Direct link to Testing Network Tokenization")
You can begin testing network tokenization within the TokenEx Test environment. You will need a list of test data that includes test card numbers and test security codes. If you have not received the list of test data, contact your sales representative or your Customer Success Manager to request the list. You can also contact sales at sales@ixopay.com or your Customer Success Manager. Before moving to production, you will need to perform and validate the [Network Tokenization Test Cases](https://documentation.ixopay.com/modules/docs/tokenex/network-tokenization-test-cases). You will also need to have the appropriate TRIDs provisioned before moving to the TokenEx Production environment.