import type { FuturesAssetBalance } from '../../types';

export function FuturesAssetsTable({
  assets
}: {
  assets: FuturesAssetBalance[];
}) {
  return (
    <table className="w-full min-w-[640px] text-left text-xs">
      <thead className="text-slate-500">
        <tr>
          <th className="px-4 py-3 font-medium">资产</th>
          <th className="px-4 py-3 font-medium">钱包余额</th>
          <th className="px-4 py-3 font-medium">保证金余额</th>
          <th className="px-4 py-3 font-medium">未实现盈亏</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800 text-slate-300">
        {assets.map((asset) => (
          <tr key={asset.asset}>
            <td className="px-4 py-3 font-semibold text-slate-100">
              {asset.asset}
            </td>
            <td className="px-4 py-3">{asset.walletBalance}</td>
            <td className="px-4 py-3">{asset.marginBalance}</td>
            <td className="px-4 py-3 text-red-400">{asset.unrealizedPnl}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
