import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from 'components/nav';
import { ThemeProvider } from 'next-themes';
import { seoConfig, generateJsonLd } from 'lib/seo';
import { SITE } from './constants';

const jsonLd = generateJsonLd(SITE.URL);

export const metadata: Metadata = {
  metadataBase: new URL(SITE.URL),
  title: {
    default: `${seoConfig.site.name} | 프론트엔드 개발자`,
    template: `%s | ${seoConfig.site.name} | 프론트엔드 개발자`,
  },
  description: seoConfig.site.description,
  keywords: `${seoConfig.site.keywords}`,
  authors: [{ name: seoConfig.site.author }],
  creator: seoConfig.site.creator,
  publisher: seoConfig.site.publisher,
  category: seoConfig.site.category,
  openGraph: {
    title: `${seoConfig.site.name} | 프론트엔드 개발자`,
    description: seoConfig.site.description,
    url: SITE.URL,
    siteName: seoConfig.site.name,
    locale: 'ko_KR',
    type: 'website',
    images: [seoConfig.images.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: `${seoConfig.site.name} | 프론트엔드 개발자`,
    description: seoConfig.site.description,
    images: [seoConfig.images.og.url],
    creator: seoConfig.social.twitter.creator,
    site: seoConfig.social.twitter.site,
  },
  icons: {
    icon: [
      { url: seoConfig.images.favicon.ico, sizes: 'any' },
      { url: seoConfig.images.favicon.svg, type: 'image/svg+xml' },
    ],
    apple: seoConfig.images.favicon.svg,
  },
  alternates: {
    canonical: SITE.URL,
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={cx(GeistSans.variable, GeistMono.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased max-w-2xl mx-4 mt-6 sm:mt-8 sm:mx-auto text-neutral-900 bg-white dark:text-neutral-100 dark:bg-neutral-950 flex flex-col"
        cz-shortcut-listen="true"
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="flex-1 flex flex-col px-3 sm:px-2 md:px-0">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
