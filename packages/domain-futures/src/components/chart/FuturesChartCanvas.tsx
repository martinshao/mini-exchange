import type { FuturesChartMockState } from '../../types';
import { FuturesIndicatorPanel } from './FuturesIndicatorPanel';

export function FuturesChartCanvas({ chart }: { chart: FuturesChartMockState }) {
  return (
    <div className="relative min-h-0 flex-1 overflow-hidden bg-[linear-gradient(#242a35_1px,transparent_1px),linear-gradient(90deg,#242a35_1px,transparent_1px)] bg-[size:120px_64px]">
      <div className="absolute left-4 top-3 text-xs text-slate-500">
        <span className="text-slate-400">
          {chart.title} - 最新价格 - {chart.timeframe} - {chart.exchange}
        </span>
        <span className="ml-3 text-red-400">
          开 {chart.open} 高 {chart.high} 低 {chart.low} 收 {chart.close} {chart.change}
        </span>
      </div>

      <div className="absolute bottom-24 left-16 right-16 top-16">
        <div className="h-full rounded border border-dashed border-slate-700/70" />
        <div className="absolute bottom-10 left-8 right-8 h-14 rounded bg-gradient-to-r from-emerald-500/20 via-red-500/20 to-emerald-500/20" />
        <div className="absolute left-8 right-8 top-1/2 border-t border-dashed border-red-400/60" />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 rounded bg-red-400 px-2 py-1 text-xs font-semibold text-white">
          {chart.latestPrice}
        </span>
      </div>

      <FuturesIndicatorPanel indicators={chart.indicators} />
    </div>
  );
}
