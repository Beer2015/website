# Website EA & Indicators

**Project:** Website EA / Indicators for MetaTrader 5  
**Current content release:** v0.1.0 (2026-10-16)  
**Status:** content preview only; not deployed or production-ready.

## Versioned files

- [HTML preview](v0.1.0/Website-EA_v0.1.0_Public_Content_Preview.html)
- [Public product data (JSON)](v0.1.0/products.public.v0.1.0.json)
- [Release status / limits](v0.1.0/PUBLIC_CONTENT_RELEASE_STATUS.md)

The preview documents four real MQL5-published products and reference backtest results. Customer purchase/free downloads point to MQL5; no demo-license, payment, EX5/MQ5/source download or admin backend is activated here.

**Important:** This folder is separate from the existing root Nuxt GitHub Pages workflow. It does not configure deployment. Future Astro/Cloudflare integration and public go-live require their own build, QA and release checks.

## Astro Content Staging — in progress

- [Astro 5 staging source](v0.1.0/astro-staging/README.md) — bilingual `/vi` and `/en` static content shell driven by the verified HTML preview.
- [Staging QA status](v0.1.0/astro-staging/docs/QA_STATUS.md) — **not build-verified; not deployed**. This does not replace Astro Foundation Scope01 Update03.
- Deployment remains locked until Astro build + browser + original Foundation regression and Cloudflare staging QA succeed.

## Public Astro multi-page stage (2026-10-16)

- [Bilingual Astro public source](v0.1.0/astro-public/) — complete 20-file independent static content-stage.
- [QA and integration boundaries](v0.1.0/astro-public/docs/STAGE_QA_2026-10-16.md) — 7/7 data tests; Astro build/browser validation is blocked by unavailable npm registry.
- [Original minimal content staging](v0.1.0/astro-staging/) — preserved without modification.

**Not production:** the multi-page stage is not merged into the existing Foundation Scope 01 Update03 SSR/D1/Admin application. Demo/Coffee/license/API remain disabled; no deployment was made. The root Nuxt workflow remains unchanged.
