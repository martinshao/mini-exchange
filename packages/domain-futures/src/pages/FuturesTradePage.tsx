import { FuturesTradingWorkspace } from '../components/workspace/FuturesTradingWorkspace';

export function FuturesTradePage({ symbol }: { symbol: string }) {
  return <FuturesTradingWorkspace symbol={symbol} />;
}
