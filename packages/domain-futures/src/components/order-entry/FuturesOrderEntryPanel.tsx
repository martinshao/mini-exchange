import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';

export function FuturesOrderEntryPanel() {
  return (
    <FuturesPanelFrame title="下单">
      <div className="space-y-4 p-4 text-sm text-slate-500">
        <div className="grid grid-cols-3 gap-2">
          <span className="rounded bg-slate-800 px-3 py-2 text-center text-slate-200">
            全仓
          </span>
          <span className="rounded bg-slate-800 px-3 py-2 text-center text-slate-200">
            10x
          </span>
          <span className="rounded bg-slate-800 px-3 py-2 text-center text-slate-200">
            S
          </span>
        </div>
        <div className="rounded-md border border-slate-800 p-3">开仓 / 平仓</div>
        <div className="rounded-md border border-slate-800 p-3">限价 / 市价 / 条件委托</div>
        <div className="rounded-md border border-slate-800 p-3">价格输入占位</div>
        <div className="rounded-md border border-slate-800 p-3">数量输入占位</div>
      </div>
    </FuturesPanelFrame>
  );
}
