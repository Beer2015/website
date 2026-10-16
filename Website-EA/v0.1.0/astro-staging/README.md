# Website EA & Indicators — Astro Content Staging v0.1.0

**Status: technical staging / not production.**

This minimal, independently buildable Astro 5 static shell uses the existing reviewed HTML preview as its unmodified visual/content baseline. It publishes `/vi` and `/en` during local testing only.

- All 4 MQL5 product URLs, verified release details and backtest source are retained in `src/data/`.
- Browser content and UI remain the verified Preview; the language defaults to the route locale.
- This is **not** the existing Astro Foundation Scope01 Update03 (Admin + D1 + Access), and must not replace it.
- The larger, independent multi-page Astro source package is a separate QA draft pending merge into Foundation once its original source becomes available.
- No OTP, demo license, Coffee/VietQR, direct EX5/MQ5 distribution, production setup, backend or Admin.
- Robots deliberately disabled. Do not enable SEO/public deploy until QA/approval.
- Existing root Nuxt workflow is kept and is not used for this site.

## Local checks

```bash
npm install
npm test
npm run build
npm run dev
```

> Note: npm dependency install / Astro build / actual-browser tests were not executable in the previous environment (npm registry DNS EAI_AGAIN). A successful GitHub commit does NOT imply QA acceptance.

## Later merge gate

1. Obtain editable Foundation Update03 source.
2. Compare the static staging content and the full route-based Astro package against Foundation's existing Product API and Admin constraints.
3. Integrate content, run Astro check/build + SSR regression tests, inspect responsive views.
4. Deploy to secured Cloudflare Staging only after separate infrastructure checks and approval.
