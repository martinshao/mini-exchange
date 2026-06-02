import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';
import { MarketsTradingDataLayout } from '../components/MarketsTradingDataLayout';

export function MarketsTradingDataPage() {
  return (
    <MarketsTradingDataLayout activeHref="/markets/trading_data">
      <MarketsTablePlaceholder
        title="交易数据"
        description="交易数据模块内容占位。后续可在这里接入现货、合约、成交额、资金流和波动率等市场数据视图。"
      />
    </MarketsTradingDataLayout>
  );
}
