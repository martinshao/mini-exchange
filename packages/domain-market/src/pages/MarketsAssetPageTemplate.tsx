import { MarketsOverviewLikeLayout } from '../components/MarketsOverviewLikeLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';
import type { MarketsAssetTabKey } from '../types/markets';

export function MarketsAssetPageTemplate({
  activeAssetKey,
  title,
  description
}: {
  activeAssetKey: MarketsAssetTabKey;
  title: string;
  description: string;
}) {
  return (
    <MarketsOverviewLikeLayout activeAssetKey={activeAssetKey}>
      <MarketsTablePlaceholder title={title} description={description} />
    </MarketsOverviewLikeLayout>
  );
}
