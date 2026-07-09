import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { siteDescription, siteName, siteUrl, seoKeywords } from './seo';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Crypto Exchange Frontend Architecture Lab`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: seoKeywords,
  authors: [{ name: 'Mini Exchange' }],
  creator: 'Mini Exchange',
  publisher: 'Mini Exchange',
  category: 'finance',
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  openGraph: {
    title: `${siteName} | Crypto Exchange Frontend Architecture Lab`,
    description: siteDescription,
    url: '/',
    siteName,
    type: 'website',
    locale: 'en_US',
    images: ['/opengraph-image']
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Crypto Exchange Frontend Architecture Lab`,
    description: siteDescription,
    images: ['/opengraph-image']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
