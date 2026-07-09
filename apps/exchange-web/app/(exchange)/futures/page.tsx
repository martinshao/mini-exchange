import { createPageMetadata } from '@/app/seo';
import { FuturesHomePage } from '@mini-exchange/domain-futures';

export const metadata = createPageMetadata({
  title: 'Crypto Futures Trading',
  description:
    'Explore a futures trading workspace with leverage, funding, positions, risk controls and mock perpetual market data.',
  path: '/futures'
});

export default function Page() {
  return <FuturesHomePage />;
}
