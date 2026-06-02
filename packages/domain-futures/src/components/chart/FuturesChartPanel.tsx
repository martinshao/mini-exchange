import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';

export function FuturesChartPanel() {
  return (
    <FuturesPanelFrame
      title="图表"
      actions={
        <div className="flex gap-4 text-xs text-slate-500">
          <span>Trading View</span>
          <span>深度图</span>
        </div>
      }
    >
      <div className="flex h-full flex-col">
        <div className="flex h-10 shrink-0 items-center gap-4 border-b border-slate-800 px-4 text-xs text-slate-500">
          <span>1分钟</span>
          <span>5分钟</span>
          <span>15分钟</span>
          <span>1小时</span>
          <span className="text-slate-200">1天</span>
        </div>

        <div className="grid min-h-0 flex-1 place-items-center bg-[linear-gradient(#242a35_1px,transparent_1px),linear-gradient(90deg,#242a35_1px,transparent_1px)] bg-[size:120px_64px] text-sm text-slate-500">
          K线图占位，可在下一步接入 mock K线或 lightweight-charts
        </div>
      </div>
    </FuturesPanelFrame>
  );
}
