---
title: Hosted Payment Page Content-Security Policy Configuration
summary: ' System Setuphttps://documentation.ixopay.com/manual/docs/system-setup  HPP
  CSP Configuration'
tags:
- happens-automatically-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-happens-automatically-direct-link-happens-automatically
- csp-nutshell-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-csp-nutshell-direct-link-csp-nutshell
- recommended-rollout-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-recommended-rollout-direct-link-recommended-rollout
- best-practices-hpp-scripts-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-best-practices-hpp-scripts-direct-link-best-practices-hpp-scripts
- checklist-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-checklist-direct-link-checklist
- subresource-integrity-sri-external-scripts-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-subresources-integrity-direct-link-subresource-integrity-sri-external-scripts
- create-hpp-csp-configuration-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-create-hpp-csp-configuration-direct-link-create-hpp-csp-configuration
- regex-pattern-payment-templates-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-regex-pattern-payment-templates-direct-link-regex-pattern-payment-templates
- verify-configuration-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-verify-configuration-direct-link-verify-configuration
- find-fix-violations-https-documentation-ixopay-com-manual-docs-system-setup-hpp-csp-configuration-find-fix-violations-direct-link-find-fix-violations
source_url: https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration
portal: ixopay-manual
updated: '2026-07-01'
related: []
---

* [System Setup](https://documentation.ixopay.com/manual/docs/system-setup)
  * HPP CSP Configuration

# Hosted Payment Page Content-Security Policy Configuration
Use **HPP CSP Configuration** to control which scripts your Hosted Payment Page (HPP) is allowed to load and execute.
This helps you:
  * manage payment page script integrity (PCI DSS 4.0.1 Requirement **6.4.3**), and
  * detect and respond to unauthorized changes by collecting CSP violation reports (PCI DSS 4.0.1 Requirement **11.6.1**).

You can review violations in the **Reports** tab (see [Find and fix violations](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#find-and-fix-violations)) and optionally forward them to your own reporting service.
warning
You are responsible for meeting PCI DSS requirements for your payment pages (e.g., as an SAQ D merchant/service provider). The [IXOPAY platform](https://www.ixopay.com) provides configuration and reporting tooling, but does not guarantee compliance with PCI DSS 6.4.3 or 11.6.1.
## What happens automatically[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#what-happens-automatically "Direct link to What happens automatically")
To keep HPP secure and functional, the IXOPAY platform automatically:
  * injects the required CSP directives for our payment script (**payment.js**), and
  * provides a valid **nonce** for authorized inline scripts.

info
You can use the nonce placeholder `{{ head.nonce }}` in your HPP templates to allow required inline scripts without enabling insecure directives like `unsafe-inline`.
## CSP in a nutshell[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#csp-in-a-nutshell "Direct link to CSP in a nutshell")
Content Security Policy (CSP) is an HTTP response header that tells the browser which sources are allowed for content like scripts, styles, images, fonts, and more. For HPP, the most important part is controlling **where scripts are allowed to load from**.
This feature configures the **`script-src`directive** for HPP responses at the **connector** level.
## Recommended rollout[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#recommended-rollout "Direct link to Recommended rollout")
  1. **Start in Report-Only mode**  
Deploy with `Content-Security-Policy-Report-Only` to collect violations without breaking the page.
  2. **Fix violations**  
Update your HPP templates (scripts, sources, inline code) until reports are clean (see [Fix violations in your Payment Templates](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#fix-violations-in-your-payment-templates)).
  3. **Enforce**  
Switch to `Content-Security-Policy` only after you’re confident the payment page works with no critical violations.

warning
Do not disable **Report-Only** until you have reviewed and resolved violations. Enforcing too early can block essential scripts and break your payment page.
## Best practices for HPP scripts[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#best-practices-for-hpp-scripts "Direct link to Best practices for HPP scripts")
### Checklist[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#checklist "Direct link to Checklist")
  * Prefer **external scripts** over inline scripts.
  * For third-party scripts:
    * [**Pin exact versions**](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#pin-exact-versions) (never `latest`).
    * Use [**Subresource Integrity (SRI)**](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#subresources-integrity).
  * Avoid enabling insecure CSP directives (e.g., `unsafe-inline`, `unsafe-eval`).
  * If inline scripts are unavoidable, [use a **nonce**](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#hpp-nonce) (`{{ head.nonce }}`).
  * Maintain an **inventory of scripts** and their business purpose (helps with PCI DSS 6.4.3).

### Use Subresource Integrity (SRI) for external scripts[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#subresources-integrity "Direct link to Use Subresource Integrity \(SRI\) for external scripts")
SRI lets the browser verify that an external script matches an expected hash. If the file changes (tampering or unexpected update), the browser blocks it.
Generate a hash for the exact file you load and set it in the `integrity` attribute (update it whenever you change the script version). For cross-origin CDNs, also include `crossorigin="anonymous"`.
SRI example
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```### Pin specific package versions from CDNs[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#pin-exact-versions "Direct link to Pin specific package versions from CDNs")
Avoid versionless or moving targets such as `latest`. Always reference a specific, tested version.
Pinning prevents unexpected upstream updates from changing your payment page behavior (or introducing new vulnerabilities) without you noticing. When you update the version, update the [SRI hash](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#subresources-integrity) too.
  * Good (pinned version)
  * Bad (latest)
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/latest/moment.min.js"  

></script>  

```### Use nonces for inline scripts[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#hpp-nonce "Direct link to Use nonces for inline scripts")
Inline scripts are blocked by CSP unless explicitly allowed. Use a **nonce** (a unique value per page load) to allow a specific inline script without enabling `unsafe-inline`.
On [IXOPAY](https://www.ixopay.com)-hosted payment pages, use the placeholder `{{ head.nonce }}` in the script tag. The IXOPAY platform will provide a matching nonce in the response header.
```

<script type="text/javascript" nonce="{{ head.nonce }}">  

  // Your inline script content here...  

</script>  

```## Setup[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#setup "Direct link to Setup")
### Create a HPP CSP Configuration[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#create-a-hpp-csp-configuration "Direct link to Create a HPP CSP Configuration")
Use **HPP CSP Configuration** to define the `script-src` directive for your Hosted Payment Page responses per connector. Depending on **Report Only** , the IXOPAY platform will send either `Content-Security-Policy` (enforced) or `Content-Security-Policy-Report-Only` (monitoring).
tip
New configurations default to **Report Only** so you can review violations before enforcing. After saving, [verify the configuration](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#verify-the-configuration).
`script-src` lets you allowlist approved JavaScript sources (see the [official script-src directive documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)). Optionally, configure **Reporting Endpoint** to forward CSP violation reports to your own reporting service (see the [official Reporting-Endpoints header documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Reporting-Endpoints)).
To create a new HPP CSP Configuration:
  1. Go to **System Setup** → **HPP CSP Configuration**.
  2. Click **+ HPP CSP Configuration**.
  3. Fill in:
     * **Enabled** : Turns the configuration on or off.
     * **Name** : A descriptive name.
     * **Report Only** : Sends `Content-Security-Policy-Report-Only`. Disable this to enforce `Content-Security-Policy`.
     * **CSP Headers** :
       * **Script Source Values** : Allowed script sources.
         * **Value** : Host or hash to allow.
         * **Comment** : Business reason for allowing it.
       * **Reporting Endpoint** (optional): Where violation reports should be sent.
         * **Name** : Unique endpoint name (used as ``).
         * **Endpoint** : URL of the reporting server.
     * **Regex Patterns** :
       * **Regex** : A PCRE valid Regex pattern to determine affected Payment Templates e.g. /foo/bar/file.php/.

![HPP CSP Configuration List](https://documentation.ixopay.com/manual/assets/ideal-img/hpp-csp-list.36d9316.1600.png)HPP CSP Configuration List![Create HPP CSP Configuration](https://documentation.ixopay.com/manual/assets/ideal-img/hpp-csp-create.31249fb.1600.png)Create HPP CSP Configuration
### Regex Pattern and Payment Templates[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#regex-pattern-and-payment-templates "Direct link to Regex Pattern and Payment Templates")
You can define multiple regex patterns in an HPP CSP Configuration to apply your configuration to specific payment templates.
Each Hosted Payment Page enabled in a connector resolves to a specific file path. For example, a default payment template for English might be stored at:
```

/vhosts/my-host.com/layouts/default/internal-pages/payment/vault/index.en.php  

```You can view these paths in the [FAST Editor](https://documentation.ixopay.com/manual/docs/fast) File Tree.
#### Pattern matching examples[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#pattern-matching-examples "Direct link to Pattern matching examples")
To apply your HPP CSP Configuration to a template, define a regex pattern that matches its file path:
  * **Match a specific template** Use `/.*\/internal-pages\/payment\/vault\/index\.en\.php$/` to target only this exact payment template.
  * **Match templates by filename** Use `/index\.en\.php$/` to apply the configuration to any template named `index.en.php`.
  * **Match all templates** Use `/.*/` to apply the configuration to all payment templates.

![FAST Editor File Tree](https://documentation.ixopay.com/manual/assets/ideal-img/hpp-csp-fast.14e76ed.1600.png)FAST Editor File Tree
### Verify the configuration[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#verify-the-configuration "Direct link to Verify the configuration")
After you create a configuration , verify the response header on page load:
  1. Open your payment page in the browser.
  2. Open **DevTools** → **Network**.
  3. Select the **document** request (the main page).
  4. Check **Response Headers** for:
     * `Content-Security-Policy-Report-Only` (Report-Only enabled), or
     * `Content-Security-Policy` (Report-Only disabled)

Confirm that `script-src` includes your configured values.
![Browser Console showing CSP Headers](https://documentation.ixopay.com/manual/assets/ideal-img/hpp-csp-console.17d48c3.1600.png)Browser Console showing CSP Headers
## Find and fix violations[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#find-and-fix-violations "Direct link to Find and fix violations")
You can review CSP violation reports in two ways:
  * Open the **Reports** tab from the **HPP CSP Configuration** list view.
  * Configure a custom **Reporting Endpoint** to send reports to your own system.

![CSP Reports List](https://documentation.ixopay.com/manual/assets/ideal-img/hpp-csp-reports.2b9038b.1600.png)CSP Reports List
### Fix violations in your Payment Templates[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#fix-violations-in-your-payment-templates "Direct link to Fix violations in your Payment Templates")
  1. Open your **Connector** → **Edit**.
  2. Go to your configured **Payment Templates**.
  3. Click the yellow **edit button** for a language to open the HTML editor.
  4. Review all `` tags and decide for each script:
     * **Keep as external** (preferred)
       * Pin an exact version.
       * Add SRI.
       * Ensure the source is allowed by `script-src`.
     * **Remove**
       * If redundant or unused.
     * **Keep inline** (only if necessary)
       * Add a nonce using `nonce="{{ head.nonce }}"`.
       * Avoid using `unsafe-inline`.

### Common report patterns and what to do[​](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#common-report-patterns-and-what-to-do "Direct link to Common report patterns and what to do")
  * **Blocked external domain**  
Add the required domain to `script-src` (and pin + SRI the script).
  * **Inline script blocked**  
Move inline code into an external file _or_ add `nonce="{{ head.nonce }}"`.
  * **`unsafe-eval`required**  
Refactor to remove `eval()` usage (do not “fix” this by allowing `unsafe-eval` unless you fully accept the risk).
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/latest/moment.min.js"  

></script>  

```
```

<script type="text/javascript" nonce="{{ head.nonce }}">  

  // Your inline script content here...  

</script>  

```
```

/vhosts/my-host.com/layouts/default/internal-pages/payment/vault/index.en.php  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/latest/moment.min.js"  

></script>  

```
```

<script type="text/javascript" nonce="{{ head.nonce }}">  

  // Your inline script content here...  

</script>  

```
```

/vhosts/my-host.com/layouts/default/internal-pages/payment/vault/index.en.php  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/latest/moment.min.js"  

></script>  

```
```

<script type="text/javascript" nonce="{{ head.nonce }}">  

  // Your inline script content here...  

</script>  

```
```

/vhosts/my-host.com/layouts/default/internal-pages/payment/vault/index.en.php  

```  * [What happens automatically](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#what-happens-automatically)
  * [CSP in a nutshell](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#csp-in-a-nutshell)
  * [Recommended rollout](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#recommended-rollout)
  * [Best practices for HPP scripts](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#best-practices-for-hpp-scripts)
    * [Checklist](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#checklist)
    * [Use Subresource Integrity (SRI) for external scripts](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#subresources-integrity)
    * [Pin specific package versions from CDNs](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#pin-exact-versions)
    * [Use nonces for inline scripts](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#hpp-nonce)
  * [Setup](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#setup)
    * [Create a HPP CSP Configuration](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#create-a-hpp-csp-configuration)
    * [Regex Pattern and Payment Templates](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#regex-pattern-and-payment-templates)
    * [Verify the configuration](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#verify-the-configuration)
  * [Find and fix violations](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#find-and-fix-violations)
    * [Fix violations in your Payment Templates](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#fix-violations-in-your-payment-templates)
    * [Common report patterns and what to do](https://documentation.ixopay.com/manual/docs/system-setup/hpp-csp-configuration#common-report-patterns-and-what-to-do)
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/latest/moment.min.js"  

></script>  

```
```

<script type="text/javascript" nonce="{{ head.nonce }}">  

  // Your inline script content here...  

</script>  

```
```

/vhosts/my-host.com/layouts/default/internal-pages/payment/vault/index.en.php  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/2.30.1/moment.min.js"  

  integrity="sha512-ZXhhbXBsZV9pbnRlZ3JpdHlfaGFzaF9fZG9fbm9fY29weV9fZ2VuZXJhdGVfcmVhbF9zcmlfaGFzaF9fX19fCg=="  

  crossorigin="anonymous"  

></script>  

```
```

<script  

  src="https://cdn.example.org/libs/moment/latest/moment.min.js"  

></script>  

```
```

<script type="text/javascript" nonce="{{ head.nonce }}">  

  // Your inline script content here...  

</script>  

```
```

/vhosts/my-host.com/layouts/default/internal-pages/payment/vault/index.en.php  

```