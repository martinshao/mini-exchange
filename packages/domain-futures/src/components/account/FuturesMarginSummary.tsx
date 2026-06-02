import type { FuturesAccountSummary } from '../../types';

export function FuturesMarginSummary({
  account
}: {
  account: FuturesAccountSummary;
}) {
  return (
    <div className="space-y-3 rounded-md border border-slate-800 bg-[#0f131a] p-3">
      <div className="flex justify-between">
        <span className="text-slate-500">保证金比率</span>
        <span className="text-emerald-400">{account.marginRatio}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">维持保证金</span>
        <span className="text-slate-300">{account.maintenanceMargin}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">保证金余额</span>
        <span className="text-slate-300">{account.marginBalance}</span>
      </div>
    </div>
  );
}
