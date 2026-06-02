import type { FuturesChartMockState } from '../../types';

export function FuturesChartToolbar({
  intervals,
  modes
}: {
  intervals: FuturesChartMockState['intervals'];
  modes: FuturesChartMockState['modes'];
}) {
  return (
    <div className="flex h-10 shrink-0 items-center justify-between gap-4 border-b border-slate-800 px-4 text-xs text-slate-500">
      <div className="futures-workspace-scrollbar flex items-center gap-4 overflow-x-auto">
        {intervals.map((item) => (
          <button
            key={item.label}
            type="button"
            className={item.active ? 'text-slate-100' : 'hover:text-slate-300'}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex shrink-0 items-center gap-4">
        {modes.map((item) => (
          <button
            key={item.label}
            type="button"
            className={item.active ? 'text-slate-100' : 'hover:text-slate-300'}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
