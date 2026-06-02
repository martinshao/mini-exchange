import { MarketsCategoryTabs } from '../components/MarketsCategoryTabs';
import { MarketsLayout } from '../components/MarketsLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsQuarterlyTradingDataPage() {
  return (
    <MarketsLayout activeKey="trading-data">
      <MarketsCategoryTabs activeKey="futures" />

      <MarketsTablePlaceholder
        title="币本位合约"
        description="币本位合约交易数据内容占位。后续可展示交割合约价格、基差、持仓量、成交量和到期日信息。"
      />
    </MarketsLayout>
  );
}
