import './globals.css';
import './embeds.css';

// NOTE: no `metadata` export on purpose. Next.js streams metadata through an
// async outlet (Suspense) that mismatched hydration on these large verbatim
// pages, so title/description/favicon are plain <head> tags instead.

// NOTE: tamara's runtime libs (jQuery, Webflow IX2, GSAP, Swiper) are NOT
// loaded here on purpose. They mutate the DOM on init, which breaks React
// hydration if they run before it finishes. TamaraPage loads them from its
// post-hydration effect instead (see components/TamaraPage.tsx).

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
        <link rel="stylesheet" href="/tamara-core.css" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
