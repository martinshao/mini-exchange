import {
  mockFuturesAssets,
  mockFuturesBottomTabs,
  mockFuturesOpenOrders,
  mockFuturesPositions
} from '../../constants/futures-mock-data';
import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';
import { FuturesAssetsTable } from './FuturesAssetsTable';
import { FuturesDockEmptyState } from './FuturesDockEmptyState';
import { FuturesOpenOrdersTable } from './FuturesOpenOrdersTable';
import { FuturesPositionsTable } from './FuturesPositionsTable';

function renderDockContent(activeKey: string) {
  if (activeKey === 'positions') {
    return <FuturesPositionsTable positions={mockFuturesPositions} />;
  }

  if (activeKey === 'open-orders') {
    return <FuturesOpenOrdersTable orders={mockFuturesOpenOrders} />;
  }

  if (activeKey === 'assets') {
    return <FuturesAssetsTable assets={mockFuturesAssets} />;
  }

  const tab = mockFuturesBottomTabs.find((item) => item.key === activeKey);
  return <FuturesDockEmptyState label={tab?.label ?? '当前'} />;
}

export function FuturesBottomDock() {
  const activeTab = mockFuturesBottomTabs[0];

  return (
    <FuturesPanelFrame>
      <div className="flex h-full flex-col">
        <nav className="futures-workspace-scrollbar flex h-11 shrink-0 items-center gap-5 overflow-x-auto border-b border-slate-800 px-4 text-sm font-medium text-slate-500">
          {mockFuturesBottomTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={tab.key === activeTab.key ? 'text-slate-100' : undefined}
            >
              {tab.count === undefined ? tab.label : `${tab.label}(${tab.count})`}
            </button>
          ))}
        </nav>

        <div className="futures-workspace-scrollbar min-h-0 flex-1 overflow-auto">
          {renderDockContent(activeTab.key)}
        </div>
      </div>
    </FuturesPanelFrame>
  );
}
