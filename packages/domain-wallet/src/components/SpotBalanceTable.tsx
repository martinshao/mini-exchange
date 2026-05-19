export function SpotBalanceTable() {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-3 font-medium text-slate-100">Spot Balance</h2>
      <div className="space-y-2 text-sm text-slate-400">
        <div className="flex justify-between">
          <span>BTC</span>
          <span>1.25000000</span>
        </div>
        <div className="flex justify-between">
          <span>USDT</span>
          <span>50,000.00</span>
        </div>
      </div>
    </div>
  );
}
