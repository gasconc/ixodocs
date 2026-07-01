---
title: Forter 3DS
summary: ' TokenEx iFrame  Third Party Integrationshttps://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations  Forter
  3DS'
tags:
- api
- json
- 3ds
- pci
- tokenex
- ixopay
- authorization
- iframe
source_url: https://documentation.ixopay.com/modules/docs/tokenex/forter
portal: ixopay-modules
updated: '2026-07-01'
related: []
---

* TokenEx iFrame
  * [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations)
  * Forter 3DS

# Forter 3DS
Support for Forter 3DS within the TokenEx iFrame.
Prerequisite
In order to use this functionality, you must also be a Forter customer - .
Clients who are also customers of Forter may use the TokenEx iFrame to initiate a 3DS authorization. You simply need to include your Forter Site ID and User Name as per the configuration below.
This functionality is only available in the PCI or PCI with CVV mode of the TokenEx iFrame.
The following are the minimum required iFrame parameters.  
| Parameter  | Type  | Required  | Notes  |  
| --- | --- | --- | --- |  
| tokenExID  | string  | True  |   |  
| tokenScheme  | enum  | True  | Use the JSON value from the Token Schemes section  |  
| authenticationKey  | string  | True  |   |  
| timestamp  | string  | True  | Must be UTC  |  
| origin  | string  | True  |   |  
| pci  | bool  | True  |   |  
| forterSiteId  | string  | True  | Obtained from Forter  |  
| forterUsername  | string  | True  | Obtained from Forter  |  
Sample response for a card which supports 3DS
JSON
```

{  

  "correlationId": "2021-02-01T170217623-3a818c00-v3",  

  "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021",  

  "dsIdentifier": "MC00000001",  

  "methodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

  "version": "2.1.0",  

  "additionalThreeDsData": {  

    "dsIdentifier": "MC00000001",  

    "threeDSServerEndVersion": "V2",  

    "threeDSServerStartVersion": "V1",  

    "acsStartProtocolVersion": "2.1.0",  

    "threeDSMethodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

    "dsEndProtocolVersion": "2.2.0",  

    "acsEndProtocolVersion": "2.2.0",  

    "dsStartProtocolVersion": "2.1.0",  

    "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021"  

  }  

}  

```warning
The response received will vary slightly by card type and card issuer.
```

{  

  "correlationId": "2021-02-01T170217623-3a818c00-v3",  

  "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021",  

  "dsIdentifier": "MC00000001",  

  "methodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

  "version": "2.1.0",  

  "additionalThreeDsData": {  

    "dsIdentifier": "MC00000001",  

    "threeDSServerEndVersion": "V2",  

    "threeDSServerStartVersion": "V1",  

    "acsStartProtocolVersion": "2.1.0",  

    "threeDSMethodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

    "dsEndProtocolVersion": "2.2.0",  

    "acsEndProtocolVersion": "2.2.0",  

    "dsStartProtocolVersion": "2.1.0",  

    "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021"  

  }  

}  

```
```

{  

  "correlationId": "2021-02-01T170217623-3a818c00-v3",  

  "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021",  

  "dsIdentifier": "MC00000001",  

  "methodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

  "version": "2.1.0",  

  "additionalThreeDsData": {  

    "dsIdentifier": "MC00000001",  

    "threeDSServerEndVersion": "V2",  

    "threeDSServerStartVersion": "V1",  

    "acsStartProtocolVersion": "2.1.0",  

    "threeDSMethodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

    "dsEndProtocolVersion": "2.2.0",  

    "acsEndProtocolVersion": "2.2.0",  

    "dsStartProtocolVersion": "2.1.0",  

    "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021"  

  }  

}  

```warning
The response received will vary slightly by card type and card issuer.
  * TokenEx iFrame
  * [Third Party Integrations](https://documentation.ixopay.com/modules/docs/tokenex/third-party-integrations)
  * Forter 3DS
```

{  

  "correlationId": "2021-02-01T170217623-3a818c00-v3",  

  "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021",  

  "dsIdentifier": "MC00000001",  

  "methodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

  "version": "2.1.0",  

  "additionalThreeDsData": {  

    "dsIdentifier": "MC00000001",  

    "threeDSServerEndVersion": "V2",  

    "threeDSServerStartVersion": "V1",  

    "acsStartProtocolVersion": "2.1.0",  

    "threeDSMethodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

    "dsEndProtocolVersion": "2.2.0",  

    "acsEndProtocolVersion": "2.2.0",  

    "dsStartProtocolVersion": "2.1.0",  

    "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021"  

  }  

}  

```
```

{  

  "correlationId": "2021-02-01T170217623-3a818c00-v3",  

  "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021",  

  "dsIdentifier": "MC00000001",  

  "methodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

  "version": "2.1.0",  

  "additionalThreeDsData": {  

    "dsIdentifier": "MC00000001",  

    "threeDSServerEndVersion": "V2",  

    "threeDSServerStartVersion": "V1",  

    "acsStartProtocolVersion": "2.1.0",  

    "threeDSMethodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

    "dsEndProtocolVersion": "2.2.0",  

    "acsEndProtocolVersion": "2.2.0",  

    "dsStartProtocolVersion": "2.1.0",  

    "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021"  

  }  

}  

```
```

{  

  "correlationId": "2021-02-01T170217623-3a818c00-v3",  

  "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021",  

  "dsIdentifier": "MC00000001",  

  "methodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

  "version": "2.1.0",  

  "additionalThreeDsData": {  

    "dsIdentifier": "MC00000001",  

    "threeDSServerEndVersion": "V2",  

    "threeDSServerStartVersion": "V1",  

    "acsStartProtocolVersion": "2.1.0",  

    "threeDSMethodURL": "https://acs-us-east-1.ndsprod.nds-sandbox-issuer.com/api/v1/acs/3ds_method",  

    "dsEndProtocolVersion": "2.2.0",  

    "acsEndProtocolVersion": "2.2.0",  

    "dsStartProtocolVersion": "2.1.0",  

    "threeDSServerTransID": "d00c8f19-d41b-4f41-8457-eea14e293021"  

  }  

}  

```warning
The response received will vary slightly by card type and card issuer.