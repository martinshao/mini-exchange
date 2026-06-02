export function FuturesRiskControls({
  stopLossTakeProfit,
  reduceOnly
}: {
  stopLossTakeProfit: boolean;
  reduceOnly: boolean;
}) {
  return (
    <div className="space-y-3 text-sm">
      <div className="h-1 rounded bg-slate-800">
        <div className="h-full w-2/5 rounded bg-yellow-300" />
      </div>

      <label className="flex items-center justify-between text-slate-400">
        <span>止盈/止损</span>
        <input type="checkbox" checked={stopLossTakeProfit} readOnly />
      </label>

      <label className="flex items-center justify-between text-slate-400">
        <span>只减仓</span>
        <input type="checkbox" checked={reduceOnly} readOnly />
      </label>
    </div>
  );
}
