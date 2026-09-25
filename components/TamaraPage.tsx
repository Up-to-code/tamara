'use client';
import { useEffect } from 'react';
import { wireEmbeds } from './wire';

type Props = {
  header: string;
  body: string;
  footer: string;
  inline: string;
  lang?: string;
  dir?: string;
};

// Tamara's own runtime libs (same versions/order as tamara.co). Loaded here,
// strictly AFTER hydration: they mutate the DOM on init (webflow adds w-mod-ix
// to <html>, IX2 hides animated nodes), which causes hydration mismatches and
// blank pages if they run even a millisecond before hydration completes.
const LIBS = [
  'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
  'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67c184892f7a84b971ff49d9',
  'https://cdn.prod.website-files.com/67c184892f7a84b971ff49d9/js/webflow.schunk.f2efb3c5440a81cf.js',
  'https://cdn.prod.website-files.com/67c184892f7a84b971ff49d9/js/webflow.schunk.c8764fafeba26495.js',
  'https://cdn.prod.website-files.com/67c184892f7a84b971ff49d9/js/webflow.fb8c80fc.602b3e3cd8a71017.js',
  'https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js',
  'https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js',
  'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
];

function loadLibs(): Promise<void> {
  const w = window as unknown as { __tlLibs?: Promise<void> };
  if (!w.__tlLibs) {
    w.__tlLibs = (async () => {
      for (const src of LIBS) {
        await new Promise<void>((res) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            res();
            return;
          }
          const s = document.createElement('script');
          s.src = src;
          s.async = false;
          s.onload = () => res();
          s.onerror = () => res(); // never block behaviours on a failed lib
          document.head.appendChild(s);
        });
      }
    })();
  }
  return w.__tlLibs;
}
function bootInline(code: string) {
  const el = document.createElement('script');
  el.async = false;
  el.textContent = code;
  document.body.appendChild(el);
  return () => {
    el.remove();
  };
}

// Renders a scraped tamara.co page verbatim (real markup + real stylesheet)
// and boots its own behaviours.
export default function TamaraPage({ header, body, footer, inline, lang, dir }: Props) {
  useEffect(() => {
    const el = document.documentElement;
    const prevLang = el.lang;
    const prevDir = el.dir;
    if (lang) el.lang = lang;
    if (dir) el.dir = dir;
    let cancelled = false;
    let stopInline = () => {};
    let stopEmbeds = () => {};
    // libs first (ordered), then the page's own inline bundle, then embeds.
    // useEffect runs strictly post-hydration, so nothing mutates the DOM
    // before React finishes with it.
    void loadLibs().then(() => {
      if (cancelled) return;
      stopInline = bootInline(inline);
      const root = document.getElementById('tm') as HTMLElement | null;
      if (root) stopEmbeds = wireEmbeds(root);
    });
    return () => {
      cancelled = true;
      el.lang = prevLang;
      el.dir = prevDir;
      stopEmbeds();
      stopInline();
    };
  }, [inline, lang, dir]);

  return (
    <div id="tm" dangerouslySetInnerHTML={{ __html: header + body + footer }} />
  );
}
