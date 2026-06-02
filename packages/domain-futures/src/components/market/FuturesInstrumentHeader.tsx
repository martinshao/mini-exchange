import { mockFuturesInstrument } from '../../constants/futures-mock-data';
import { FuturesInstrumentSummary } from './FuturesInstrumentSummary';
import { FuturesMarketStats } from './FuturesMarketStats';

export function FuturesInstrumentHeader({ symbol }: { symbol: string }) {
  const instrument = {
    ...mockFuturesInstrument,
    symbol
  };

  return (
    <header className="futures-workspace-scrollbar flex min-h-[72px] items-center gap-6 overflow-x-auto rounded-lg border border-slate-800 bg-[#11151b] px-4">
      <FuturesInstrumentSummary instrument={instrument} />
      <FuturesMarketStats stats={instrument.stats} />
    </header>
  );
}
