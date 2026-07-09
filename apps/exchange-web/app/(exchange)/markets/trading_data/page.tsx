import { createPageMetadata } from '@/app/seo';
import { MarketsTradingDataPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Crypto Trading Data',
  description:
    'Analyze mock crypto trading data, volume, rankings and market activity across Mini Exchange markets.',
  path: '/markets/trading_data'
});

export default function Page() {
  return <MarketsTradingDataPage />;
}
