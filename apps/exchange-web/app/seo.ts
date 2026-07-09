import type { Metadata } from 'next';

export const siteName = 'Mini Exchange';

export const siteDescription =
  'Mini Exchange is a Next.js crypto exchange frontend architecture lab for spot trading, futures trading, market data, wallets and risk workflows.';

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
).replace(/\/$/, '');

export const seoKeywords = [
  'crypto exchange frontend',
  'Next.js exchange',
  'React trading platform',
  'spot trading UI',
  'futures trading UI',
  'market data dashboard',
  'frontend architecture'
];

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function createPageMetadata({
  title,
  description,
  path = '/',
  images = ['/opengraph-image'],
  noIndex = false
}: {
  title: string;
  description: string;
  path?: string;
  images?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const absoluteImages = images.map((image) => absoluteUrl(image));

  return {
    title,
    description,
    keywords: seoKeywords,
    alternates: {
      canonical: url
    },
    robots: noIndex
      ? {
          index: false,
          follow: false
        }
      : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      images: absoluteImages
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: absoluteImages
    }
  };
}

export function formatTradingSymbol(symbol: string) {
  const normalizedSymbol = symbol.toUpperCase();

  if (normalizedSymbol.endsWith('USDT')) {
    return `${normalizedSymbol.slice(0, -4)}/USDT`;
  }

  if (normalizedSymbol.endsWith('USD')) {
    return `${normalizedSymbol.slice(0, -3)}/USD`;
  }

  return normalizedSymbol;
}

export const exchangeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: siteName,
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  url: siteUrl,
  description: siteDescription,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};
