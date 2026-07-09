import type { MetadataRoute } from 'next';
import { absoluteUrl } from './seo';

const staticRoutes = [
  '/',
  '/spot',
  '/spot/orders',
  '/spot/history',
  '/futures',
  '/futures/positions',
  '/futures/funding',
  '/wallet',
  '/markets',
  '/markets/overview',
  '/markets/newListing',
  '/markets/alpha-all',
  '/markets/ai-select',
  '/markets/favorite-all',
  '/markets/futures-perpetual',
  '/markets/spot_margin-USDT',
  '/markets/token-unlock',
  '/markets/tradfi-Futures',
  '/markets/trading_data',
  '/markets/trading_data/rankings',
  '/markets/trading_data/futures/perpetual/trading-data',
  '/markets/trading_data/futures/quarterly/trading-data',
  '/markets/zones'
];

const tradingRoutes = [
  '/spot/trade/BTCUSDT',
  '/spot/trade/ETHUSDT',
  '/futures/trade/BTCUSDT',
  '/futures/trade/ETHUSDT'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [...staticRoutes, ...tradingRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route.includes('/trade/') ? 'hourly' : 'weekly',
    priority: route === '/' ? 1 : route.includes('/trade/') ? 0.9 : 0.7
  }));
}
