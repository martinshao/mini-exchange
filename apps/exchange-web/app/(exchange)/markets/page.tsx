import { createPageMetadata } from '@/app/seo';
import { MarketsOverviewPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Crypto Markets Overview',
  description:
    'Browse crypto market prices, spot pairs, futures instruments, rankings and market data views in Mini Exchange.',
  path: '/markets'
});

export default function Page() {
  return <MarketsOverviewPage />;
}
