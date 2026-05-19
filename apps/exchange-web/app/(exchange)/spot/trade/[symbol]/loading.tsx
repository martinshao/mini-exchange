import { Panel } from '@mini-exchange/layout';

export default function SpotTradeLoading() {
  return (
    <div className="space-y-4">
      <Panel>
        <div className="h-8 w-64 animate-pulse rounded bg-slate-800" />
      </Panel>

      <div className="grid gap-4 lg:grid-cols-[320px_1fr_360px]">
        <Panel>
          <div className="h-80 animate-pulse rounded bg-slate-800" />
        </Panel>
        <Panel>
          <div className="h-80 animate-pulse rounded bg-slate-800" />
        </Panel>
        <Panel>
          <div className="h-80 animate-pulse rounded bg-slate-800" />
        </Panel>
      </div>
    </div>
  );
}
