# Website EA & Indicators — Public Content Release v0.1.0

Date: 2026-10-16. Stage: **PUBLIC CONTENT PREVIEW ONLY — NOT PRODUCTION**.

## Delivered

1. `Website-EA_v0.1.0_Public_Content_Preview.html` — standalone bilingual VI/EN responsive HTML, public catalog, MQL5 links, Forge details and research.
2. `products.public.v0.1.0.json` — catalog and reference research data to import into Astro.
3. `PUBLIC_CONTENT_RELEASE_STATUS.md` — scope, sources, blocked functionality and release conditions.

## Public sources

- SMC Forge v1.130: https://www.mql5.com/en/market/product/193733
- SMC Signals Alert v4.5: https://www.mql5.com/en/market/product/176529
- Candles Signals v1.67: https://www.mql5.com/en/market/product/177240
- MA Cross Signals v1.16: https://www.mql5.com/en/market/product/174152
- SMC Forge research and reference presets: https://www.mql5.com/en/blogs/post/776185

## Safety and release boundaries

- Standalone **content preview only**; it is not the production Astro app.
- Preview is `noindex,nofollow`; charts/hero decoration are illustrative, not verified EA screenshots/live trade performance.
- MQL5 controls the actual purchase and free-download destinations; no fixed website price promise.
- Demo 30-day OTP/license, Coffee/VietQR, source and EX5/MQ5 downloads, live Admin and payment processing are **not implemented or enabled**.
- Never promote internal EA development versions as released customer versions.
- Backtests are simulations, not live trading results or guarantees. Preset compatibility must be checked.
- Existing Astro Foundation Scope 01 Update03 was PARTIAL PASS / NOT ACCEPTED; use its source and verification gate for any future integration.
- Before go-live: integrate into Astro, run build/check and browser QA, validate Staging D1/Access, review disclosure/terms and approve production deployment separately.
- GitHub storage in this commit is not a Cloudflare/GitHub Pages deployment.

## Repository isolation

This project is placed under `Website-EA/v0.1.0/` in the existing `Beer2015/website` repository. The older root Nuxt workflow has not been modified.
