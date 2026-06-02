import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';
import { MarketsTradingDataLayout } from '../components/MarketsTradingDataLayout';

export function MarketsPerpetualTradingDataPage() {
  return (
    <MarketsTradingDataLayout activeHref="/markets/trading_data/futures/perpetual/trading-data">
      <MarketsTablePlaceholder
        title="U本位合约"
        description="U本位合约交易数据内容占位。后续可展示永续合约价格、资金费率、持仓量、成交量和多空比。"
      />
    </MarketsTradingDataLayout>
  );
}
