import { MarketsLayout } from '../components/MarketsLayout';
import { MarketsTablePlaceholder } from '../components/MarketsTablePlaceholder';

export function MarketsTokenUnlockPage() {
  return (
    <MarketsLayout activeKey="token-unlock">
      <MarketsTablePlaceholder
        title="代币解锁"
        description="代币解锁模块内容占位。后续可展示项目名称、解锁时间、解锁数量、流通占比和事件提醒。"
      />
    </MarketsLayout>
  );
}
