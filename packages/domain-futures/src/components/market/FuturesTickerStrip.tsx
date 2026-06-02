import { mockFuturesTickerStrip } from '../../constants/futures-mock-data';
import { FuturesChangeText } from './FuturesChangeText';

export function FuturesTickerStrip() {
  return (
    <div className="flex h-10 shrink-0 items-center gap-6 overflow-x-auto border-b border-slate-800 bg-[#151922] px-4 text-xs font-semibold">
      {mockFuturesTickerStrip.map((item) => (
        <span key={item.symbol} className="flex shrink-0 items-center gap-1">
          <span className="text-slate-300">{item.symbol}</span>
          <FuturesChangeText value={item.change} />
          <span className="text-slate-600">{item.price}</span>
        </span>
      ))}
    </div>
  );
}
