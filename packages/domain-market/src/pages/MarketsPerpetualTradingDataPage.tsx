import { MarketsCategoryTabs } from '../components/MarketsCategoryTabs';
import { MarketsLayout } from '../components/MarketsLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsPerpetualTradingDataPage() {
  return (
    <MarketsLayout activeKey="trading-data">
      <MarketsCategoryTabs activeKey="futures" />

      <MarketsTablePlaceholder
        title="U本位合约"
        description="U本位合约交易数据内容占位。后续可展示永续合约价格、资金费率、持仓量、成交量和多空比。"
      />
    </MarketsLayout>
  );
}
