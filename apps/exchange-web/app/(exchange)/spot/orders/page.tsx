import { createPageMetadata } from '@/app/seo';
import { SpotOrdersPage } from '@mini-exchange/domain-spot';

export const metadata = createPageMetadata({
  title: 'Spot Open Orders',
  description:
    'Review mock spot open orders and order lifecycle states in the Mini Exchange trading architecture lab.',
  path: '/spot/orders',
  noIndex: true
});

export default function Page() {
  return <SpotOrdersPage />;
}
