import { FuturesTradePage } from '@mini-exchange/domain-futures';

export default async function Page({
  params
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;

  return <FuturesTradePage symbol={symbol} />;
}
