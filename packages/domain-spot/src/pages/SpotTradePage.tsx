import {
  KlinePlaceholder,
  OrderBook,
  RecentTrades,
  SymbolSelector,
  TickerBar
} from '@mini-exchange/domain-market';
import { SpotBalanceTable } from '@mini-exchange/domain-wallet';
import { SpotOpenOrders } from '../components/SpotOpenOrders';
import { SpotOrderForm } from '../components/SpotOrderForm';

export function SpotTradePage({ symbol }: { symbol: string }) {
  return (
    <div className="space-y-4">
      <TickerBar symbol={symbol} />
      <SymbolSelector symbol={symbol} />

      <div className="grid gap-4 lg:grid-cols-[320px_1fr_360px]">
        <OrderBook />
        <KlinePlaceholder />
        <SpotOrderForm />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <RecentTrades />
        <SpotOpenOrders />
        <SpotBalanceTable />
      </div>
    </div>
  );
}
