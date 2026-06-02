import { MarketsAssetPageTemplate } from './MarketsAssetPageTemplate';

export function MarketsSpotPage() {
  return (
    <MarketsAssetPageTemplate
      activeAssetKey="spot"
      title="现货"
      description="现货市场内容占位。后续可展示 USDT、FDUSD、BTC 等报价区的现货交易对行情。"
    />
  );
}
