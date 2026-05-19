export function TickerBar({ symbol }: { symbol: string }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">Ticker</p>
          <h2 className="text-lg font-semibold text-slate-100">{symbol}</h2>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-emerald-400">65,000.00</p>
          <p className="text-xs text-slate-500">+2.15%</p>
        </div>
      </div>
    </div>
  );
}
