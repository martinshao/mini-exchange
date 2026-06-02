import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';

export function FuturesAccountPanel() {
  return (
    <FuturesPanelFrame title="账户">
      <div className="space-y-3 p-4 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-500">保证金比率</span>
          <span className="text-emerald-400">6.07%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">保证金余额</span>
          <span className="text-slate-300">5,674.6501 USDT</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500">未实现盈亏</span>
          <span className="text-red-400">-1,612.7813 USDT</span>
        </div>
      </div>
    </FuturesPanelFrame>
  );
}
