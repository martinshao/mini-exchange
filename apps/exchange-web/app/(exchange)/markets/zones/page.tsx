import { createPageMetadata } from '@/app/seo';
import { MarketsZonesPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Crypto Market Zones',
  description:
    'Browse crypto market zones, sector groupings and thematic market discovery views in Mini Exchange.',
  path: '/markets/zones'
});

export default function Page() {
  return <MarketsZonesPage />;
}
