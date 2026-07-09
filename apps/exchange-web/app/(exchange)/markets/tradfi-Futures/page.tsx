import { createPageMetadata } from '@/app/seo';
import { MarketsTradfiPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'TradFi Futures Markets',
  description:
    'Explore mock traditional finance futures market data alongside crypto market workflows.',
  path: '/markets/tradfi-Futures'
});

export default function Page() {
  return <MarketsTradfiPage />;
}
