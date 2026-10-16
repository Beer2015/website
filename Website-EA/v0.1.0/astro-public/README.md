# Website EA & Indicators — Astro Public Content Stage v0.1.0

**State:** review-only content build; no production go-live.

This is a **standalone Astro 5 static-content project**, derived from the verified Public Content Release v0.1.0. It provides bilingual VI/EN public pages, product details for 4 MQL5 releases, SMC Forge backtest reference and support links. It **does not replace** the pre-existing Foundation Scope 01 Update03 SSR/D1/Admin application, which is not currently available as editable source in this environment. Integrate these components/data into that Foundation only after obtaining its source and running regression tests.

## Quick start (Node.js 20.3+)

```bash
npm install
npm test
npm run check
npm run build
npm run dev
```

Public routes generated: `/`, `/vi`, `/en`, `/vi/products`, `/en/products`, 8 bilingual product detail URLs, `/vi/research`, `/en/research`, `/vi/insights`, `/en/insights`, `/vi/support`, `/en/support`.

## Data and safety

- Source JSON: `src/data/products.json` (from GitHub Public Content Release).
- NO direct distribution, payments, demo keys, admin logins, credential storage, or fake price/return claims.
- All free download/purchase CTAs link directly to verified MQL5 product URLs.
- Historical backtest metrics are cited and accompanied by risk disclaimers and preset compatibility warnings.
- Staging uses `noindex,nofollow` and `robots.txt Disallow: /`; remove only after explicit go-live review.
- Product visuals are clearly marked as illustrative, not live charts or screenshots.
- No `astro.config.mjs` Cloudflare adapter on purpose: this is **static** and requires no SSR. Existing Foundation uses SSR/Cloudflare Access/D1; do not replace its architecture with this stage.
- Root `.github/workflows/nuxtjs.yml` is unrelated; keep unchanged.

## Acceptance gate (NOT DONE)

1. Generate `package-lock.json` in environment with npm registry access and commit it; run `npm ci`, `npm test`, `npm run check`, `npm run build`.
2. Test every route in a browser on mobile/desktop, keyboard navigation, language switch, external links, no-console-error and 404 handling.
3. Obtain original Astro Foundation source; merge as read-only content components without changing Admin/API/D1 logic.
4. Provision Cloudflare Staging with proper Access + D1 controls if/when deploying the Foundation, not this static stage.
5. Obtain approval before any production deployment, payments, customer demo activation or source delivery.
