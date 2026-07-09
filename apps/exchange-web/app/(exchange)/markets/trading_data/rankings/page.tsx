import { createPageMetadata } from '@/app/seo';
import { MarketsRankingsPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Crypto Market Rankings',
  description:
    'Browse mock crypto rankings by market activity, price movement and trading data signals.',
  path: '/markets/trading_data/rankings'
});

export default function Page() {
  return <MarketsRankingsPage />;
}
