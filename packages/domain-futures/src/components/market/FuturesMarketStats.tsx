import type { FuturesInstrumentStat } from '../../types';

function getToneClassName(tone: FuturesInstrumentStat['tone']) {
  if (tone === 'positive') {
    return 'text-emerald-400';
  }

  if (tone === 'negative') {
    return 'text-red-400';
  }

  if (tone === 'warning') {
    return 'text-yellow-400';
  }

  return 'text-slate-300';
}

export function FuturesMarketStats({
  stats
}: {
  stats: FuturesInstrumentStat[];
}) {
  return (
    <div className="flex min-w-max items-center gap-7">
      {stats.map((item) => (
        <div key={item.label} className="space-y-1">
          <div className="text-xs text-slate-500">{item.label}</div>
          <div className={['text-sm font-medium', getToneClassName(item.tone)].join(' ')}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
