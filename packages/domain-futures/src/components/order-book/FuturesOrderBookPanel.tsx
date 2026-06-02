import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';

export function FuturesOrderBookPanel() {
  return (
    <FuturesPanelFrame title="订单簿">
      <div className="grid h-full place-items-center px-4 text-center text-sm text-slate-500">
        订单簿占位：卖盘 / 买盘 / 深度条 / 精度切换
      </div>
    </FuturesPanelFrame>
  );
}
