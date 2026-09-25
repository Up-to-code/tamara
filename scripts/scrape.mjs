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

// depth-match a <div> subtree starting at openIdx (index of '<div').
// Runs on HTML with script/style/textarea/template bodies blanked
// (length-preserving) so tags inside code can't corrupt the depth count.
function blanked(html) {
  const blankCodes = html.replace(
    /(<(?:script|style|textarea|template)[^>]*>)[\s\S]*?(<\/(?:script|style|textarea|template)>)/gi,
    (m, open, close) => open + ' '.repeat(m.length - open.length - close.length) + close
  );
  return blankCodes.replace(
    /<!--[\s\S]*?-->/g,
    (m) => ' '.repeat(m.length)
  );
}

function subtreeOn(scan, html, openIdx) {
  const re = /<\/?div(?=[\s>])/g;
  re.lastIndex = openIdx;
  let depth = 0;
  let m;
  while ((m = re.exec(scan))) {
    if (m[0] === '<div') {
      depth += 1;
    } else {
      depth -= 1;
      if (depth === 0) {
        const end = scan.indexOf('>', m.index) + 1;
        return html.slice(openIdx, end);
      }
    }
  }
  return null;
}

function findDivWith(html, cls, from = 0) {
  const scan = blanked(html);
  const i = scan.indexOf(cls, from);
  if (i === -1) return null;
  const open = scan.lastIndexOf('<div', i);
  return open === -1 ? null : { open, tree: subtreeOn(scan, html, open) };
}

// depth (div nesting) of scan at position `to`, counting from `from`
function depthAt(scan, from, to) {
  const re = /<\/?div(?=[\s>])/g;
  re.lastIndex = from;
  let depth = 0;
  let m;
  while ((m = re.exec(scan)) && m.index < to) {
    depth += m[0] === '<div' ? 1 : -1;
  }
  return depth;
}

// The navbar is sometimes wrapped (e.g. float banner opens before it and
// closes after it). After the navbar subtree, consume following </div>s that
// close ancestors opened inside the header (but never the page wrapper at
// depth 1), so the header file is balanced and the body starts clean.
function extendThroughWrappers(scan, html, bodyOpen, navEnd) {
  let end = navEnd;
  for (;;) {
    const rest = scan.slice(end);
    const m = rest.match(/^\s*(?:<!--[\s\S]*?-->\s*)*<\/div\s*>/);
    if (!m) break;
    if (depthAt(scan, bodyOpen, end) <= 1) break;
    end += m[0].length;
  }
  return html.slice(bodyOpen, end);
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
  return READY_HELPER + parts.map((p) => `try {\n${p}\n} catch (e) { console.error('[tl-inline]', e); }`).join('\n');
}

const stripScripts = (s) =>
  s.replace(/<script([^>]*)>[\s\S]*?<\/script>/g, (m, attrs) => (isExecutable(attrs) ? '' : m));

const VOID_TAGS = new Set(
  'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr'.split(',')
);

// TamaraPage renders header+body+footer concatenated into ONE innerHTML div.
// A browser parsing the streamed SSR HTML does NOT auto-close unclosed tags
// at the end (unlike fragment innerHTML assignment on the client), so any tag
// left open (e.g. the page wrapper, closed after </footer> in the original)
// swallows the JSX closing tags AND Next's flight scripts on the server while
// the client nests cleanly = hydration mismatch + blank page. Balance the
// concat by appending the missing closes to the footer.
function balanceConcat(header, body, footer) {
  const doc = header + body + footer;
  const stack = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)(?=[\s/>])[^>]*?(\/?)>/g;
  let m;
  while (re.lastIndex < doc.length) {
    const skipC = doc.slice(re.lastIndex).match(/^\s*<!--[\s\S]*?-->/);
    if (skipC) {
      re.lastIndex += skipC[0].length;
      continue;
    }
    m = re.exec(doc);
    if (!m) break;
    const [full, slash, tagRaw, selfClose] = m;
    const tag = tagRaw.toLowerCase();
    if (VOID_TAGS.has(tag) || selfClose === '/' || full.endsWith('/>')) continue;
    if (tag === 'script' || tag === 'style') {
      if (slash) continue;
      // raw-text element: jump past its close
      const close = new RegExp(`</${tag}\\s*>`, 'gi');
      close.lastIndex = re.lastIndex;
      const cm = close.exec(doc);
      if (cm) re.lastIndex = cm.index + cm[0].length;
      continue;
    }
    if (slash) {
      const i = stack.lastIndexOf(tag);
      if (i !== -1) stack.length = i;
    } else {
      stack.push(tag);
    }
  }
  if (!stack.length) return footer;
  const names = [...stack].reverse();
  return `${footer}<!-- tl-balance:${names.join(',')} -->${names.map((t) => `</${t}>`).join('')}`;
}

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

  const nav = findDivWith(html, 'w-nav', html.indexOf('<body'));
  const footIdx = html.indexOf('<footer');
  if (!nav?.tree || footIdx === -1) {
    fail.push(`${path} (split)`);
    continue;
  }
  const navEnd = html.indexOf(nav.tree, nav.open) + nav.tree.length;
  // footer root is the <footer> tag itself: match to its close
  const footClose = html.indexOf('</footer>', footIdx) + '</footer>'.length;
  const footerRaw = html.slice(footIdx, footClose);
  const bodyStart = html.indexOf('<body');
  const bodyOpen = html.indexOf('>', bodyStart) + 1;

  const headerRaw = extendThroughWrappers(blanked(html), html, bodyOpen, navEnd);
  const header = stripScripts(headerRaw);
  const body = stripScripts(html.slice(bodyOpen + headerRaw.length, footIdx));
  const footer = balanceConcat(header, body, stripScripts(footerRaw));

  writeFileSync(join(exactDir, `${slug}-header.html`), header);
  writeFileSync(join(exactDir, `${slug}-body.html`), body);
  writeFileSync(join(exactDir, `${slug}-footer.html`), footer);
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
