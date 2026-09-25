// Generate app/ routes for every scraped page. Usage: node scripts/gen-routes.mjs
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const exact = 'components/exact';
const manifest = JSON.parse(readFileSync('scraped/html/manifest.json', 'utf8'));
const files = readdirSync(exact).filter((f) => f.endsWith('-header.html'));
let n = 0;
const skipped = [];

// The IX2/IX3 engine keys every [data-w-id] element against
// documentElement.getAttribute('data-wf-page'): target ids are
// "<pageId>|<wid>" and the prefix must equal the page id or the element is
// never registered (and its on-load animation never plays). The per-route
// html attrs come verbatim from the scraped <html> tag.
function readHtmlAttrs(slug) {
  const file = join('scraped/html', `${slug}.html`);
  if (!existsSync(file)) return null;
  const html = readFileSync(file, 'utf8');
  const m = html.match(/<html\b([^>]*)>/i);
  if (!m) return null;
  const tag = m[1].replace(/\bclass="[^"]*"/, '');
  const attrs = {};
  for (const mm of tag.matchAll(/([a-zA-Z][\w-]*)(?:="([^"]*)")?/g)) {
    if (mm[1] && mm[2] !== undefined && mm[2] !== '') attrs[mm[1]] = mm[2];
  }
  const want = [
    'lang',
    'dir',
    'data-wf-domain',
    'data-wf-page',
    'data-wf-site',
    'data-wf-collection',
    'data-wf-item-slug',
  ];
  const out = {};
  for (const k of want) if (Object.prototype.hasOwnProperty.call(attrs, k)) out[k] = attrs[k];
  return out;
}

for (const f of files) {
  const slug = f.replace(/-header\.html$/, '');
  const ok =
    existsSync(join(exact, `${slug}-body.html`)) &&
    existsSync(join(exact, `${slug}-footer.html`));
  if (!ok || !manifest[slug]) {
    skipped.push(slug);
    continue;
  }
  const route = manifest[slug].replace(/^\//, '');
  mkdirSync(join('app', route), { recursive: true });
  const attrs = JSON.stringify(readHtmlAttrs(slug) || {});
  writeFileSync(
    join('app', route, 'page.tsx'),
    `import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/${slug}-header.html';
import body from '@/components/exact/${slug}-body.html';
import footer from '@/components/exact/${slug}-footer.html';

const htmlAttrs = ${attrs};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
`
  );
  n += 1;
}
console.log(`routes: ${n}, skipped: ${skipped.length}`);
skipped.forEach((s) => console.log('  SKIP', s));
