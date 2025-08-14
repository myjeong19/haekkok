import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from 'components/nav';
import Footer from 'components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'HAEKKOK | 정민영 - 프론트엔드',
    template: '%s | HAEKKOK | 정민영 - 프론트엔드',
  },
  description: 'HAEKKOK | 정민영 - 프론트엔드',
  openGraph: {
    title: 'HAEKKOK | 정민영 - 프론트엔드',
    description: 'HAEKKOK | 정민영 - 프론트엔드',
    url: baseUrl,
    siteName: 'HAEKKOK | 정민영 - 프론트엔드',
    locale: 'ko_KR',
    type: 'website',
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
    images: ['/favicon.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cx(GeistSans.variable, GeistMono.variable)}>
      <body
        className="antialiased max-w-2xl mx-4 mt-6 sm:mt-8 sm:mx-auto text-neutral-900 bg-neutral-50 dark:text-neutral-100 dark:bg-neutral-950"
        cz-shortcut-listen="true"
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="flex-auto min-w-0 mt-4 sm:mt-6 flex flex-col px-3 sm:px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
