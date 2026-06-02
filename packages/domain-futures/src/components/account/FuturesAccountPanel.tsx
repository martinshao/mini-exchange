import { mockFuturesAccountSummary } from '../../constants/futures-mock-data';
import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';
import { FuturesMarginSummary } from './FuturesMarginSummary';
import { FuturesWalletSummary } from './FuturesWalletSummary';

export function FuturesAccountPanel() {
  return (
    <FuturesPanelFrame
      title="账户"
      actions={<span className="text-xs text-yellow-300">切换</span>}
    >
      <div className="space-y-3 overflow-y-auto p-4 text-sm">
        <FuturesMarginSummary account={mockFuturesAccountSummary} />
        <FuturesWalletSummary account={mockFuturesAccountSummary} />
        <button
          type="button"
          className="w-full rounded-md bg-slate-700 px-3 py-2 text-sm font-semibold text-slate-100"
        >
          单币保证金模式
        </button>
      </div>
    </FuturesPanelFrame>
  );
}
