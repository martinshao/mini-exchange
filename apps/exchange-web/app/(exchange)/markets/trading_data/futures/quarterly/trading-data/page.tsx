import { createPageMetadata } from '@/app/seo';
import { MarketsQuarterlyTradingDataPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Quarterly Futures Trading Data',
  description:
    'Explore mock quarterly futures trading data and crypto derivatives market activity in Mini Exchange.',
  path: '/markets/trading_data/futures/quarterly/trading-data'
});

export default function Page() {
  return <MarketsQuarterlyTradingDataPage />;
}
