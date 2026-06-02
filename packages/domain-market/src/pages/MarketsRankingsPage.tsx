import { MarketsCategoryTabs } from '../components/MarketsCategoryTabs';
import { MarketsLayout } from '../components/MarketsLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsRankingsPage() {
  return (
    <MarketsLayout activeKey="trading-data">
      <MarketsCategoryTabs activeKey="new-listings" />

      <MarketsTablePlaceholder
        title="排行榜"
        description="排行榜模块内容占位。后续可拆分为热门榜、新币榜、领涨榜、成交榜和自定义排序维度。"
      />
    </MarketsLayout>
  );
}
