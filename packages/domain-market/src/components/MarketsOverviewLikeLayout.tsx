import type { ReactNode } from 'react';
import { MarketsAssetTabs } from './MarketsAssetTabs';
import { MarketsLayout } from './MarketsLayout';
import { MarketsSummaryCards } from './MarketsSummaryCards';
import type { MarketsAssetTabKey } from '../types/markets';

export function MarketsOverviewLikeLayout({
  activeAssetKey,
  children
}: {
  activeAssetKey: MarketsAssetTabKey;
  children: ReactNode;
}) {
  return (
    <MarketsLayout activeKey="overview">
      <MarketsSummaryCards />

      <MarketsAssetTabs activeKey={activeAssetKey} />

      {children}
    </MarketsLayout>
  );
}
