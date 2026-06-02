'use client';

import type { ReactNode } from 'react';
import {
  Group,
  Panel,
  Separator
} from 'react-resizable-panels';

function ResizeHandle({ direction }: { direction: 'horizontal' | 'vertical' }) {
  return (
    <Separator
      className={[
        'shrink-0 bg-[#0b0e11] transition hover:bg-yellow-400/40',
        direction === 'horizontal' ? 'w-1' : 'h-1'
      ].join(' ')}
    />
  );
}

export function FuturesWorkspaceLayout({
  ticker,
  header,
  chart,
  orderBook,
  orderEntry,
  account,
  bottomDock,
  statusBar
}: {
  ticker: ReactNode;
  header: ReactNode;
  chart: ReactNode;
  orderBook: ReactNode;
  orderEntry: ReactNode;
  account: ReactNode;
  bottomDock: ReactNode;
  statusBar: ReactNode;
}) {
  return (
    <div className="futures-workspace flex h-[calc(100vh-4rem)] min-h-[760px] flex-col overflow-hidden bg-[#0b0e11] text-slate-100">
      {ticker}

      <div className="flex min-h-0 flex-1 flex-col gap-1 p-1">
        {header}

        <Group orientation="vertical" className="min-h-0 flex-1">
          <Panel defaultSize="74%" minSize="52%">
            <Group orientation="horizontal" className="h-full">
              <Panel defaultSize="68%" minSize="40%">
                {chart}
              </Panel>
              <ResizeHandle direction="horizontal" />
              <Panel defaultSize="17%" minSize="12%">
                {orderBook}
              </Panel>
              <ResizeHandle direction="horizontal" />
              <Panel defaultSize="15%" minSize="14%">
                <Group orientation="vertical">
                  <Panel defaultSize="68%" minSize="42%">
                    {orderEntry}
                  </Panel>
                  <ResizeHandle direction="vertical" />
                  <Panel defaultSize="32%" minSize="18%">
                    {account}
                  </Panel>
                </Group>
              </Panel>
            </Group>
          </Panel>
          <ResizeHandle direction="vertical" />
          <Panel defaultSize="26%" minSize="16%">
            {bottomDock}
          </Panel>
        </Group>
      </div>

      {statusBar}
    </div>
  );
}
