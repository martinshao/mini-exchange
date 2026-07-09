import { createPageMetadata } from '@/app/seo';
import { SpotHomePage } from '@mini-exchange/domain-spot';

export const metadata = createPageMetadata({
  title: 'Spot Trading Markets',
  description:
    'Browse spot markets, crypto pairs, mock order books and trading entry points in the Mini Exchange spot trading workspace.',
  path: '/spot'
});

export default function Page() {
  return <SpotHomePage />;
}
