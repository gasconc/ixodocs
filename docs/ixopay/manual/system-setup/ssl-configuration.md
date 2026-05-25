---
title: SSL Configuration
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup  SSL
  Configuration'
tags:
- ssl-certificates-https-documentation-ixopay-com-manual-docs-system-setup-ssl-configuration-ssl-certificates-direct-link-ssl-certificates
- certificate-authorities-https-documentation-ixopay-com-manual-docs-system-setup-ssl-configuration-certificate-authorities-direct-link-certificate-authorities
- protocols-https-documentation-ixopay-com-manual-docs-system-setup-ssl-configuration-protocols-direct-link-protocols
- lifetime-https-documentation-ixopay-com-manual-docs-system-setup-ssl-configuration-lifetime-direct-link-lifetime
- failover-location-https-documentation-ixopay-com-manual-docs-system-setup-ssl-configuration-failover-location-direct-link-failover-location
- certificate-public-key-pinning-https-documentation-ixopay-com-manual-docs-system-setup-ssl-configuration-certificate-public-key-pinning-direct-link-certificate-public-key-pinning
- pci
- pci-dss
- ssl
- tls
source_url: https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration
portal: ixopay-manual
updated: '2026-05-25'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * SSL Configuration

# SSL Configuration
The [IXOPAY platform](https://www.ixopay.com) seamlessly handles SSL certificates and configurations for clients to provide secure access and data exchange.
### SSL Certificates[​](https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration#ssl-certificates "Direct link to SSL Certificates")
Once your domains are configured for the IXOPAY platform, a validation with a Certificate Authority (CA), will be performed and the IXOPAY platform will issue three SSL certificates for each of your hostnames:
  * a SHA-2/ECDSA (Content Delivery Edge)
  * a SHA-2/RSA (Content Delivery Edge)
  * a SHA-2/RSA (Content Delivery Origin & Failover Location)

The IXOPAY platform manages the entire certificate lifecycle including initial issuance and renewal of the certificates.
### Certificate Authorities (CA)[​](https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration#certificate-authorities-ca "Direct link to Certificate Authorities \(CA\)")
the IXOPAY platform will usually issue certificates for your SSL endpoints from any of the following Certificate Authorities (CAs):
  * DigiCert
  * GlobalSign
  * Let's Encrypt
  * Sectigo (formerly Comodo)

### Protocols[​](https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration#protocols "Direct link to Protocols")
All of our Web Interfaces and APIs must at least use TLS 1.2. The IXOPAY platform supports the following TLS protocols:
  * TLS 1.2
  * TLS 1.3

The PCI-DSS standard no longer accepts early TLS (TLS 1.0, TLS 1.1) for communication and transmitting payment card data, we have therefore disabled older versions of TLS on our platform.
### Lifetime[​](https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration#lifetime "Direct link to Lifetime")
Certificate lifetime for certificates issued at the Content Delivery Edge is usually 1 year, renewal will be performed at least one month before certificate expiration. Certificates issued via the Let's Encrypt Certificate Authority will be replaced every 60 days, as the overall lifetime is limited to 90 days.
### Failover Location[​](https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration#failover-location "Direct link to Failover Location")
During normal operation conditions the Service Endpoints of the IXOPAY platform are typically announced via Content Delivery Platform. Our Platform is configured in such a way that in the event of a continuous Content Delivery Network failure, we are able to disengage from the CDN and failover to our own datacenter facilities. For this case please consider that we might deliver our services via the SSL Certificates provisioned to the Content Delivery Origin & Failover Location.
### Certificate & Public Key Pinning[​](https://documentation.ixopay.com/manual/docs/system-setup/ssl-configuration#certificate--public-key-pinning "Direct link to Certificate & Public Key Pinning")
The IXOPAY platform does not support Certificate & Public Key Pinning since this may impact connectivity to our platform at the moment new certificates are rolled. In practice and for various reasons, the IXOPAY platform may decide to roll a new certificate at different moments in time (with or without prior communication).