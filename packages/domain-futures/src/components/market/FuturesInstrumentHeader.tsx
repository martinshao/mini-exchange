import { futuresInstrumentStats } from '../../constants/futures-workspace-mock';

export function FuturesInstrumentHeader({ symbol }: { symbol: string }) {
  return (
    <header className="flex min-h-[72px] items-center gap-6 overflow-x-auto rounded-lg border border-slate-800 bg-[#11151b] px-4">
      <div className="flex shrink-0 items-center gap-3">
        <span className="rounded-md bg-slate-800 px-2 py-1 text-sm text-yellow-300">
          ★
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-slate-100">{symbol}</h1>
            <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
              永续
            </span>
          </div>
          <div className="text-2xl font-semibold text-red-400">1,939.02</div>
        </div>
      </div>

      <div className="flex min-w-max items-center gap-7">
        {futuresInstrumentStats.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="text-xs text-slate-500">{item.label}</div>
            <div className="text-sm font-medium text-slate-300">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
