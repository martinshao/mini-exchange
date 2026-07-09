import { createPageMetadata } from '@/app/seo';
import { FuturesFundingPage } from '@mini-exchange/domain-futures';

export const metadata = createPageMetadata({
  title: 'Futures Funding Rates',
  description:
    'Review mock perpetual futures funding rates and market mechanics in the Mini Exchange frontend lab.',
  path: '/futures/funding'
});

export default function Page() {
  return <FuturesFundingPage />;
}
