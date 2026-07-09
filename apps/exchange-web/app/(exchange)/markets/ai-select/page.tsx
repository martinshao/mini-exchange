import { createPageMetadata } from '@/app/seo';
import { MarketsAiSelectPage } from '@mini-exchange/domain-market';

export const metadata = createPageMetadata({
  title: 'AI Selected Crypto Markets',
  description:
    'Review mock AI selected crypto markets and discovery lists inside the Mini Exchange market data experience.',
  path: '/markets/ai-select'
});

export default function Page() {
  return <MarketsAiSelectPage />;
}
