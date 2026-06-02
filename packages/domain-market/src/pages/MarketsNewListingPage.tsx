import { MarketsAssetPageTemplate } from './MarketsAssetPageTemplate';

export function MarketsNewListingPage() {
  return (
    <MarketsAssetPageTemplate
      activeAssetKey="new-listings"
      title="新币榜"
      description="新币榜内容占位。后续可展示新上线资产、上线时间、交易量、涨跌幅和交易入口。"
    />
  );
}
