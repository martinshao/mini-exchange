import type { FuturesInstrument } from '../../types';
import { FuturesChangeText } from './FuturesChangeText';

export function FuturesInstrumentSummary({
  instrument
}: {
  instrument: FuturesInstrument;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <span className="rounded-md bg-slate-800 px-2 py-1 text-sm text-yellow-300">
        ★
      </span>
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-slate-100">
            {instrument.symbol}
          </h1>
          <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
            {instrument.contractType}
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-red-400">
            {instrument.lastPrice}
          </span>
          <span className="text-xs">
            {instrument.priceChange}
          </span>
          <span className="text-xs">
            <FuturesChangeText value={instrument.priceChangePercent} />
          </span>
        </div>
      </div>
    </div>
  );
}
