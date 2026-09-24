import type { Metadata } from 'next';
import './globals.css';
import './embeds.css';

export const metadata: Metadata = {
  title: 'Tamara | Shop now, pay later',
  description:
    'Shop now and pay later with Tamara. Split your payments with no interest and no late fees.',
  icons: {
    icon: '/favicon.ico',
  },
};

// Tamara's own runtime libs, same versions/order as tamara.co:
// webfont loader, jQuery, Webflow IX2 runtime, GSAP, Swiper.
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar-SA" dir="rtl">
      <head>
        <link rel="stylesheet" href="/tamara-core.css" />
        {LIBS.map((src) => (
          <script key={src} src={src} defer />
        ))}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
