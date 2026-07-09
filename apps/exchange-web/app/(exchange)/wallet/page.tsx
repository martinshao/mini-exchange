import { createPageMetadata } from '@/app/seo';
import { WalletPage } from '@mini-exchange/domain-wallet';

export const metadata = createPageMetadata({
  title: 'Crypto Wallet Overview',
  description:
    'View mock crypto balances, spot assets and futures margin summaries in the Mini Exchange wallet workspace.',
  path: '/wallet',
  noIndex: true
});

export default function Page() {
  return <WalletPage />;
}
