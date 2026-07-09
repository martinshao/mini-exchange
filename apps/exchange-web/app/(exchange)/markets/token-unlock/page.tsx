import { createPageMetadata } from '@/app/seo';
import { MarketsTokenUnlockPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'Token Unlock Calendar',
  description:
    'Review mock token unlock events and crypto supply schedule data in the Mini Exchange market workspace.',
  path: '/markets/token-unlock'
});

export default function Page() {
  return <MarketsTokenUnlockPage />;
}
