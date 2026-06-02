import { FuturesAccountPanel } from '../account/FuturesAccountPanel';
import { FuturesChartPanel } from '../chart/FuturesChartPanel';
import { FuturesInstrumentHeader } from '../market/FuturesInstrumentHeader';
import { FuturesTickerStrip } from '../market/FuturesTickerStrip';
import { FuturesOrderBookPanel } from '../order-book/FuturesOrderBookPanel';
import { FuturesOrderEntryPanel } from '../order-entry/FuturesOrderEntryPanel';
import { FuturesBottomDock } from '../positions/FuturesBottomDock';
import { FuturesStatusBar } from './FuturesStatusBar';
import { FuturesWorkspaceLayout } from './FuturesWorkspaceLayout';

export function FuturesTradingWorkspace({ symbol }: { symbol: string }) {
  return (
    <FuturesWorkspaceLayout
      ticker={<FuturesTickerStrip />}
      header={<FuturesInstrumentHeader symbol={symbol} />}
      chart={<FuturesChartPanel />}
      orderBook={<FuturesOrderBookPanel />}
      orderEntry={<FuturesOrderEntryPanel />}
      account={<FuturesAccountPanel />}
      bottomDock={<FuturesBottomDock />}
      statusBar={<FuturesStatusBar />}
    />
  );
}
