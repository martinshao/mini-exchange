import { MarketsAssetPageTemplate } from './MarketsAssetPageTemplate';

export function MarketsTradfiPage() {
  return (
    <MarketsAssetPageTemplate
      activeAssetKey="tradfi"
      title="TradFi"
      description="TradFi 市场内容占位。后续可承载股票指数、大宗商品、外汇等传统金融衍生市场。"
    />
  );
}
