import { createPageMetadata } from '@/app/seo';
import { FuturesPositionsPage } from '@mini-exchange/domain-futures';

export const metadata = createPageMetadata({
  title: 'Futures Positions',
  description:
    'Monitor mock futures positions, margin state and portfolio risk in the Mini Exchange futures workspace.',
  path: '/futures/positions',
  noIndex: true
});

export default function Page() {
  return <FuturesPositionsPage />;
}
