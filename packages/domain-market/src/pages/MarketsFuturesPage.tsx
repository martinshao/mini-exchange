import { MarketsAssetPageTemplate } from './MarketsAssetPageTemplate';

export function MarketsFuturesPage() {
  return (
    <MarketsAssetPageTemplate
      activeAssetKey="futures"
      title="合约"
      description="合约市场内容占位。后续可展示永续合约、交割合约、资金费率和持仓量等合约行情。"
    />
  );
}
