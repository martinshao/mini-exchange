import { futuresTickerStripItems } from '../../constants/futures-workspace-mock';

export function FuturesTickerStrip() {
  return (
    <div className="flex h-10 shrink-0 items-center gap-6 overflow-x-auto border-b border-slate-800 bg-[#151922] px-4 text-xs font-semibold">
      {futuresTickerStripItems.map((item) => {
        const isPositive = item.change.startsWith('+');

        return (
          <span key={item.symbol} className="flex shrink-0 items-center gap-1">
            <span className="text-slate-300">{item.symbol}</span>
            <span className={isPositive ? 'text-emerald-400' : 'text-red-400'}>
              {item.change}
            </span>
          </span>
        );
      })}
    </div>
  );
}
