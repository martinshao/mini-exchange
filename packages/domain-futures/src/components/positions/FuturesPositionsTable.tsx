import type { FuturesPosition } from '../../types';

export function FuturesPositionsTable({
  positions
}: {
  positions: FuturesPosition[];
}) {
  return (
    <table className="w-full min-w-[1100px] text-left text-xs">
      <thead className="text-slate-500">
        <tr>
          <th className="px-4 py-3 font-medium">合约</th>
          <th className="px-4 py-3 font-medium">开仓价格</th>
          <th className="px-4 py-3 font-medium">标记价格</th>
          <th className="px-4 py-3 font-medium">强平价格</th>
          <th className="px-4 py-3 font-medium">保证金比率</th>
          <th className="px-4 py-3 font-medium">保证金</th>
          <th className="px-4 py-3 font-medium">盈亏(回报率)</th>
          <th className="px-4 py-3 font-medium">自动减仓</th>
          <th className="px-4 py-3 font-medium">预计资金费用</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800 text-slate-300">
        {positions.map((position) => (
          <tr key={position.symbol}>
            <td className="px-4 py-3">
              <div className="font-semibold text-slate-100">{position.symbol}</div>
              <div className="text-slate-500">
                {position.marginMode === 'cross' ? '全仓' : '逐仓'} {position.leverage}x
              </div>
            </td>
            <td className="px-4 py-3">{position.entryPrice}</td>
            <td className="px-4 py-3">{position.markPrice}</td>
            <td className="px-4 py-3">{position.liquidationPrice}</td>
            <td className="px-4 py-3">{position.marginRatio}</td>
            <td className="px-4 py-3">{position.margin}</td>
            <td className="px-4 py-3 text-red-400">
              <div>{position.pnl}</div>
              <div>{position.roe}</div>
            </td>
            <td className="px-4 py-3 text-emerald-400">{position.autoDeleverage}</td>
            <td className="px-4 py-3 text-red-400">
              {position.estimatedFundingFee}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
