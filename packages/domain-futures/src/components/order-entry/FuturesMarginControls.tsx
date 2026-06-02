import type { FuturesMarginMode } from '../../types';

export function FuturesMarginControls({
  marginMode,
  leverage
}: {
  marginMode: FuturesMarginMode;
  leverage: number;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 text-sm font-semibold">
      <button type="button" className="rounded bg-slate-800 px-3 py-2 text-slate-200">
        {marginMode === 'cross' ? '全仓' : '逐仓'}
      </button>
      <button type="button" className="rounded bg-slate-800 px-3 py-2 text-slate-200">
        {leverage}x
      </button>
      <button type="button" className="rounded bg-slate-800 px-3 py-2 text-slate-200">
        S
      </button>
    </div>
  );
}
