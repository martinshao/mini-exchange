import type { ReactNode } from 'react';
import { MarketsLayout } from './MarketsLayout';
import { MarketsTradingDataTabs } from './MarketsTradingDataTabs';

export function MarketsTradingDataLayout({
  activeHref,
  children
}: {
  activeHref: string;
  children: ReactNode;
}) {
  return (
    <MarketsLayout activeKey="trading-data">
      <MarketsTradingDataTabs activeHref={activeHref} />

      {children}
    </MarketsLayout>
  );
}
