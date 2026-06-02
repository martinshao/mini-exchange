import type { FuturesAccountSummary } from '../../types';

export function FuturesWalletSummary({
  account
}: {
  account: FuturesAccountSummary;
}) {
  return (
    <div className="space-y-3 rounded-md border border-slate-800 bg-[#0f131a] p-3">
      <div className="flex justify-between">
        <span className="text-slate-500">钱包余额</span>
        <span className="text-slate-300">{account.walletBalance}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-slate-500">未实现盈亏</span>
        <span className="text-red-400">{account.unrealizedPnl}</span>
      </div>
    </div>
  );
}
