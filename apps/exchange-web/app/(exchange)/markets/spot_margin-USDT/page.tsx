import { createPageMetadata } from '@/app/seo';
import { MarketsSpotPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'USDT Spot and Margin Markets',
  description:
    'Explore USDT quoted spot and margin market pairs with mock price, change and volume data.',
  path: '/markets/spot_margin-USDT'
});

export default function Page() {
  return <MarketsSpotPage />;
}
