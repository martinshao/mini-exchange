import { createPageMetadata } from '@/app/seo';
import { MarketsPerpetualTradingDataPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Perpetual Futures Trading Data',
  description:
    'Review mock perpetual futures trading data, contract activity and crypto derivatives market signals.',
  path: '/markets/trading_data/futures/perpetual/trading-data'
});

export default function Page() {
  return <MarketsPerpetualTradingDataPage />;
}
