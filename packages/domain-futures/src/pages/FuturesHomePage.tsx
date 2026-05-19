import { DEFAULT_SYMBOL } from '@mini-exchange/config';
import { Panel } from '@mini-exchange/layout';

export function FuturesHomePage() {
  return (
    <Panel>
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-slate-500">
          Futures Domain
        </p>

        <h1 className="text-2xl font-semibold">Futures Trading</h1>

        <p className="max-w-3xl text-sm leading-6 text-slate-500">
          Futures business domain package skeleton.
        </p>

        <a
          href={`/futures/trade/${DEFAULT_SYMBOL}`}
          className="inline-flex rounded-md border px-3 py-2 text-sm"
        >
          Open BTCUSDT Futures Trade
        </a>
      </div>
    </Panel>
  );
}
