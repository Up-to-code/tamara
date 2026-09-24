// Bulk scrape tamara.co ar-sa pages (+ en-sa home), split into
// components/exact/<slug>-{header,body,footer}.html + <slug>.inline.txt.
// - Images/videos/fonts stay on tamara's CDN (stable website-files URLs).
// - tamara's shared stylesheet is saved once as public/tamara-core.css.
// - Inline scripts: analytics dropped, DOMContentLoaded/load listeners made
//   ready-aware (__tlReady), bundled per page for TamaraPage to boot.
// Usage: npm run scrape
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..');
const htmlDir = join(root, 'scraped', 'html');
const exactDir = join(root, 'components', 'exact');
const pubDir = join(root, 'public');
mkdirSync(htmlDir, { recursive: true });
mkdirSync(exactDir, { recursive: true });
mkdirSync(pubDir, { recursive: true });

const UA = { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' };
const SITE = 'https://tamara.co';

// every ar-sa page from the sitemap + the en-sa home for the language pair
const sm = await (await fetch(`${SITE}/sitemap.xml`, { headers: UA })).text();
const locs = [...new Set([...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]))];
const paths = locs
  .map((u) => new URL(u).pathname.replace(/\/$/, '') || '/')
  .filter((p) => p === '/ar-sa' || p.startsWith('/ar-sa/') || p === '/en-sa' || p.startsWith('/en-sa/'));
// linked from the site but missing from the sitemap + the live site 404s on /about (dead link there)
for (const extra of [
  '/ar-sa/smart-product',
  '/ar-sa/smart-plus-product',
  '/en-sa/smart-product',
  '/en-sa/smart-plus-product',
]) {
  if (!paths.includes(extra)) paths.push(extra);
}

const slugOf = (p) =>
  p === '/ar-sa' ? 'ar-sa-home' : p === '/en-sa' ? 'en-sa-home' : p.slice(1).replace(/\//g, '-');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// depth-match a <div> subtree starting at openIdx (index of '<div')
function subtree(html, openIdx) {
  const re = /<\/?div(?=[\s>])/g;
  re.lastIndex = openIdx;
  let depth = 0;
  let m;
  while ((m = re.exec(html))) {
    if (m[0] === '<div') {
      depth += 1;
    } else {
      depth -= 1;
      if (depth === 0) {
        const end = html.indexOf('>', m.index) + 1;
        return html.slice(openIdx, end);
      }
    }
  }
  return null;
}

function findDivWith(html, cls, from = 0) {
  const i = html.indexOf(cls, from);
  if (i === -1) return null;
  const open = html.lastIndexOf('<div', i);
  return open === -1 ? null : { open, tree: subtree(html, open) };
}

const ANALYTICS = /googletagmanager|gtag\(|google_tags_first_party|statsig|AW-|dataLayer\.push|gtm\.js/i;

const READY_HELPER = `function __tlReady(fn){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',fn);}else{fn();}}\n`;

// executable scripts only: data scripts (embedly JSON, ld+json) stay in markup
const isExecutable = (tag) => {
  const m = tag.match(/type\s*=\s*["']([^"']+)["']/i);
  return !m || /javascript|ecmascript/i.test(m[1]);
};

function bundleInline(html) {
  const parts = [];
  for (const m of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (!isExecutable(m[1])) continue;
    const code = m[2].trim();
    if (!code || ANALYTICS.test(code)) continue;
    parts.push(
      code
        .replace(/document\.addEventListener\(\s*["']DOMContentLoaded["']\s*,/g, '__tlReady(')
        .replace(/window\.addEventListener\(\s*["']load["']\s*,/g, '__tlReady(')
    );
  }
  return READY_HELPER + parts.join('\n;\n');
}

const stripScripts = (s) =>
  s.replace(/<script([^>]*)>[\s\S]*?<\/script>/g, (m, attrs) => (isExecutable(attrs) ? '' : m));

let cssSaved = existsSync(join(pubDir, 'tamara-core.css'));
let ok = 0;
let fail = [];

for (const [n, path] of paths.entries()) {
  const slug = slugOf(path);
  const dest = join(htmlDir, `${slug}.html`);
  let html;
  if (existsSync(dest)) {
    html = readFileSync(dest, 'utf8');
  } else {
    try {
      const res = await fetch(`${SITE}${path}`, { headers: UA, redirect: 'follow' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      html = await res.text();
      writeFileSync(dest, html);
      await sleep(400);
    } catch (e) {
      fail.push(`${path} (${e.message})`);
      continue;
    }
  }

  const nav = findDivWith(html, 'w-nav');
  const footIdx = html.indexOf('<footer');
  if (!nav?.tree || footIdx === -1) {
    fail.push(`${path} (split)`);
    continue;
  }
  const navEnd = html.indexOf(nav.tree, nav.open) + nav.tree.length;
  // footer root is the <footer> tag itself: match to its close
  const footClose = html.indexOf('</footer>', footIdx) + '</footer>'.length;
  const footer = html.slice(footIdx, footClose);
  const bodyStart = html.indexOf('<body');
  const bodyOpen = html.indexOf('>', bodyStart) + 1;

  const header = html.slice(bodyOpen, navEnd);
  const body = html.slice(navEnd, footIdx);

  writeFileSync(join(exactDir, `${slug}-header.html`), stripScripts(header));
  writeFileSync(join(exactDir, `${slug}-body.html`), stripScripts(body));
  writeFileSync(join(exactDir, `${slug}-footer.html`), stripScripts(footer));
  writeFileSync(join(exactDir, `${slug}.inline.txt`), bundleInline(html));
  ok += 1;

  if (!cssSaved) {
    const cssm = html.match(/"(https:\/\/cdn\.prod\.website-files\.com\/[^"]+?\.css)"/);
    if (cssm) {
      const css = await (await fetch(cssm[1], { headers: UA })).text();
      writeFileSync(join(pubDir, 'tamara-core.css'), css);
      cssSaved = true;
      console.log(`tamara-core.css: ${css.length} chars`);
    }
  }
  if ((n + 1) % 40 === 0) console.log(`... ${n + 1}/${paths.length}`);
}

// favicon
try {
  const fav = await fetch(`${SITE}/favicon.ico`, { headers: UA });
  if (fav.ok) writeFileSync(join(pubDir, 'favicon.ico'), Buffer.from(await fav.arrayBuffer()));
} catch {}

console.log(`done: ${ok}/${paths.length} pages`);
const manifest = {};
for (const p of paths) manifest[slugOf(p)] = p;
writeFileSync(join(htmlDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
if (fail.length) {
  console.log(`FAILED (${fail.length}):`);
  fail.slice(0, 30).forEach((f) => console.log('  !', f));
}
