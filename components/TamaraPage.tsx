'use client';
import { useEffect } from 'react';
import { wireEmbeds } from './wire';

type Props = {
  header: string;
  body: string;
  footer: string;
  htmlAttrs?: Record<string, string>;
};

// The scraped markup is rendered as ONE dangerouslySetInnerHTML subtree that
// React never diffs. The page's own inline scripts and tamara's runtime libs
// (jquery, webflow, gsap, swiper) are appended to the footer at scrape time in
// the real site's parse order, so they execute naturally from the HTML — IX2's
// load animations play at webflow boot instead of leaving the page at opacity
// 0. Nothing here must re-run them after hydration.

// Webflow's IX3 element registration keys every [data-w-id] against
// documentElement.getAttribute('data-wf-page') (targets are "<pageId>|<wid>").
// The per-route html attrs must therefore be on <html> BEFORE the footer boot
// scripts run, so they are set by an inline script prepended to the SSR'd
// markup (runs in document order, before jquery/webflow in the footer).
function attrScript(htmlAttrs?: Record<string, string>): string {
  if (!htmlAttrs || Object.keys(htmlAttrs).length === 0) return '';
  const json = JSON.stringify(htmlAttrs).replace(/</g, '\\u003c');
  return `<script>(function(){var d=document.documentElement,a=${json};for(var k in a){if(a[k]!==""){d.setAttribute(k,a[k]);}}})();</script>`;
}

// Renders a scraped tamara.co page verbatim (real markup + real stylesheet)
// and boots its own behaviours.
export default function TamaraPage({ header, body, footer, htmlAttrs }: Props) {
  useEffect(() => {
    const root = document.getElementById('tm') as HTMLElement | null;
    const stopEmbeds = root ? wireEmbeds(root) : null;
    return () => stopEmbeds?.(); // clean up on unmount
  }, []);

  return (
    <div
      id="tm"
      dangerouslySetInnerHTML={{
        __html: attrScript(htmlAttrs) + header + body + footer,
      }}
    />
  );
}
