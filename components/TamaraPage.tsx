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

// Runs tamara's own inline scripts after hydration. The bundle was transformed
// at scrape time: DOMContentLoaded/load listeners became __tlReady() calls so
// they fire immediately (those events already passed), analytics were dropped.
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
    const stop = bootInline(inline);
    const root = document.getElementById('tm') as HTMLElement | null;
    const stopEmbeds = root ? wireEmbeds(root) : () => {};
    return () => {
      el.lang = prevLang;
      el.dir = prevDir;
      stopEmbeds();
      stop();
    };
  }, [inline, lang, dir]);

  return (
    <div id="tm">
      <div dangerouslySetInnerHTML={{ __html: header }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div dangerouslySetInnerHTML={{ __html: footer }} />
    </div>
  );
}
