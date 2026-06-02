import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';
import { MarketsTradingDataLayout } from '../components/MarketsTradingDataLayout';

export function MarketsQuarterlyTradingDataPage() {
  return (
    <MarketsTradingDataLayout activeHref="/markets/trading_data/futures/quarterly/trading-data">
      <MarketsTablePlaceholder
        title="币本位合约"
        description="币本位合约交易数据内容占位。后续可展示交割合约价格、基差、持仓量、成交量和到期日信息。"
      />
    </MarketsTradingDataLayout>
  );
}
