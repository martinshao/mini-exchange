import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';
import { MarketsTradingDataLayout } from '../components/MarketsTradingDataLayout';

export function MarketsRankingsPage() {
  return (
    <MarketsTradingDataLayout activeHref="/markets/trading_data/rankings">
      <MarketsTablePlaceholder
        title="排行榜"
        description="排行榜模块内容占位。后续可拆分为热门榜、新币榜、领涨榜、成交榜和自定义排序维度。"
      />
    </MarketsTradingDataLayout>
  );
}
