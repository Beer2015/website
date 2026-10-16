import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const dir = new URL('../', import.meta.url);
const read = (name) => fs.readFileSync(new URL(name, dir), 'utf8');
const data = JSON.parse(read('src/data/products.json'));
test('exactly four public MQL5 products', () => {
 assert.equal(data.catalog.length, 4);
 assert.deepEqual(data.catalog.map(p=>p.mql5_id), [193733,176529,177240,174152]);
 for (const p of data.catalog) assert.equal(new URL(p.market_url).hostname,'www.mql5.com');
});
test('research is sourced and historical', () => {
 assert.equal(data.research.profiles.length,3);
 assert.equal(data.research.source_url, 'https://www.mql5.com/en/blogs/post/776185');
 assert.match(data.research.disclaimer,/not live trading results/);
});
test('unsupported flows remain off', () => {
 assert.ok(Object.values(data.restricted).every(value => value===false));
});
test('both locales and non-indexed preview', () => {
 const page=read('src/pages/[lang]/index.astro');
 assert.ok(page.includes("lang: 'vi'") && page.includes("lang: 'en'"));
 assert.ok(read('src/data/preview.html').includes("let language='vi';"));
 assert.ok(read('src/data/preview.html').includes('noindex,nofollow'));
 assert.equal(read('public/robots.txt').trim(),'User-agent: *\nDisallow: /');
});
