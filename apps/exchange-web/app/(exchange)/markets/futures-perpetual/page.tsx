import { createPageMetadata } from '@/app/seo';
import { MarketsFuturesPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Perpetual Futures Markets',
  description:
    'Browse mock perpetual futures contracts, price changes and futures market data for crypto trading.',
  path: '/markets/futures-perpetual'
});

export default function Page() {
  return <MarketsFuturesPage />;
}
