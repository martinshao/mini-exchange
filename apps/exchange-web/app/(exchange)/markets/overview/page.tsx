import { createPageMetadata } from '@/app/seo';
import { MarketsOverviewPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Crypto Market Prices and Overview',
  description:
    'Track mock crypto market prices, volume, movers and trading routes across spot and futures markets.',
  path: '/markets/overview'
});

export default function Page() {
  return <MarketsOverviewPage />;
}
