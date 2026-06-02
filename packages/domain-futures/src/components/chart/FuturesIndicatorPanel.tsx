import type { FuturesChartIndicator } from '../../types';

function getToneClassName(tone: FuturesChartIndicator['tone']) {
  if (tone === 'positive') {
    return 'text-emerald-400';
  }

  if (tone === 'negative') {
    return 'text-red-400';
  }

  if (tone === 'muted') {
    return 'text-slate-500';
  }

  return 'text-slate-300';
}

export function FuturesIndicatorPanel({
  indicators
}: {
  indicators: FuturesChartIndicator[];
}) {
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 right-4 space-y-2 text-xs">
      {indicators.map((item) => (
        <div key={item.label} className="flex gap-2">
          <span className="text-slate-500">{item.label}</span>
          <span className={getToneClassName(item.tone)}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
