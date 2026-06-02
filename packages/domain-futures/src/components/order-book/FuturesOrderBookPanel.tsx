import { mockFuturesOrderBook } from '../../constants/futures-mock-data';
import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';
import { FuturesDepthControls } from './FuturesDepthControls';
import { FuturesOrderBookRows } from './FuturesOrderBookRows';

export function FuturesOrderBookPanel() {
  return (
    <FuturesPanelFrame
      title="订单簿"
      actions={<FuturesDepthControls precision={mockFuturesOrderBook.precision} />}
    >
      <div className="flex h-full min-h-0 flex-col">
        <div className="grid h-9 shrink-0 grid-cols-3 items-center px-3 text-xs text-slate-500">
          <span>价格 (USDT)</span>
          <span className="text-right">数量 (ETH)</span>
          <span className="text-right">合计 (USDT)</span>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <FuturesOrderBookRows levels={mockFuturesOrderBook.asks} side="ask" />
        </div>

        <div className="flex h-12 shrink-0 items-center justify-between border-y border-slate-800 px-3">
          <div>
            <div className="text-lg font-semibold text-red-400">
              {mockFuturesOrderBook.lastPrice}
            </div>
            <div className="text-xs text-slate-500">
              标记价格 {mockFuturesOrderBook.markPrice}
            </div>
          </div>
          <span className="text-sm text-red-400">↓</span>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">
          <FuturesOrderBookRows levels={mockFuturesOrderBook.bids} side="bid" />
        </div>
      </div>
    </FuturesPanelFrame>
  );
}
