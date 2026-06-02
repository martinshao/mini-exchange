import type { FuturesOrderBookLevel } from '../../types';

export function FuturesOrderBookRows({
  levels,
  side
}: {
  levels: FuturesOrderBookLevel[];
  side: 'ask' | 'bid';
}) {
  const textClassName = side === 'ask' ? 'text-red-400' : 'text-emerald-400';
  const depthClassName = side === 'ask' ? 'bg-red-500/10' : 'bg-emerald-500/10';

  return (
    <div className="space-y-0.5">
      {levels.map((level) => (
        <div
          key={`${side}-${level.price}`}
          className="relative grid h-6 grid-cols-3 items-center overflow-hidden rounded-sm px-3 text-xs"
        >
          <span
            className={[
              'absolute bottom-0 right-0 top-0',
              depthClassName
            ].join(' ')}
            style={{ width: `${level.depthPercent}%` }}
          />
          <span className={['relative font-medium', textClassName].join(' ')}>
            {level.price}
          </span>
          <span className="relative text-right text-slate-300">
            {level.quantity}
          </span>
          <span className="relative text-right text-slate-300">
            {level.total}
          </span>
        </div>
      ))}
    </div>
  );
}
