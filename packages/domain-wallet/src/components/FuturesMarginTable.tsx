export function FuturesMarginTable() {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <h2 className="mb-3 font-medium text-slate-100">Futures Margin</h2>
      <div className="space-y-2 text-sm text-slate-400">
        <div className="flex justify-between">
          <span>Available Margin</span>
          <span>20,000.00 USDT</span>
        </div>
        <div className="flex justify-between">
          <span>Used Margin</span>
          <span>2,400.00 USDT</span>
        </div>
      </div>
    </div>
  );
}
