import { futuresBottomTabs } from '../../constants/futures-workspace-mock';
import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';

export function FuturesBottomDock() {
  return (
    <FuturesPanelFrame>
      <div className="flex h-full flex-col">
        <nav className="flex h-11 shrink-0 items-center gap-5 border-b border-slate-800 px-4 text-sm font-medium text-slate-500">
          {futuresBottomTabs.map((tab, index) => (
            <span
              key={tab}
              className={index === 0 ? 'text-slate-100' : undefined}
            >
              {tab}
            </span>
          ))}
        </nav>

        <div className="grid min-h-0 flex-1 place-items-center text-sm text-slate-500">
          底部 Dock 占位：仓位 / 委托 / 历史成交 / 资产
        </div>
      </div>
    </FuturesPanelFrame>
  );
}
