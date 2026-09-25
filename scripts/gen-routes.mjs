// Generate app/ routes for every scraped page. Usage: node scripts/gen-routes.mjs
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const exact = 'components/exact';
const manifest = JSON.parse(readFileSync('scraped/html/manifest.json', 'utf8'));
const files = readdirSync(exact).filter((f) => f.endsWith('-header.html'));
let n = 0;
const skipped = [];
for (const f of files) {
  const slug = f.replace(/-header\.html$/, '');
  const ok =
    existsSync(join(exact, `${slug}-body.html`)) &&
    existsSync(join(exact, `${slug}-footer.html`)) &&
    existsSync(join(exact, `${slug}.inline.txt`));
  if (!ok || !manifest[slug]) {
    skipped.push(slug);
    continue;
  }
  const route = manifest[slug].replace(/^\//, '');
  mkdirSync(join('app', route), { recursive: true });
  const locale = route.startsWith('ar-sa')
    ? ' lang="ar-SA" dir="rtl"'
    : route.startsWith('en-sa')
      ? ' lang="en-SA" dir="ltr"'
      : '';
  writeFileSync(
    join('app', route, 'page.tsx'),
    `import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/${slug}-header.html';
import body from '@/components/exact/${slug}-body.html';
import footer from '@/components/exact/${slug}-footer.html';
import inline from '@/components/exact/${slug}.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline}${locale} />;
}
`
  );
  n += 1;
}
console.log(`routes: ${n}, skipped: ${skipped.length}`);
skipped.forEach((s) => console.log('  SKIP', s));
