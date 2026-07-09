import { createPageMetadata } from '@/app/seo';
import { MarketsAlphaPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Crypto Alpha Markets',
  description:
    'Explore curated mock alpha market opportunities, watchlists and market discovery flows for crypto trading.',
  path: '/markets/alpha-all'
});

export default function Page() {
  return <MarketsAlphaPage />;
}
