import { MarketsLayout } from '../components/MarketsLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsAiSelectPage() {
  return (
    <MarketsLayout activeKey="ai-select">
      <MarketsTablePlaceholder
        title="AI精选"
        description="AI精选模块内容占位。后续可接入智能筛选策略、热点主题、异动资产和推荐理由。"
      />
    </MarketsLayout>
  );
}
