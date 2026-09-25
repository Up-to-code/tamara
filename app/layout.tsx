import './globals.css';
import './embeds.css';

// NOTE: no `metadata` export on purpose. Next.js streams metadata through an
// async outlet (Suspense) that mismatched hydration on these large verbatim
// pages, so title/description/favicon are plain <head> tags instead.

// webfont.js is the only lib that must live in the <head>: the per-page inline
// bundle (appended to each scraped footer) calls WebFont.load at parse time, so
// the WebFont global must already exist. It loads BLOCKING here, exactly as on
// tamara.co. The other runtime libs (jquery, webflow schunks + main, gsap,
// ScrollTrigger, swiper) are appended to each page's footer by scrape.mjs in
// the real site's exact parse order — see PAGE_LIBS there.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <title>Tamara | Shop now, pay later</title>
        <meta
          name="description"
          content="Shop now and pay later with Tamara. Split your payments with no interest and no late fees."
        />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" />
        <link rel="stylesheet" href="/tamara-core.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
