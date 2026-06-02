import { MarketsOverviewLikeLayout } from '../components/MarketsOverviewLikeLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsOverviewPage() {
  return (
    <MarketsOverviewLikeLayout activeAssetKey="coins">
      <MarketsTablePlaceholder
        title="市值排名前列的代币"
        description="获取币安上所有加密货币的详尽快照。此页面显示市场上所有加密货币的最新价格、24小时交易量、价格变动和市值。用户可以在此页面快速访问有关这些数字资产的关键信息，并访问交易页面。"
      />
    </MarketsOverviewLikeLayout>
  );
}
