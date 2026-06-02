import { mockFuturesOrderEntry } from '../../constants/futures-mock-data';
import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';
import { FuturesMarginControls } from './FuturesMarginControls';
import { FuturesOrderInput } from './FuturesOrderInput';
import { FuturesOrderModeTabs } from './FuturesOrderModeTabs';
import { FuturesRiskControls } from './FuturesRiskControls';
import { FuturesSubmitButtons } from './FuturesSubmitButtons';

export function FuturesOrderEntryPanel() {
  return (
    <FuturesPanelFrame title="下单">
      <div className="space-y-4 overflow-y-auto p-4 text-sm">
        <FuturesMarginControls
          marginMode={mockFuturesOrderEntry.marginMode}
          leverage={mockFuturesOrderEntry.leverage}
        />

        <div className="grid grid-cols-2 rounded-md bg-[#0f131a] p-1 text-center text-sm font-semibold">
          <button type="button" className="rounded bg-slate-700 px-3 py-2 text-slate-100">
            开仓
          </button>
          <button type="button" className="px-3 py-2 text-slate-500">
            平仓
          </button>
        </div>

        <FuturesOrderModeTabs activeType={mockFuturesOrderEntry.orderType} />

        <div className="flex justify-between text-xs text-slate-500">
          <span>可用</span>
          <span>{mockFuturesOrderEntry.availableBalance}</span>
        </div>

        <FuturesOrderInput
          label={mockFuturesOrderEntry.pricePlaceholder}
          value={mockFuturesOrderEntry.price}
          suffix="USDT"
        />
        <FuturesOrderInput
          label={mockFuturesOrderEntry.quantityPlaceholder}
          value={mockFuturesOrderEntry.quantity}
          suffix={mockFuturesOrderEntry.quantityUnit}
        />

        <FuturesRiskControls
          stopLossTakeProfit={mockFuturesOrderEntry.stopLossTakeProfit}
          reduceOnly={mockFuturesOrderEntry.reduceOnly}
        />

        <FuturesSubmitButtons />
      </div>
    </FuturesPanelFrame>
  );
}
