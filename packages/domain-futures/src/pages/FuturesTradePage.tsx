import {
  KlinePlaceholder,
  OrderBook,
  RecentTrades,
  SymbolSelector,
  TickerBar
} from '@mini-exchange/domain-market';
import { FuturesRiskAgreement, LeverageRiskWarning } from '@mini-exchange/domain-risk';
import { FuturesMarginTable } from '@mini-exchange/domain-wallet';
import { FundingRatePanel } from '../components/FundingRatePanel';
import { FuturesOrderForm } from '../components/FuturesOrderForm';
import { LiquidationRiskPanel } from '../components/LiquidationRiskPanel';
import { PositionPanel } from '../components/PositionPanel';

export function FuturesTradePage({ symbol }: { symbol: string }) {
  return (
    <div className="space-y-4">
      <TickerBar symbol={`${symbol} Perpetual`} />
      <SymbolSelector symbol={symbol} />

      <FuturesRiskAgreement />
      <LeverageRiskWarning leverage={20} />

      <div className="grid gap-4 lg:grid-cols-[320px_1fr_360px]">
        <OrderBook />
        <KlinePlaceholder />
        <FuturesOrderForm />
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        <RecentTrades />
        <PositionPanel />
        <FundingRatePanel />
        <LiquidationRiskPanel />
      </div>

      <FuturesMarginTable />
    </div>
  );
}
