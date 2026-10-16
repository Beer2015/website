import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = new URL('../', import.meta.url);
const data = JSON.parse(fs.readFileSync(new URL('../src/data/products.json', import.meta.url), 'utf8'));
const read = (p) => fs.readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const routes = [
  'src/pages/[lang]/index.astro',
  'src/pages/[lang]/products/index.astro',
  'src/pages/[lang]/products/[slug].astro',
  'src/pages/[lang]/research.astro',
  'src/pages/[lang]/insights.astro',
  'src/pages/[lang]/support.astro',
];

test('catalog has exact four public products, no duplicate identities', () => {
  assert.equal(data.catalog.length, 4);
  assert.deepEqual(data.catalog.map(p => p.slug), ['smc-forge','smc-signals-alert','candles-signals','ma-cross-signals']);
  assert.equal(new Set(data.catalog.map(p=>p.slug)).size, 4);
  assert.equal(data.catalog.filter(p=>p.type==='EA').length,1);
  assert.equal(data.catalog.filter(p=>p.distribution==='FREE_VIA_MQL5').length,3);
});

test('all product destinations are actual HTTPS MQL5 IDs', () => {
  for (const p of data.catalog) {
    const u = new URL(p.market_url);
    assert.equal(u.protocol, 'https:');
    assert.equal(u.hostname, 'www.mql5.com');
    assert.equal(u.pathname, `/en/market/product/${p.mql5_id}`);
    assert.match(p.version_checked, /^\d{4}-\d{2}-\d{2}$/);
  }
});

test('only research contains simulated P/L; all rows sourced and include safety caveats', () => {
  assert.equal(data.research.profiles.length,3);
  assert.equal(data.research.source_url,'https://www.mql5.com/en/blogs/post/776185');
  assert.deepEqual(data.research.profiles.map(p=>p.trades),[59,334,604]);
  assert.deepEqual(data.research.profiles.map(p=>p.profit_usd),[640.91,1810.01,535.17]);
  for(const p of data.research.profiles){
    const url=new URL(p.preset_url);
    assert.equal(url.hostname,'c.mql5.com');
    assert.equal(p.total_months,8);
    assert.ok(p.drawdown_pct>0);
  }
  assert.match(data.research.disclaimer,/not live trading results/);
});

test('unsafe customer flows remain disabled', () => {
  for (const [name,enabled] of Object.entries(data.restricted)) assert.equal(enabled,false,`Restricted: ${name}`);
  for (const p of data.catalog) assert.ok(!p.demo_30_day_status || p.demo_30_day_status==='NOT_ACTIVE_ON_WEBSITE');
});

test('both locale routes and all pages exist', () => {
  for (const file of routes) {
    const source=read(file);
    assert.ok(source.includes('getStaticPaths'),file);
    assert.ok(source.includes('langs'),file);
  }
  const layout=read('src/layouts/SiteLayout.astro');
  assert.ok(layout.includes('noindex,nofollow'));
  assert.ok(layout.includes('rel="noopener noreferrer"'));
  assert.equal(read('public/robots.txt').trim(),'User-agent: *\nDisallow: /');
});

test('read-only content stage does not expose APIs or checkout', () => {
  const content=routes.map(read).join('\n');
  for(const term of ['api/v1/admin','POST /','createPayment','VietQR','sendOtp','createLicense','downloadEX5']) {
    assert.ok(!content.includes(term),`Unexpected flow ${term}`);
  }
  assert.ok(!fs.existsSync(new URL('../src/pages/api/', import.meta.url)));
});

test('product feature localization complete', () => {
  const source=read('src/lib/content.mjs');
  for (const p of data.catalog) assert.ok(source.includes(`'${p.slug}': [`),p.slug);
  for (const lang of ['vi','en']) assert.ok(source.includes(`${lang}: {`));
});
