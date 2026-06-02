import { MarketsCategoryTabs } from '../components/MarketsCategoryTabs';
import { MarketsLayout } from '../components/MarketsLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsTradingDataPage() {
  return (
    <MarketsLayout activeKey="trading-data">
      <MarketsCategoryTabs activeKey="futures" />

      <MarketsTablePlaceholder
        title="交易数据"
        description="交易数据模块内容占位。后续可在这里接入现货、合约、成交额、资金流和波动率等市场数据视图。"
      />
    </MarketsLayout>
  );
}
