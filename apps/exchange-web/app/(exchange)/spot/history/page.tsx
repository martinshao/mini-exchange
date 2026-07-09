import { createPageMetadata } from '@/app/seo';
import { SpotHistoryPage } from '@mini-exchange/domain-spot';

export const metadata = createPageMetadata({
  title: 'Spot Order History',
  description:
    'Inspect mock spot trading history, fills and order records for Mini Exchange account workflows.',
  path: '/spot/history',
  noIndex: true
});

export default function Page() {
  return <SpotHistoryPage />;
}
