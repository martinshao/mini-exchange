import { createPageMetadata } from '@/app/seo';
import { MarketsNewListingPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'New Crypto Listings',
  description:
    'Discover mock new crypto listings and recently added market pairs in the Mini Exchange markets workspace.',
  path: '/markets/newListing'
});

export default function Page() {
  return <MarketsNewListingPage />;
}
