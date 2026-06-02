import type { ReactNode } from 'react';
import { MarketsTopTabs } from './MarketsTopTabs';
import type { MarketsTabKey } from '../types/markets';

export function MarketsLayout({
  activeKey,
  children
}: {
  activeKey: MarketsTabKey;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-6">
      <div className="space-y-10">
        <MarketsTopTabs activeKey={activeKey} />
        {children}
      </div>
    </main>
  );
}
