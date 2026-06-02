import { mockFuturesChart } from '../../constants/futures-mock-data';
import { FuturesPanelFrame } from '../workspace/FuturesPanelFrame';
import { FuturesChartCanvas } from './FuturesChartCanvas';
import { FuturesChartToolbar } from './FuturesChartToolbar';
import { FuturesDrawingToolbar } from './FuturesDrawingToolbar';

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
        <FuturesChartToolbar
          intervals={mockFuturesChart.intervals}
          modes={mockFuturesChart.modes}
        />

        <div className="flex min-h-0 flex-1">
          <FuturesDrawingToolbar tools={mockFuturesChart.drawingTools} />
          <FuturesChartCanvas chart={mockFuturesChart} />
        </div>
      </div>
    </FuturesPanelFrame>
  );
}
