import { createPageMetadata } from '@/app/seo';
import { MarketsFavoritePage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Favorite Crypto Markets',
  description:
    'Manage mock favorite crypto markets and watchlist-style trading routes in the Mini Exchange frontend lab.',
  path: '/markets/favorite-all',
  noIndex: true
});

export default function Page() {
  return <MarketsFavoritePage />;
}
