import { MarketsAssetPageTemplate } from './MarketsAssetPageTemplate';

export function MarketsFavoritePage() {
  return (
    <MarketsAssetPageTemplate
      activeAssetKey="watchlist"
      title="自选"
      description="自选市场内容占位。后续可承载持仓、自选币种行情、自选合约和分组筛选。"
    />
  );
}
