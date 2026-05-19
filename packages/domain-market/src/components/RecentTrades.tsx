const trades = [
  ['65000.00', '0.021'],
  ['64995.50', '0.114'],
  ['65010.20', '0.052']
];

export function RecentTrades() {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-3 font-medium text-slate-100">Recent Trades</h2>

      <div className="space-y-1 text-xs text-slate-300">
        {trades.map(([price, qty], index) => (
          <div key={`${price}-${qty}-${index}`} className="flex justify-between">
            <span>{price}</span>
            <span>{qty}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
