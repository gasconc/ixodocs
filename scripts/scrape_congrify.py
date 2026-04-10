"""
Congrify documentation scraper for Docsify hash-routed SPA.
Usage: python scripts/scrape_congrify.py
"""
import asyncio
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path

from crawl4ai import AsyncWebCrawler, BrowserConfig, CrawlerRunConfig
from crawl4ai.cache_context import CacheMode

BASE_URL = "https://docs.congrify.com/"
OUTPUT_DIR = Path("docs/congrify")
MANIFEST_PATH = Path("docs_manifest.json")

CONGRIFY_PAGES = [
    # Root
    ("", "index"),
    # Platform
    ("Fintech/Payments", "platform/payments"),
    ("Fintech/RegistrationLogin", "platform/registration-login"),
    ("Fintech/UserManagementNotifications", "platform/user-management-notifications"),
    ("Fintech/MerchantSettings", "platform/merchant-settings"),
    ("Fintech/Security", "platform/security"),
    # Observability
    ("Observability/Dashboards", "observability/dashboards"),
    ("Observability/KPIs", "observability/kpis"),
    ("Observability/VAMP", "observability/vamp"),
    ("Observability/AICopilot", "observability/ai-copilot"),
    # Data Pipelines
    ("Data%20Pipelines/Snowflake", "data-pipelines/snowflake"),
    ("Data%20Pipelines/UnifiedReports", "data-pipelines/unified-reports"),
    # Marketplace
    ("Marketplaces/StripeMarketplace", "marketplace/stripe-marketplace"),
    # Integrations
    ("Integrations/GettingStarted", "integrations/getting-started"),
    ("Integrations/adyen", "integrations/adyen"),
    ("Integrations/barclaycard", "integrations/barclaycard"),
    ("Integrations/braintree", "integrations/braintree"),
    ("Integrations/chargebee", "integrations/chargebee"),
    ("Integrations/chase", "integrations/chase"),
    ("Integrations/checkout", "integrations/checkout"),
    ("Integrations/ixopay", "integrations/ixopay"),
    ("Integrations/iyzico", "integrations/iyzico"),
    ("Integrations/paypal", "integrations/paypal"),
    ("Integrations/paysafecard", "integrations/paysafecard"),
    ("Integrations/payu", "integrations/payu"),
    ("Integrations/satispay", "integrations/satispay"),
    ("Integrations/solidgate", "integrations/solidgate"),
    ("Integrations/stripe", "integrations/stripe"),
    ("Integrations/worldline", "integrations/worldline"),
    ("Integrations/worldpay", "integrations/worldpay"),
    # Pre-Chargeback
    ("Pre%20Chargeback%20notifications/pre_chargebacks", "pre-chargeback/alerts"),
]


async def main():
    browser_cfg = BrowserConfig(
        browser_type="chromium",
        headless=True,
        java_script_enabled=True,
        verbose=False,
    )

    run_cfg = CrawlerRunConfig(
        css_selector="main, article, .markdown-section, #main",  # Docsify uses various selectors
        word_count_threshold=30,
        cache_mode=CacheMode.BYPASS,
        wait_until="networkidle",
        page_timeout=30_000,
        verbose=False,
    )

    # Load existing manifest
    manifest = json.loads(MANIFEST_PATH.read_text()) if MANIFEST_PATH.exists() else {"last_updated": "", "pages": {}}

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    async with AsyncWebCrawler(config=browser_cfg) as crawler:
        for i, (hash_path, local_path) in enumerate(CONGRIFY_PAGES, 1):
            url = f"{BASE_URL}#/{hash_path}" if hash_path else BASE_URL
            filepath = OUTPUT_DIR / f"{local_path}.md"
            filepath.parent.mkdir(parents=True, exist_ok=True)

            print(f"  [{i}/{len(CONGRIFY_PAGES)}] {url}")

            try:
                result = await crawler.arun(url=url, config=run_cfg)

                if not result.success:
                    print(f"    ERROR: {result.error_message}")
                    continue

                md = str(result.markdown)
                if not md.strip():
                    print(f"    SKIP: empty content")
                    continue

                filepath.write_text(md, encoding="utf-8")

                sha = hashlib.sha256(md.encode()).hexdigest()
                manifest["pages"][url] = {
                    "local_path": str(filepath),
                    "sha256": sha,
                    "scraped_at": datetime.now(timezone.utc).isoformat(),
                    "title": local_path.split("/")[-1].replace("-", " ").title(),
                }

                print(f"    SAVED → {filepath}")

                # Small delay between requests
                await asyncio.sleep(1.5)

            except Exception as e:
                print(f"    ERROR: {e}")

    manifest["last_updated"] = datetime.now(timezone.utc).isoformat()
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"\nDone: {len(CONGRIFY_PAGES)} pages processed")


if __name__ == "__main__":
    asyncio.run(main())
