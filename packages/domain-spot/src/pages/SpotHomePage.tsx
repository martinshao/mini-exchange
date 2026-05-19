import { DEFAULT_SYMBOL } from '@mini-exchange/config';
import { Panel } from '@mini-exchange/layout';

export function SpotHomePage() {
  return (
    <Panel>
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Spot Domain
        </p>

        <h1 className="text-2xl font-semibold">Spot Trading</h1>

        <p className="max-w-3xl text-sm leading-6 text-slate-500">
          Spot business domain package skeleton.
        </p>

        <a
          href={`/spot/trade/${DEFAULT_SYMBOL}`}
          className="inline-flex rounded-md border px-3 py-2 text-sm"
        >
          Open BTC/USDT Spot Trade
        </a>
      </div>
    </Panel>
  );
}
